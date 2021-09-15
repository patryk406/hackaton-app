import { Input, Button, ButtonGroup, Stack, Flex, Textarea } from "@chakra-ui/react"
import api from '../../api'
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com'

// template_q4l8byi
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
    useEffect(() => {
        api
            .get('/subscribers')
            .then(data => {
                setSubscribers(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const handleDraft = (data) => {
        api.post(endpoint, {
            fields: {
                status: "Draft",
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
            emailjs.send("itachi090", "template_q4l8byi", content, "user_xehx51emRLRfYA14tydRw")
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
                    status: "Send",
                    subject: data.subject,
                    content: data.content
                }
            })
        }
        reset()
    }
    return (
        <Flex justify='center' align='center'>
            <form>
                <Stack spacing={4} direction="column" align="center"  >
                    <Input
                        {...register("subject", { required: true })}
                        type='text'
                        name='subject'
                        placeholder='type your subject'
                        size="md" />
                    {errors.subject && <>this field is needed</>}
                    <Textarea
                        {...register("content", { required: true })}
                        name='content'
                        type='text'
                        placeholder='type your content'
                        size="md"
                        cols={50} />
                    {errors.content && <>this field is needed</>}
                    <ButtonGroup>
                        <Button onClick={handleSubmit(handleDraft)} value='Draft' type='submit' colorScheme="pink" size="sm">Save</Button>
                        <Button onClick={handleSubmit(handleSend)} value='Send' type='submit' colorScheme="teal" size="sm">Send</Button>
                    </ButtonGroup>
                </Stack>
            </form>
            {message && <>Something goes wrong, please try again later</>}
        </Flex>
    )
}
export default NewCampaign