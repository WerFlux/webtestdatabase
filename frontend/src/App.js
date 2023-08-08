import axios from 'axios';
import React, { useState } from 'react';
import { Button, FormControl, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [laptops, setLaptops] = useState([]);

  const onSubmitHandleClick = async () => {
    try {
      await axios.post('http://localhost:5000/api/insert_new_laptop', { text }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log(response.data);
        setText("");
      }).catch(error => {
        console.error(error);
      });
    } catch (error) {
      console.error('Error when handling submit: ', error);
    }
  };

  const onFindHandlerClick = async () => {
    try {
      await axios.post('http://localhost:5000/api/find_laptop', { text }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        const laptops = response.data.laptops;
        setLaptops(laptops);
        setText("");
      }).catch(error => {
        console.error(error);
      });
    } catch (error) {
      console.error('Error when handling submit: ', error);
    }
  };

  const onTextValueChanged = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="input-container">
          <FormControl 
            as="textarea"
            rows={4} 
            className="text-input"
            value={text}
            onChange={onTextValueChanged}
          />
          <Button style={{ marginBottom: '10px' }} variant="outline-light" size="lg" onClick={onSubmitHandleClick}>
            Submit
          </Button>
          <Button variant="outline-light" size="lg" onClick={onFindHandlerClick}>
            Find
          </Button>
          {laptops.length > 0 && (
            <ListGroup className="mt-3">
              {laptops.map(laptop => (
                <ListGroup.Item key={laptop.ID}>ID: {laptop.ID}, Merk: {laptop.Merk}</ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;