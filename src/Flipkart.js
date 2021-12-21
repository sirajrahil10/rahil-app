import React from 'react'
import {Nav,Container,NavDropdown,Form,FormControl,Button, Navbar,Carousel, Card } from 'react-bootstrap'
import image1 from "./image1.jpg"
import image8 from "./image8.jpg"
import image9 from "./image9.jpg"
import image2 from './image2.jpg'
import image11 from './image11.jpg'
import image12 from './image12.jpg'
import image10 from './image10.jpg'
import image13 from "./image13.jpg"
import image17 from "./image17.jpg"
import image18 from "./image18.jpg"
import image19 from "./image19.jpg"
import image20 from "./image20.jpg"

const Flipkart = () => {
    return (
        <div>
        <Navbar bg="info" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#Flipkart" >Flipkart</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#Home">Home</Nav.Link>
       
        <NavDropdown title="More" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#Advertise">Advertise.</NavDropdown.Item>
          <NavDropdown.Item href="#Sell">Sell On Flipkart.</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#Notification">
            Notification.
          </NavDropdown.Item>
        </NavDropdown>
       
      </Nav>
      <Form className="d-flex">
        <FormControl
          placeholder="Search For Products,Brand And More.."
          className="me-2"
          aria-label="Search"
        />
        <Button variant="primary">Search</Button>
      </Form>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
            {/* <nav>
                <div>
                    <h1>Flipkart</h1>
                    <input className='inp1' placeholder='Search for products,brand and more...'></input>
                    <button className='btn1' type='text'>Login</button>
                </div>
            </nav> */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image8}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image9}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
            <img src={image2} width="100%"></img>
            <br />
            <h2>Best of Electronic Items.</h2>
            <br/>
            <Card style={{ width: "45%" }} className='card1'>
                <Card.Img variant="top" src={image11} />
                <Card.Body>
                    <Card.Title>Top 20 Cameras. </Card.Title>
                    <Card.Text>
                    Starting from Just 2,999 INR.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '45%' }}>
                <Card.Img variant="top" src={image12} />
                <Card.Body>
                    <Card.Title>Onikuma X7 Pro Headphone</Card.Title>
                    <Card.Text>
                        Starting from 1,999 INR.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <Card style={{ width: '45%' }} className='card2'>
                <Card.Img variant="top" src={image10} />
                <Card.Body>
                    <Card.Title>Mobile Phone.</Card.Title>
                    <Card.Text>
                        Best For New Generation Starting from 12,999 INR.
                    </Card.Text>
                </Card.Body>
            </Card>
            
            <Card style={{ width: '45%' }}>
                <Card.Img variant="top" src={image13} />
                <Card.Body>
                    <Card.Title>Gaming Console.</Card.Title>
                    <Card.Text>
                        Experience New Games And Price Starting from 29,999 INR.
                    </Card.Text>
                </Card.Body>
            </Card>
            <h2>Todays Fashion Deals.</h2>
            <br/>
            <Card style={{ width: '45%' }} className='card3'>
                <Card.Img variant="top" src={image17} />
                <Card.Body>
                    <Card.Title>Brand New Deals</Card.Title>
                    <Card.Text>
                   Crazy Deals On Van Huesen,U.S Polo.   
                    </Card.Text>
                </Card.Body>
            </Card>
           
            <Card style={{ width: '45%' }}>
                <Card.Img variant="top" src={image18} />
                <Card.Body>
                    <Card.Title>Top Fashion</Card.Title>
                    <Card.Text>
                        Experience New Fashion In Todays World.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <Card style={{ width: '45%' }} className='card4'>
                <Card.Img variant="top" src={image19} />
                <Card.Body>
                    <Card.Title>Top New Fashion</Card.Title>
                    <Card.Text>
                    Experience New Fashion In Todays World. 
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '45%' }}>
                <Card.Img variant="top" src={image20} />
                <Card.Body>
                    <Card.Title>Brand New Deals</Card.Title>
                    <Card.Text>
                    Crazy Deals On Levis,Louis Vuitton. 
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <h3>Electronic Devices And Accessories.</h3>
            <p>When it comes to laptops, we are not far behind. Filter among dozens of super-fast operating systems, hard disk capacity, RAM, lifestyle, screen size and many other criterias for personalized results in a flash. All you students out there, confused about what laptop to get? Our Back To College Store segregates laptops purpose wise (gaming, browsing and research, project work, entertainment, design, multitasking) with recommendations from top brands and industry experts, facilitating a shopping experience that is quicker and simpler.

                Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure junkies: our range of cameras is as much for beginners as it is for professionals.</p>
                <h3>Home and Furniture.</h3>
                <p>Moving to a new place is never easy, especially if you're buying new furniture. Beds, sofa sets, dining tables, wardrobes, and TV units - it's not easy to set up everything again. With the hundreds of options thrown at you, the ride could be overwhelming. What place is reliable, what furniture will stand the test of time? These are questions you must ask before you choose a store. Well, our Durability Certified Furniture Store has not only curated a range of furniture keeping in mind the modern Indian consumer but furniture that comes with a lab certification, ensuring they last you for up to 10 years. Yes, all our furniture has gone through 35 stability and load tests so that you receive only the best-quality furniture. Be FurniSure, always. Names to look out for are Nilkamal, Godrej Interio, Urban Ladder, HomeTown, Durian and Perfect Homes.</p>
                <h3>Books, Sports and Games.</h3>
                <p>Work hard and no play? We don't believe in that. Get access to best-selling fiction and non-fiction books by your favourite authors, thrilling English and Indian blockbusters, most-wanted gaming consoles, and a tempting range of fitness and sports gadgets and equipment bound to inspire you to get moving.</p>
        </div>
    )
}

export default Flipkart
