import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './Component/Home'
import Coursedetails from './Component/Coursedetails'
import Notfound from './Component/Notfound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={Coursedetails} />
    <Route path="/bad-path" component={Notfound} />
    <Redirect to="/bad-path" />
  </Switch>
)
export default App
