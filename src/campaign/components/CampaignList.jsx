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
    }, [campaigns])
    const handleDelete = () => {
        console.log('clicked')
    }
    return (
        <>
            {isLoading && <p className='loader'>Loading...</p>}
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
                                <Th>{elem.fields.status === 'Draft' ? <Button onClick={handleDelete}>X</Button> : ''}</Th>
                            </Tr>
                        </Tbody>
                    )
                })}
            </Table >
        </>
    )
}


export default CampaignList
