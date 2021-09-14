import { Input, Button, ButtonGroup, Stack, Flex } from "@chakra-ui/react"
import api from '../../api'
import { useState } from 'react'
import { useForm } from "react-hook-form";
const NewCampaign = () => {
    const {
        watch,
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const endpoint = '/campaigns'
    const handlePosting = (data) => {
        console.log(data)
        api.post(endpoint, {
            fields: {
                status: "Draft",
                subject: data.subject,
                content: data.content
            }
        })
        reset()
    }
    console.log(watch("status"));
    return (
        <Flex justify='center' align='center' >
            <form onSubmit={handleSubmit(handlePosting)}>
                <Stack spacing={4} direction="column" align="center"  >
                    <Input
                        {...register("content", { required: true })}
                        name='content'
                        type='text'
                        placeholder='type your content'
                        size="md" />
                    {errors.content && <>this field is needed</>}
                    <Input
                        {...register("subject", { required: true })}
                        type='text'
                        name='subject'
                        placeholder='type your subject'
                        size="md" />
                    {errors.subject && <>this field is needed</>}
                    <ButtonGroup>
                        <Button value='Draft' type='submit' colorScheme="pink" size="sm">Save</Button>
                        <Button value='Send' type='submit' colorScheme="teal" size="sm">Send</Button>
                    </ButtonGroup>
                </Stack>
            </form>
        </Flex>
    )
}
export default NewCampaign