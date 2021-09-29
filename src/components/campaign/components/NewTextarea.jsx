import { Textarea } from '@chakra-ui/react'

const NewTextarea = ({ register, isRequired, name, type, size, cols }) => (
    <Textarea
        {...register(name, { required: isRequired })}
        name={name}
        type={type}
        placeholder={`type your ${name}`}
        size={size}
        cols={cols} />
)

export default NewTextarea
