import React from 'react'
import { Button } from '@chakra-ui/react'

const NewButton = ({ label, size, type, colorScheme }) => (
    <Button
        type={type}
        colorScheme={colorScheme}
        size={size}>
        {label}
    </Button>
)

export default NewButton