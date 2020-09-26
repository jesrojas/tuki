import React from 'react'
import { Logo, Words, Button } from 'arwes'
import { withRouter } from 'react-router-dom'
import './home.scss'

const Home = ({ match, history }) => {
    return (
      <div className="opening">
        <Logo animate layer="header" size={150} />
        <h1 className="opening_agents-title">
          <Words animate>T.U.K.I.</Words>
        </h1>
        <p className="opening_agents-info">
          <Words animate>
            Specialized Underground Agents for Excommunicado Contracts
          </Words>
        </p>
        <Button onClick={() => history.push(`${match.path}/agents`)} animate>
          Agents
        </Button>
      </div>
    );
}

export default withRouter(Home)