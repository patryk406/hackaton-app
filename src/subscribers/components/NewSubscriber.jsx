import { Input, Button, Stack, Flex } from "@chakra-ui/react"
import api from '../../api'
import { useState } from 'react'
const NewSubscriber = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const endpoint = '/subscribers'
    let subscriber = {
        "fields": {
            "email": email,
            "name": name
        }
    }
    const handlePosting = () => {
        api.post(endpoint, subscriber)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        handlePosting()
        e.preventDefault()
    }
    return (
        <Flex justify='center' align='center' onSubmit={handleSubmit}>
            <form>
                <Stack spacing={4} direction="column" align="center" >
                    <Input
                        value={email}
                        onChange={handleEmail}
                        type='email' name='email'
                        placeholder='type your email'
                        size="md" />
                    <Input
                        value={name}
                        onChange={handleName}
                        type='name'
                        name='name'
                        placeholder='type your name'
                        size="md" />
                    <Button type='submit' onClick={handleSubmit} colorScheme="teal" size="sm">Send</Button>
                </Stack>
            </form>
        </Flex>
    )
}
export default NewSubscriber