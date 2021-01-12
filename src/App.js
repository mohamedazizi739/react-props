
import  Prop from "./profile/profile";
import "./App.css"
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

const func=(x)=>{
  window.alert(x)
}
function App() {
  return (

    <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
      <Prop name={"mohamed azizi"} bio="live in tunisia" profession="electromecanical engineer" func={func}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png" alt="" />
      </Prop>
    </div>
  );
}

export default App;
