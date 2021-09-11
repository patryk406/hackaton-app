import { NewSubscriber, SubscribersList } from './subscribers/components'
import { NewCampaign, CampaignList } from './campaign/components'
import Nav from './pages/Nav'
import { ChakraProvider } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
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
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
