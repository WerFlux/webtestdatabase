import React, { Fragment, useState} from 'react'
import { Button, Form, FormControl, Alert, Card } from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import './FindLaptopPage.css'

function FindLaptopPage() {
    const navigate = useNavigate();

    const [buttonState, setButtonState] = useState(false);

    const [findId, setFindId] = useState(-1);
    const [laptops, setLaptops] = useState([]);

    const [alert, setAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [alertVariant, setAlertVariant] = useState('');
    
    const showAlert = (msg, variant) => {
        setAlert(true);
        setAlertText(msg);
        setAlertVariant(variant);
    }

    // override input biar nerima angka (numeric) aja
    const overrideNumericInputOnly = (event) => {
        const input = event.target.value.replace(/\D/g, ''); // apa ini?
        event.target.value = input;
        setFindId(input);
    };

    const onFindHandler = async () => {
        if(findId.toString() === '-1') {
            showAlert('Laptop ID harus diisi!', 'danger');
            return;
        }

        setAlert(false);
        setButtonState(true);
        try {
            await axios.post('http://localhost:5000/api/find_laptop', { findId }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if(response.data.status) {
                    showAlert('Berhasil mencari Laptop ID ' + findId, 'primary');
                    console.log(response.data.laptops);
                    setLaptops(response.data.laptops);
                } else {
                    showAlert('Tidak ditemukan Laptop ID ' + findId, 'danger');
                }
            }).catch(error => {
                showAlert('Error: ' + error.message, 'danger');
            });
        } catch(error) {
            showAlert('Error: ' + error.message, 'danger')
        }
        setButtonState(false);
    }

    return (
        <Fragment>
            <div className='background'>
                {alert && (
                    <Alert key={alertVariant} variant={alertVariant}>
                        {alertText}
                    </Alert>
                )}
                <Form.Group>
                    <p className="mt-3">Laptop ID (Angka):</p>
                    <FormControl
                        type="text"
                        onChange={overrideNumericInputOnly}
                        className="id-input"
                        value={findId}
                    />
                </Form.Group>
                <div>
                    <Button disabled={buttonState} onClick={onFindHandler} variant="light" size='lg' className='button-style'>
                        Cari
                    </Button>
                    <Button disabled={buttonState} onClick={() => navigate("/")} variant="light" size='lg' className='button-style'>
                        Kembali
                    </Button>
                </div>
                {laptops.length > 0 && (
                    <div>
                        {laptops.map(laptop => (
                            <Card className='laptop-card' border='white' bg='dark' key='Dark' text='light'>
                                <Card.Body>
                                    <Card.Title>Laptop {laptop.Merk}</Card.Title>
                                    <br/>
                                    <Card.Text>
                                        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'keep-all' }}>
                                            {laptop.Spesifikasi}
                                        </pre>
                                        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'keep-all' }}>
                                            {laptop.Nota}
                                        </pre>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </Fragment>
    )
}
export default FindLaptopPage;