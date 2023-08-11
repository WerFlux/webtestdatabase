import React, { Fragment, useState } from 'react';
import { Button, Form, FormControl, Alert } from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewLaptopPage.css';

function NewLaptop() {
    const navigate = useNavigate();
    
    const [selectedMerk, setSelectedMerk] = useState('');
    const [spesifikasi, setSpesifikasi] = useState('');
    const [nota, setNota] = useState('');

    const [buttonState, setButtonState] = useState(false);
    
    const clearAllFields = () => {
        setSelectedMerk('');
        setSpesifikasi('');
        setNota('');
    }

    const [alert, setAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [alertVariant, setAlertVariant] = useState('');
    
    const showAlert = (msg, variant) => {
        setAlert(true);
        setAlertText(msg);
        setAlertVariant(variant);
    }

    const onSubmitHandler = async () => {
        if (selectedMerk === '') {
            showAlert('Pilih Merk terlebih dahulu.', 'danger');
            return;
        }
        if (spesifikasi === '') {
            showAlert('Spesifikasi tidak boleh kosong.', 'danger');
            return;
        }
        setAlert(false);
        setButtonState(true);
        try {
            await axios.post('http://localhost:5000/api/insert_new_laptop', { selectedMerk, spesifikasi, nota },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                showAlert('Berhasil menambahkan Laptop, Laptop ID: ' + response.data.laptopId, 'primary');
                clearAllFields();
            }).catch(error => {
                showAlert('Error: ' + error.message, 'danger');
            });
        } catch (error) {
            showAlert('Error: ' + error.message, 'danger');
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
                <Form.Group className='form-container'>
                    <Form.Label>Merk</Form.Label>
                    <Form.Select value={selectedMerk} onChange={(event) => setSelectedMerk(event.target.value)}>
                        <option value="">Pilih Merk</option>
                        <option value="Lenovo">Lenovo</option>
                        <option value="Acer">Acer</option>
                        <option value="Asus">Asus</option>
                    </Form.Select>
                    <p className="mt-3">Spesifikasi:</p>
                    <FormControl 
                        as="textarea"
                        rows={4} 
                        className="text-input"
                        value={spesifikasi}
                        onChange={(event) => setSpesifikasi(event.target.value)}
                    />
                    <p className="mt-3">Nota:</p>
                    <FormControl 
                        as="textarea"
                        rows={4} 
                        className="text-input"
                        value={nota}
                        onChange={(event) => setNota(event.target.value)}
                    />
                </Form.Group>
                <div>
                    <Button disabled={buttonState} onClick={onSubmitHandler} variant="light" size='lg' className='button-style'>
                        Tambah
                    </Button>
                    <Button disabled={buttonState} onClick={() => navigate("/")} variant="light" size='lg' className='button-style'>
                        Kembali
                    </Button>
                </div>
            </div>
        </Fragment>
    );
}
export default NewLaptop;