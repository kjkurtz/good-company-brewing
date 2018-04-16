import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Login from './Login'
import { Button } from 'semantic-ui-react'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const App = () => (
  <div className="App">
    <Router>
      <div>
      <Link to="/"><Button>Home</Button></Link>
      <Link to="/topics"><Button>Topics</Button></Link>
      <Link to="/about"><Button>About</Button></Link>
      <Link to="/login"><Button>Login</Button></Link>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
        <Route path="/login" component={Login}/>
      </div>
    </Router>
  </div>
)
export default App