import { useState, useEffect } from 'react'
import { Flex, Box } from "@chakra-ui/react"
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
        <Box>
            <Box borderBottom='2px solid black'>
                <Flex justify='space-between'>
                    <Box px='1rem'>Email:</Box>
                    <Box>Name:</Box>
                    <Box px='1rem'>Created:</Box>
                </Flex>
            </Box>
            {subscribers && subscribers.map((elem) => {
                return (
                    <Flex justify='space-between' key={elem.id}>
                        <Box px='1rem'>{elem.fields.email}</Box>
                        <Box>{elem.fields.name}</Box>
                        <Box px='1rem'>{elem.fields.created}</Box>
                    </Flex>
                )

            })}
        </Box >
    )
}


export default SubscribersList
