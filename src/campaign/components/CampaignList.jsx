import { useState, useEffect } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
} from "@chakra-ui/react"
const CampaignList = () => {

    const [campaigns, setCampaigns] = useState();
    const apiKey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        fetch(`https://api.airtable.com/v0/appBFUZ0hSOmXC476/campaigns?api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                setCampaigns(data.records)
            })
            .catch(err => console.log(err))
    }, [])
    return (
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
                        </Tr>
                    </Tbody>
                )

            })}
        </Table >
    )
}


export default CampaignList
