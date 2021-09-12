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
    useEffect(() => {
        api
            .get(`/subscribers`)
            .then(data => {
                setSubscribers(data.records)
            })
            .catch(err => console.log(err))
    }, [])


    return (
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
                            <Th px='1rem'>{elem.fields.created}</Th>
                        </Tr>
                    </Tbody>
                )

            })}
        </Table >
    )
}


export default SubscribersList
