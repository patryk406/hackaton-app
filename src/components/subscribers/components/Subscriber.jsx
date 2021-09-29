import {
    Tbody,
    Tr,
    Th,
} from '@chakra-ui/react'

function Subscriber({ email, name, created }) {
    return (
        <Tbody>
            <Tr>
                <Th px='1rem'>{email}</Th>
                <Th>{name}</Th>
                <Th px='1rem'>{new Date(created).toDateString()}</Th>
            </Tr>
        </Tbody>
    )
}

export default Subscriber
