import React from 'react'
import { Row, Col, withSounds } from "arwes";
import Card from '../card/card.component'
import './cardsGrid.css'

const CardsGrid = ({ agents, anim }) => {
    return (
        <div className='cardsGrid'>
            <Row>
                {
                    agents.map((agent, i) => (
                    <Col key={i} style={{ marginBottom: 20 }} s={12} m={5} l={4}>
                        <Card animate key={i} anim={anim} agent={agent}/>
                    </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default CardsGrid
