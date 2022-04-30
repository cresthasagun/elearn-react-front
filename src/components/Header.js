import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto link_menu">
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/aboutus">About Us</Link>
                        
                    </Nav>
                </Container>
            </Navbar>
         

       
        </>
    );
}

export default Header;