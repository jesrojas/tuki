import React from 'react'
import './hexagon.scss'
import { Image } from 'arwes'
import { withRouter } from 'react-router-dom'

const Hexagon = ({ agents, match, history }) => {
    return (
      <div className="main-grid">
        <ul className="hex-grid__list">
          {
            agents.map((agent, i) => (
              <li key={i} className="hex-grid__item">
                <div
                  className="hex-grid__content"
                  onClick={() => history.push(`${match.path}/${agent.name.toLowerCase()}`)}
                >
                  <Image
                    styled={{ height: "100%", width: "100%" }}
                    resources={require(`../../images/${agent.imageUrl}`)}
                  />
                </div>
              </li>
          ))
          }
        </ul>
      </div>
    );
}

export default withRouter(Hexagon)
