import {
    Table,
    Thead,
    Tr,
    Th,
} from '@chakra-ui/react'
import Campaign from './Campaign'

const CampaignListView = ({ isLoading, hasError, campaigns, handleDelete }) => {
    return (
        <>
            {isLoading && <p className='loader'>Loading...</p>}
            {hasError && <p>Something went wrong, please try again</p>}
            <Table >
                <Thead>
                    <Tr>
                        <Th px='1rem'>Subject:</Th>
                        <Th>Status:</Th>
                        <Th >Created:</Th>
                        <Th px='1rem'>Content:</Th>
                    </Tr>
                </Thead>
                {campaigns && campaigns.map((elem) => <Campaign
                    handleDelete={handleDelete}
                    key={elem.id}
                    status={elem.fields.status}
                    created={elem.fields.created}
                    content={elem.fields.content}
                    subject={elem.fields.subject}
                    hasError={hasError}
                    handleDelete={handleDelete} />
                )}
            </Table >
        </>
    )
}

export default CampaignListView
