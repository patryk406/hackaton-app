import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';

import emailjs from 'emailjs-com'

import api from '../../api'
import NewCampaignView from './components/NewCampaignView'

const NewCampaign = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const endpoint = '/campaigns'
    const [subscribers, setSubscribers] = useState([]);
    const [hasError, setError] = useState(false);
    const [message, setMessage] = useState(false);

    const handleDraft = (data) => {
        api.post(endpoint, {
            fields: {
                status: 'Draft',
                subject: data.subject,
                content: data.content
            }
        })
        reset()
    }
    const handleSend = (data) => {
        subscribers.records.forEach((elem) => {
            const content = {
                subject: data.subject,
                name: elem.fields.name,
                campaign: data.content,
                email: elem.fields.email
            }
            emailjs.send(process.env.REACT_APP_MAIL_USER, process.env.REACT_APP_MAIL_TEMPLATE, content, process.env.REACT_APP_MAIL_KEY)
                .then(() => {
                    setError(false)
                })
                .catch(err => {
                    console.log('FAILED...', err);
                    setError(false)
                });
        }
        )
        if (hasError) {
            return setMessage(true)
        } else {
            setMessage(false)
            api.post(endpoint, {
                fields: {
                    status: 'Send',
                    subject: data.subject,
                    content: data.content
                }
            })
        }
        reset()
    }
    useEffect(() => {
        api
            .get('/subscribers')
            .then(data => {
                setSubscribers(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [handleSubmit])

    return (
        <NewCampaignView
            register={register}
            errors={errors}
            message={message}
            handleSubmit={handleSubmit}
            handleDraft={handleDraft}
            handleSend={handleSend} />
    )
}
export default NewCampaign