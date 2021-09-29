import {
    Table,
    Thead,
    Tr,
    Th,
} from '@chakra-ui/react'
import Subscriber from './Subscriber'

function SubscribersListView({ hasError, isLoading, subscribers, convertTime }) {
    return (
        <>
            {hasError && <>Something went wrong, please try again</>}
            {isLoading && <p className='loader'>Loading...</p>}
            <Table>
                <Thead>
                    <Tr justify='space-between'>
                        <Th px='1rem'>Email:</Th>
                        <Th>Name:</Th>
                        <Th px='1rem'>Created:</Th>
                    </Tr>
                </Thead>
                {subscribers && subscribers.map((elem) => {
                    return (
                        <Subscriber id={elem.id} email={elem.fields.email} name={elem.fields.name} convertTime={convertTime} created={elem.fields.created} />
                    )
                })}
            </Table >

        </>
    )
}

export default SubscribersListView
