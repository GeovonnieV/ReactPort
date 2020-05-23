import React from "react"
import { Button, Form} from 'react-bootstrap';


function Contact() {

    const contactStyle = {
      backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/847/890/558/line-grey-background-lines-fon-hd-wallpaper-preview.jpg)",
      color: "#1db9b5",
      minWidth: "100%",
      minHeight: "100%",
      backgroundSize: "cover",
      
      
    }

    const btn = {
      backgroundColor: "#1db9b5"
    }

    function clickHandler () {
        alert("email btn currently unavalable please email me @ geovonnievasquez@gmail.com")
    }

    return (
    <div style={contactStyle}>
        <h1>Contact Me</h1>
       
         {/* email input */}
        <Form className="back">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      {/* text area */}
      <Form.Group controlId="exampleForm.ControlTextarea1">
         <Form.Label>Message</Form.Label>
         <Form.Control as="textarea" rows="3" />
      </Form.Group>
        {/* submit btn */}
        <Button variant="primary" type="submit" onClick={clickHandler} style={btn}>
          Submit
        </Button>
      </Form>
    </div>
    )
}

export default Contact