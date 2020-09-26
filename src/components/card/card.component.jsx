import React from 'react'
import { withRouter } from 'react-router-dom'
import { Frame, Words, Image } from "arwes";
import './card.css'

const Card = ({ id, anim, match, history, agent: { name, status, languages, specialty, location, imageUrl } }) => {
    const statusColor = (status) => {
        if(status === "Alive"){
            return "success"
        } 
        else if(status === "Dead"){
            return "alert"
        }
        else {
            return "disabled"
        }
    }

    return (
      <Frame
        key={id}
        animate
        level={2}
        corners={4}
        layer="primary"
        className="card"
        onClick={() => history.push(`${match.url}agent`)}
      >
        <Image
          resources={require(`../../images/${imageUrl}`)}
        />
        <h2 className="info" style={{ marginTop: 5 }}>
          <Words animate show={anim.entered}>
            {name}
          </Words>
        </h2>
        <p className="info">
            <Words style={{fontWeight: "700"}}animate show={anim.entered}>Status:</Words>{" "}
            <Words animate show={anim.entered} layer={statusColor(status)}>{status}</Words>
          </p>
          <p className="info">
            <Words style={{fontWeight: "700"}}animate show={anim.entered}>Location:</Words>{" "}
            <Words animate show={anim.entered}>{location}</Words>
          </p>
          <p className="info">
            <Words style={{fontWeight: "700"}}animate show={anim.entered}>Specialty:</Words>{" "}
             <Words animate show={anim.entered}>{specialty}</Words>
          </p>
          <p className="info">
            <Words style={{fontWeight: "700"}}animate show={anim.entered}>Language:</Words>{" "}
             <Words animate show={anim.entered}>{languages}</Words>
          </p>
      </Frame>
    );
}

export default withRouter(Card)
