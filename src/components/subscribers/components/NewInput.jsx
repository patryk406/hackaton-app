import { Input } from '@chakra-ui/react'

const NewInput = ({ name, register, size, isRequired }) => {
    return (
        <Input
            {...register(name, { required: isRequired })}
            type={name}
            name={name}
            placeholder={`type your ${name}`}
            size={size} />
    )
}
export default NewInput