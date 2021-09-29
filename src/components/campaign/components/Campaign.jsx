import {
    Tbody,
    Tr,
    Th,
    Button
} from '@chakra-ui/react'

const Campaign = ({ id, subject, status, created, content, hasError, handleDelete }) => {
    return (
        <Tbody>
            <Tr>
                <Th px='1rem'>{subject}</Th>
                <Th>{status}</Th>
                <Th >{new Date(created).toDateString()}</Th>
                <Th px='1rem'>{content}</Th>
                <Th>
                    {status === 'Draft' && <Button colorScheme='pink' onClick={handleDelete(id)}>X</Button>}
                    {hasError && <>Item can't be deleted or some other problem occured</>}
                </Th>

            </Tr>
        </Tbody>
    )
}

export default Campaign
