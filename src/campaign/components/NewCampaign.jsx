import { Input, Button, ButtonGroup, Stack, Flex } from "@chakra-ui/react"
import { useState } from 'react'
const NewCampaign = () => {
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const handleSubject = (e) => {
        setSubject(e.target.value)
    }
    const handleContent = (e) => {
        setContent(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Flex justify='center' align='center' onSubmit={handleSubmit}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4} direction="column" align="center" >
                    <Input
                        value={content}
                        name='content'
                        onChange={handleContent}
                        type='text'
                        placeholder='type your content'
                        size="md" />
                    <Input
                        value={subject}
                        onChange={handleSubject}
                        type='name'
                        name='subject'
                        placeholder='type your subject'
                        size="md" />
                    <ButtonGroup >
                        <Button type='submit' colorScheme="teal" size="sm">Send</Button>
                        <Button type='submit' colorScheme="pink" size="sm">Save</Button>
                    </ButtonGroup>
                </Stack>
            </form>
        </Flex>
    )
}
export default NewCampaign