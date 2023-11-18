import { Container, Nav, Navbar } from 'react-bootstrap';
import { Data } from '../mock/data';

const Navs = () => {
  const items = Data.navbar;

  return (
    <Navbar expand="lg" className="bg-light" fixed="top">
      <Container>
        <Navbar.Brand href="/" className="text-uppercase fw-bolder">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {items.map((item) => (
              <a href="/" className="nav-link fw-bold" key={item.id}>
                {item.title}
              </a>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
