import React from "react"
import CardComp from "./card/Card"
import { Row, Col, Container} from 'react-bootstrap';

function Projects() {

    const projectStyle = {
        backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/847/890/558/line-grey-background-lines-fon-hd-wallpaper-preview.jpg)",
        color: "#1db9b5",
        minWidth: "100%",
        minHeight: "100%",
        backgroundSize: "cover",
        position: "fixed"
        
      }

      const headText = {
          textAlign: "center"
      }
    
    return (
        
        <div style={projectStyle}>

            <h2 style={headText}>Projects</h2>
            

            <Container>
             <Row>
                     {/* 1st card */}
                <Col><CardComp md={4}/> </Col>
                     {/* 2nd card */}
                <Col><CardComp md={4}/> </Col>
                     {/*3rd card  */}
                <Col><CardComp md={4}/></Col>
             </Row>
  
            </Container>

            
            

            
            
        </div>
        
    )
    
    
}

export default Projects