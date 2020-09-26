import React, { useState } from 'react'
import CardsGrid from '../components/cardsGrid/cardsGrid.component'

import { agentsData } from "../data.js";

const MainPage = ({ anim }) => {
    const [agents, changeAgents] = useState(agentsData);
    return (
      <div style={{ margin: 20 }}>
        <CardsGrid anim={anim} agents={agents} />
      </div>
    );
}

export default MainPage
