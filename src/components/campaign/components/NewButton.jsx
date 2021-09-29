import { Button } from '@chakra-ui/react'

const NewButton = ({ handleSubmit, handleMethod, value, type, colorScheme, size, label }) =>
(
    <Button
        onClick={handleSubmit(handleMethod)}
        value={value} type={type}
        colorScheme={colorScheme}
        size={size}>
        {label}
    </Button>
)


export default NewButton
