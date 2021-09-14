import { useState, useEffect } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
} from "@chakra-ui/react"
import api from '../../api'
const SubscribersList = () => {

    const [subscribers, setSubscribers] = useState();
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    const endpoint = '/subscribers'
    useEffect(() => {
        api
            .get(endpoint)
            .then(data => {
                setSubscribers(data.records)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setError(true)
                setLoading(false)
            })
    }, [])
    const convertTime = (params) => {
        return new Date(params).toDateString();
    }

    return (
        <>
            {isLoading && <p className='loader'>Loading...</p>}
            <Table>

                <Thead>
                    <Tr justify='space-between'>
                        <Th px='1rem'>Email:</Th>
                        <Th>Name:</Th>
                        <Th px='1rem'>Created:</Th>
                    </Tr>
                </Thead>
                {subscribers && subscribers.map((elem) => {
                    return (
                        <Tbody key={elem.id}>
                            <Tr>
                                <Th px='1rem'>{elem.fields.email}</Th>
                                <Th>{elem.fields.name}</Th>
                                <Th px='1rem'>{convertTime(elem.fields.created)}</Th>
                            </Tr>
                        </Tbody>
                    )

                })}
            </Table >
            {hasError && <>Something went wrong, please try again</>}
        </>
    )
}


export default SubscribersList
