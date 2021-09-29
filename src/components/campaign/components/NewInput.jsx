import { Input } from '@chakra-ui/react'
import React from 'react'

const NewInput = ({ register, isRequired, type, name, size }) => (
    <Input
        {...register(name, { required: isRequired })}
        type={type}
        name='subject'
        placeholder={`type your ${name}`}
        size={size} />
)

export default NewInput
