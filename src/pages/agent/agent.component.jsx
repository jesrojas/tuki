import React, { useState, useEffect } from 'react'
import Navbar from "../../components/navbar/navbar.component";
import { Project, Words, Image, Content } from 'arwes'
import { Link } from 'react-router-dom'
import { findUserFromCollection, statusColor, checkIfLoaded } from '../../utils'
import { agentsData } from '../../data'
import './agent.scss'

const Agent = (props) => {
  const [agent, changeAgent] = useState({})

    useEffect(() => {
        const changeAgentsAsync = async () => {
          return await changeAgent(findUserFromCollection(agentsData, props.match.params.agentName))
        }
        
        changeAgentsAsync();
    }, [])

    const { name, fullName, status, location, specialty, languages, imageUrl } = agent;
    
    return (
      <div>
        <Navbar />
        <div className="characterPageView">
          <Project animate header={`TUKI AGENT PROFILE`}>
            <div className="characterInfo">
              <p className="characterBio">
                <Words animate>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis laboris nisi ut aliquip ex. Duis
                  aute irure. Consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis dorime.
                </Words>
              </p>
              <Image
                className="characterImage"
                resources={require(`../../images/${checkIfLoaded(imageUrl)}`)}
              />
            </div>
            <div className="characterSpecifics">
              <p>
                <Words style={{ fontWeight: 700 }} animate>
                  Status:
                </Words>{" "}
                <Words animate layer={statusColor(status)}>
                  {status}
                </Words>
              </p>
              <p>
                <Words style={{ fontWeight: 700 }} animate>
                  Birth Name:
                </Words>{" "}
                <Words animate>{fullName}</Words>
              </p>
              <p>
                <Words style={{ fontWeight: 700 }} animate>
                  Alias:
                </Words>{" "}
                <Words animate>{name}</Words>
              </p>
              <p>
                <Words style={{ fontWeight: 700 }} animate>
                  Location:
                </Words>{" "}
                <Words animate>{location}</Words>
              </p>
              <p>
                <Words style={{ fontWeight: 700 }} animate>
                  Specialty:
                </Words>{" "}
                <Words animate>{specialty}</Words>
              </p>
              <p>
                <Words style={{ fontWeight: 700 }} animate>
                  Language:
                </Words>{" "}
                <Words animate>{languages}</Words>
              </p>
              <Content>
                <Link to="/tuki/agents">
                  <p className="go-back-page">
                    <a>Go back to agents</a>
                  </p>
                </Link>
              </Content>
            </div>
          </Project>
        </div>
      </div>
    );
}

export default Agent
