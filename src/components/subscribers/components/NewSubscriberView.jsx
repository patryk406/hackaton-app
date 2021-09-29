import React from 'react'
import { Stack, Flex } from '@chakra-ui/react'
import NewButton from './NewButton'
import NewInput from './NewInput'

function NewSubscriberView({ handleSubmit, handlePosting, register, errors }) {

    return (
        <Flex justify='center' align='center'>
            <form onSubmit={handleSubmit(handlePosting)}>
                <Stack spacing={4} direction='column' align='center' >
                    <NewInput
                        register={register}
                        isRequired
                        name='email'
                        size='md' />
                    {errors.email && <>this field is needed</>}
                    <NewInput
                        register={register}
                        isRequired
                        name='name'
                        size='md' />
                    {errors.name && <>this field is needed</>}
                    <NewButton label='Send' size='md' type='submit' colorScheme='teal' />
                </Stack>
            </form>
        </Flex >
    )
}

export default NewSubscriberView
