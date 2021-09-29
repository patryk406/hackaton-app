import React from 'react'
import { ButtonGroup, Stack, Flex } from '@chakra-ui/react'

import NewInput from './NewInput'
import NewTextarea from './NewTextarea'
import NewButton from './NewButton'

const NewCampaignView = ({ register, handleSubmit, handleDraft, handleSend, errors, message }) => {

    return (
        <Flex justify='center' align='center'>
            <form>
                <Stack spacing={4} direction='column' align='center'  >
                    <NewInput
                        register={register}
                        isRequired
                        type='text'
                        name='subject'
                        size='md' />
                    {errors.subject && <>this field is needed</>}
                    <NewTextarea
                        register={register}
                        isRequired
                        name='content'
                        type='text'
                        size='md'
                        cols={50} />
                    {errors.content && <>this field is needed</>}
                    <ButtonGroup>
                        <NewButton handleSubmit={handleSubmit} handleMethod={handleDraft} value='Draft' type='submit' colorScheme='pink' size='sm' label='Save' />
                        <NewButton handleSubmit={handleSubmit} handleMethod={handleSend} value='Send' type='submit' colorScheme='teal' size='sm' label='Send' />
                    </ButtonGroup>
                </Stack>
            </form>
            {message && <>Something goes wrong, please try again later</>}
        </Flex>
    )
}

export default NewCampaignView
