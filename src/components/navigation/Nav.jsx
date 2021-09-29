import {
    NavLink
} from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react'
const Nav = () => {
    return (
        <nav>
            <Flex justify='space-evenly' bg='#a29bfe' color='white' p='2rem' fontSize='1.3rem' mb='2rem'>
                <Box>
                    <NavLink to='/Subscribers' activeStyle={{
                        fontWeight: 'bold',
                        color: 'red'
                    }}>Subscribers</NavLink>
                </Box>
                <Box>
                    <NavLink to='NewSubscribers' activeStyle={{
                        fontWeight: 'bold',
                        color: 'red'
                    }}>New subscriber</NavLink>
                </Box>
                <Box>
                    <NavLink to='/Campaigns' activeStyle={{
                        fontWeight: 'bold',
                        color: 'red'
                    }}>Campaigns</NavLink>
                </Box>
                <Box>
                    <NavLink to='/NewCampaigns' activeStyle={{
                        fontWeight: 'bold',
                        color: 'red'
                    }}>New Campaign</NavLink>
                </Box>
            </Flex>
        </nav >
    )
}
export default Nav