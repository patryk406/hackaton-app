import { useForm } from 'react-hook-form';

import api from '../../api'
import NewSubscriberView from './components/NewSubscriberView';

const NewSubscriber = () => {
    // init form from hooks
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    // taking the endpoint
    const endpoint = '/subscribers'
    // posting subscribers & clearing
    const handlePosting = (data) => {
        api.post(endpoint, {
            fields: {
                name: data.name,
                email: data.email
            }
        })
        reset()
    }
    return (<NewSubscriberView handlePosting={handlePosting} handleSubmit={handleSubmit} register={register} errors={errors} />)
}
export default NewSubscriber