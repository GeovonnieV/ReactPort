import React from "react"
import CardComp from "./card/Card"
import { Row, Col, Container} from 'react-bootstrap';
import cardFill from "./card/card.json"

function Projects() {

    const projectStyle = {
        backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/847/890/558/line-grey-background-lines-fon-hd-wallpaper-preview.jpg)",
        color: "#1db9b5",
        minWidth: "100%",
        minHeight: "100%",
        backgroundSize: "cover",
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
                <Col><CardComp md={4}
                      head={cardFill[0].head}
                      detail={cardFill[0].detail}
                      link={cardFill[0].link}
                      gitLink={cardFill[0].gitLink}
                      image={cardFill[0].image}
                    /> 
               </Col>
                     {/* 2nd card */}
                <Col><CardComp md={4}
                     head={cardFill[1].head}
                     detail={cardFill[1].detail}
                     link={cardFill[1].link}
                     gitLink={cardFill[1].gitLink}
                     image={cardFill[1].image}    
                     /> 
                </Col>
                     {/*3rd card  */}
                <Col><CardComp md={4}
                     head={cardFill[2].head}
                     detail={cardFill[2].detail}
                     link={cardFill[2].link}
                     gitLink={cardFill[2].gitLink}
                     image={cardFill[2].image}   
                     />
                </Col>
             </Row>

               <br></br>

               {/* row 2 */}
             <Row>
                     {/* 1st card */}
                <Col><CardComp md={4}
                    head={cardFill[3].head}
                    detail={cardFill[3].detail}
                    link={cardFill[3].link}
                    gitLink={cardFill[3].gitLink}
                    image={cardFill[3].image} 
                     /> 
                </Col>
                     {/* 2nd card */}
                <Col><CardComp md={4}
                    head={cardFill[4].head}
                    detail={cardFill[4].detail}
                    link={cardFill[4].link}
                    gitLink={cardFill[4].gitLink}
                    image={cardFill[4].image} 
                     /> 
                </Col>
                     {/*3rd card  */}
                <Col><CardComp md={4}
                    head={cardFill[5].head}
                    detail={cardFill[5].detail}
                    link={cardFill[5].link}
                    gitLink={cardFill[5].gitLink}
                    image={cardFill[5].image} 
                     />
                </Col>
             </Row>
  
            </Container>

            
            

            
            
        </div>
        
    )
    
    
}

export default Projects