import { useEffect, useState, } from 'react';
import { Container, Button, Form, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';




import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import NavbarComponent from './components/NavbarComponent';


function App() {

  const [ info, setInfo ] = useState([]);
  const [ input, setInput ] = useState(0);
  const [ from, setFrom ] = useState("usd");
  const [ to, setTo ] = useState("inr");
  const [ options, setOptions ] = useState([]);
  const [ output, setOutput ] = useState(0);

  // Whenever the dependency changes
  useEffect(()=>{
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      setInfo(res.data[from]);
    }, [from])
  })

  // Converting whenever a user switches the currency
  useEffect(()=> {
    setOptions(Object.keys(info));
    convert()
  }, [info])

  // Convert function
  function convert(){
    var rate = info[to];
    setOutput(input * rate );
  }

  // Switch between 2 currency
  function flip(){
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <div className="App">
      <NavbarComponent/>
        <Container>
            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control 
                  type="text" 
                  placeholder="Enter Amount"
                  onChange={(e) => { setInput(e.target.value)}} />
              </Form.Group>
            </Row>
            
            <Row className="mt-2">
              <Col xs={5} md={4}>
              <Dropdown options={options} 
                          onChange={(e) => { setFrom(e.value) }}
                value={from} placeholder="From" />
              </Col>
              <Col xs={2} md={4}>
                <HiSwitchHorizontal size="30px" onClick={() => { flip()}}/>
              </Col>
              <Col xs={5} md={4}>
                <Dropdown options={options} 
                            onChange={(e) => {setTo(e.value)}} 
                  value={to} placeholder="To" />
              </Col>
            </Row>


            <Row>
              <Col className="mt-3 text-center">
              <p>{input+" "+from+" = "+output.toFixed(2) + " " + to}</p>
              </Col>
            </Row>


        </Container>
    </div>
  );
}

export default App;
