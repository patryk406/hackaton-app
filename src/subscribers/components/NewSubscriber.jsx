import { Input, Button, Stack, Flex } from "@chakra-ui/react"
import api from '../../api'
import { useForm } from "react-hook-form";
import { useState } from 'react'
const NewSubscriber = () => {
    // init form from hooks
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    // taking the endpoint
    const endpoint = '/subscribers'
    // posting subscribers & clearing
    const handlePosting = (data) => {
        api.post(endpoint, {
            fields: {
                name: data.name,
                email: data.email
            }
        })
        reset()
    }
    return (
        <Flex justify='center' align='center'>
            <form onSubmit={handleSubmit(handlePosting)}>
                <Stack spacing={4} direction="column" align="center" >
                    <Input
                        {...register("email", { required: true })}
                        type='email'
                        placeholder='type your email'
                        size="md" />
                    {errors.email && <>this field is needed</>}
                    <Input
                        {...register("name", { required: true })}
                        type='name'
                        name='name'
                        placeholder='type your name'
                        size="md" />
                    {errors.name && <>this field is needed</>}
                    <Button type='submit' colorScheme="teal" size="sm">Send</Button>
                </Stack>
            </form>
        </Flex >
    )
}
export default NewSubscriber