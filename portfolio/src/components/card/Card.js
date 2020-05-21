import React from "react"
import image1 from "./cardImg/img1.jpg"
import { Button, Card} from 'react-bootstrap';

const CardComp = props => {
    
    return(
        // <div className="card text-center">
        //     <div className="overflow">
        //         <img src={image1} alt="" />
        //     </div>
        //     {/*  */}
        //     <div className="card-body text-dark">
        //         <h4 className="card-title">Card title</h4>
        //         <p className="card-text text-secondary">
        //             card text
        //         </p>
        //         <a href="#" className="btn btn-outline-success">go anywhere</a>
        //     </div>
        // </div>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image1} />
        <Card.Body>
            <Card.Title>Name Of Card</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
             </Card.Text>
            <Button variant="primary">Git Hub</Button>
            <Button variant="primary">Open Project</Button>
        </Card.Body>
        </Card>

    )

}

export default CardComp;