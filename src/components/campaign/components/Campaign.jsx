import {
    Tbody,
    Tr,
    Th,
    Button
} from '@chakra-ui/react'

const Campaign = ({ key, subject, status, created, content, hasError, handleDelete }) => {
    return (
        <Tbody key={key}>
            <Tr>
                <Th px='1rem'>{subject}</Th>
                <Th>{status}</Th>
                <Th >{created}</Th>
                <Th px='1rem'>{content}</Th>
                <Th>
                    {status === 'Draft' && <Button colorScheme='pink' onClick={handleDelete(key)}>X</Button>}
                    {hasError && <>Item can't be deleted or some other problem occured</>}
                </Th>

            </Tr>
        </Tbody>
    )
}

export default Campaign
