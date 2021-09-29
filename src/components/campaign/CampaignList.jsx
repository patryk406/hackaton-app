import { useState, useEffect } from 'react'

import api from '../../api'
import CampaignListView from './components/CampaignListView'

const CampaignList = () => {
    const [campaigns, setCampaigns] = useState();
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    const [hasDelete, setDelete] = useState(false)
    const endpoint = '/campaigns'

    const handleDelete = (id) => (e) => {
        api
            .delete(`${endpoint}/${id}`)
            .then(res => {
                setDelete(true)
                setError(false)
            })
            .catch(err => {
                console.log(err)
                setDelete(false)
                setError(true)
            })
    }
    useEffect(() => {
        api.get(endpoint)
            .then(data => {
                setCampaigns(data.records)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setError(true)
                setLoading(false)
            })
        setDelete(false)
    }, [hasDelete])
    return (
        <CampaignListView isLoading={isLoading} hasError={hasError} campaigns={campaigns} handleDelete={handleDelete} />
    )
}


export default CampaignList
