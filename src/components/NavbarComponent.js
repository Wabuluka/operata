import { Container, Button, Form, Card, Navbar } from 'react-bootstrap';

const NavbarComponent = () => {
    return ( 
        <Navbar className="mb-5">
            <Container>
                <Navbar.Brand href="#home">Opareta Converter</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Davies Wabuluka
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default NavbarComponent;