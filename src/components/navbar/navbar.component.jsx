import React from 'react'
import { Logo, Header, Heading, Words } from "arwes"
import { withRouter } from 'react-router-dom'

import './navbar.css'

const Navbar = ({ history, match }) => {
    return (
      <Header>
        <div className="header">
            <Logo className="logo" onClick={() => history.push(`/`)} animate size={80} />
            <div className="title">
                <Heading animation className="titleAcronym">T.U.K.I.</Heading>
                <Heading node='h2' className="acronymDefinition">Termination Unit</Heading>
                <Words className="acronymDefinition">Killing and Infiltration</Words>
            </div>
        </div>
      </Header>
    );
}

export default withRouter(Navbar)
