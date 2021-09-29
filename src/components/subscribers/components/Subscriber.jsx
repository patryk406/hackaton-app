import {
    Tbody,
    Tr,
    Th,
} from '@chakra-ui/react'

function Subscriber({ convertTime, id, email, name, created }) {
    return (
        <Tbody key={id}>
            <Tr>
                <Th px='1rem'>{email}</Th>
                <Th>{name}</Th>
                <Th px='1rem'>{convertTime(created)}</Th>
            </Tr>
        </Tbody>
    )
}

export default Subscriber
