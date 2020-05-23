import React from "react"
import image1 from "./cardImg/img1.jpg"
import { Button, Card} from 'react-bootstrap';

const CardComp = props => {
    
    const cardBody = {
        fontSize: "14px"
    }

    const cardHead = {
        fontSize: "16px"
    }

    const buttonSize = {
        fontSize: "8px",
        margin: "5px"
    }

    const im = {
        maxHeight: "120px"
    }

    return(
     
        <Card>
            <Card.Img variant="top" src={props.image} style={im}/>
        <Card.Body>
            <div style={cardHead}>{props.head}</div>
            <u></u>
            <Card.Text style={cardBody}>
                {props.detail}
             </Card.Text>
             <Button style={buttonSize} href={props.link}>Open Project</Button> 
             <Button style={buttonSize} href={props.gitLink}>GitHub</Button> 
        </Card.Body>
        </Card>

    )

}

export default CardComp;