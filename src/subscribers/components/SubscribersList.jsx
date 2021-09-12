import { useState, useEffect } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
} from "@chakra-ui/react"
const SubscribersList = () => {

    const [subscribers, setSubscribers] = useState();
    const apiKey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        fetch(`https://api.airtable.com/v0/appBFUZ0hSOmXC476/subscribers?api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                setSubscribers(data.records)
            })
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
