import React from "react"
import {Accordion, Card, Button, Container, Row, Col, Image} from "react-bootstrap"
import img1 from "../assets/me.jpeg"

const About = () => {

    const aboutStyle = {
        backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/847/890/558/line-grey-background-lines-fon-hd-wallpaper-preview.jpg)",
        color: "black",
        minWidth: "100%",
        minHeight: "100%",
        backgroundSize: "cover",
      }

    const head = {
        color: "#1db9b5",
        textAlign: "center"
    }

    const centerImg = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%",
        textAlign: "center"
    }
    
    const img = {
        maxWidth: "300px",
        width: "100%",
        
    }
    
    const butnSize = {
        margin: "5px"
    }

    return(
    <div style={aboutStyle}>

        <h2 style={head}>About Me</h2>

        <Container style={centerImg}>
            <Image style={img} src={img1} roundedCircle />
        </Container>       

    <Accordion defaultActiveKey="0">
        <Card>
            <Card.Header>
             <Accordion.Toggle as={Button} variant="link" eventKey="0">
              About me!
            </Accordion.Toggle>
            </Card.Header>
           <Accordion.Collapse eventKey="0">
         <Card.Body>
            I am Geovonnie Vasquez, I was born and raised in Arlington Texas.
            My hobbies are weightlifting, playing video games, and watching stand up comedy.
            I like weightlifting beacause it helps improve my health and gives me 
            new goals to achieve. Playing video games help me escape reality. 
            Somtimes life can be stressful and I like to play my favorite game (call of duty)
            to take a break from obstacles. Most of all I love to laugh. stand up comics are genius,
            I think its amazing how somone can talk to a large group of people
            that dont talk back for 2 hours and make them laugh.
            I watch a wide varitey of comedians to help improve my 
            communication skills. I feel this day in age lacks
            people skills that effect our every day and professional lives.
            <br></br>
            My dream is to manage a devlopment team. Ive played
            football all my life until junior year in high school when I 
            got my 1st after school job at chipotle. I miss motivating and working
            with a team to succeed. We all had a special relationship knowing we 
            been though the same sacrafices and training to get where we are,
            coding brings those same experiences.
            I dont have alot of coding experience yet but I do have alot of ambition.
            I know the game plan to achieve my goals and im willing to do what it takes. 
         </Card.Body>
         {/* 2nd accordian */}
    </Accordion.Collapse>
        </Card>

        <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Education!
        </Accordion.Toggle>
     </Card.Header>
      <Accordion.Collapse eventKey="1">
      <Card.Body>
          <ul>
              <li>SMU Coding BootCamp</li>
              <li>Udacity React Student</li>
              <li>Front-End Web devlopment with React Coursera Student</li>
              <li>Certifications from: Plurasight & CodeCademy</li>
          </ul>
      </Card.Body>
         </Accordion.Collapse>
     </Card>
    </Accordion> 
    <br></br>
        {/* linkdin btn */}
    <Button href="https://www.linkedin.com/feed/" style={butnSize}>LinkedIn</Button>
        {/* github btn */}
    <Button href="https://github.com/GeovonnieV">GitHub</Button>

    </div>

    )
}
export default About