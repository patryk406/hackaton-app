import { useState, useEffect } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Button
} from "@chakra-ui/react"
import api from '../../api'
const CampaignList = () => {
    const [campaigns, setCampaigns] = useState();
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    const [hasDelete, setDelete] = useState(false)
    const endpoint = '/campaigns'
    useEffect(() => {
        api.get(endpoint)
            .then(data => {
                setCampaigns(data.records)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setError(true)
                setLoading(false)
            })
        setDelete(false)
    }, [hasDelete])
    const handleDelete = (id) => (e) => {
        api
            .delete(`${endpoint}/${id}`)
            .then(res => {
                setDelete(true)
                setError(false)
            })
            .catch(err => {
                console.log(err)
                setDelete(false)
                setError(true)
            })
    }
    return (
        <>
            {isLoading && <p className='loader'>Loading...</p>}
            {hasError && <p>Something went wrong, please try again</p>}
            <Table >
                <Thead>
                    <Tr>
                        <Th px='1rem'>Subject:</Th>
                        <Th>Status:</Th>
                        <Th >Created:</Th>
                        <Th px='1rem'>Content:</Th>
                    </Tr>
                </Thead>
                {campaigns && campaigns.map((elem) => {
                    return (
                        <Tbody key={elem.id}>
                            <Tr>
                                <Th px='1rem'>{elem.fields.subject}</Th>
                                <Th>{elem.fields.status}</Th>
                                <Th >{elem.fields.created}</Th>
                                <Th px='1rem'>{elem.fields.content}</Th>
                                <Th>
                                    {elem.fields.status === 'Draft' && <Button colorScheme='pink' onClick={handleDelete(elem.id)}>X</Button>}
                                    {hasError && <>Item can't be deleted or some other problem occured</>}
                                </Th>

                            </Tr>
                        </Tbody>
                    )
                })}
            </Table >
        </>
    )
}


export default CampaignList
