import { useState, useEffect } from 'react'
import { Flex, Box } from "@chakra-ui/react"
const CampaignList = () => {

    const [campaigns, setCampaigns] = useState();
    const apiKey = 'key3B3q4yNmap0UCm'

    useEffect(() => {
        fetch(`https://api.airtable.com/v0/appBFUZ0hSOmXC476/campaigns?api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                setCampaigns(data.records)
            })
    }, [])
    console.log(campaigns && campaigns[0])
    return (
        <Box>
            <Box borderBottom='2px solid black'>
                <Flex justify='space-between'>
                    <Box px='1rem'>Subject:</Box>
                    <Box>Status:</Box>
                    <Box >Created:</Box>
                    <Box px='1rem'>Content:</Box>
                </Flex>
            </Box>
            {campaigns && campaigns.map((elem) => {
                return (
                    <Flex justify='space-between' key={elem.id}>
                        <Box px='1rem'>{elem.fields.subject}</Box>
                        <Box>{elem.fields.status}</Box>
                        <Box >{elem.fields.created}</Box>
                        <Box px='1rem'>{elem.fields.content}</Box>
                    </Flex>
                )

            })}
        </Box >
    )
}


export default CampaignList
