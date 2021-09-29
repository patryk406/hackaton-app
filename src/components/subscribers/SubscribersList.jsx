import { useState, useEffect } from 'react'


import api from '../../api'
import SubscribersListView from './components/SubscribersListView';

const SubscribersList = () => {

    const [subscribers, setSubscribers] = useState();
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    const endpoint = '/subscribers'
    useEffect(() => {
        api
            .get(endpoint)
            .then(data => {
                setSubscribers(data.records)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setError(true)
                setLoading(false)
            })
    }, [])

    return (<SubscribersListView subscribers={subscribers} hasError={hasError} isLoading={isLoading} />)
}


export default SubscribersList
