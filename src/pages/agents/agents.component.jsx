import React, { useState } from 'react'
import Hexagon from '../../components/hexagon/hexagon.component'
import Navbar from "../../components/navbar/navbar.component";
import { agentsData } from "../../data.js";
import { Words, Content } from 'arwes'
import './agents.scss'

const Agents = () => {
    const [agents, changeAgents] = useState(agentsData);
    return (
      <div>
        <Navbar/>
        <div class="main-page">
          <Content>
            <h2 className="select-agent">
              <Words animate>Select agent for details</Words>
            </h2>
          </Content>
          <Hexagon agents={agents} />
        </div>
      </div>
    );
}

export default Agents
