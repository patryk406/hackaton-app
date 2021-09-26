import { NewSubscriber, SubscribersList } from './components/subscribers'
import { NewCampaign, CampaignList } from './components/campaign'
import Nav from './pages/Nav'
import { ChakraProvider, Input, Flex } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react'
import './app.css'
function App() {
  const [isLogin, setLogin] = useState(false);
  const password = process.env.REACT_APP_SECRET_CODE
  if (!isLogin) {
    return (
      <ChakraProvider>
        <Flex bgGradient="linear(to-t, cyan.400, pink.700)" justify='center' alignItems='center' h='100vh
      '>
          <Input background='gray.600' color='white' fontWeight='bold' borderRadius='10px' fontSize='1rem' textAlign='center' w='600px' h='50px' placeholder='Type super secret code! known by only elite group of react-maniacs!' onChange={(e) => setLogin(e.target.value === password && true)} />
        </Flex>
      </ChakraProvider >
    )
  } else {
    return (
      <Router>
        <ChakraProvider>
          <Nav />
          <Switch>
            <Route path="/Subscribers">
              <SubscribersList />
            </Route>
            <Route path="/NewSubscribers">
              <NewSubscriber />
            </Route>
            <Route path="/Campaigns">
              <CampaignList />
            </Route>
            <Route path="/NewCampaigns">
              <NewCampaign />
            </Route>
          </Switch >
        </ChakraProvider >
      </Router >
    );
  }

}

export default App;
