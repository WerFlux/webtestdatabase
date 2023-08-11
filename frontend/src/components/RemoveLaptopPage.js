import React, { Fragment, useState } from 'react'
import { Button, Form, FormControl, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import './RemoveLaptopPage.css'

function RemoveLaptopPage() {
    const navigate = useNavigate();

    // NOTE(Bintang): kita pake -1 karena ID adalah AI yang mulai dari angka 0
    const [laptopId, setLaptopId] = useState(-1);

    const [buttonState, setButtonState] = useState(false);

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
        setLaptopId(input);
    };

    const onDeleteLaptopHandler = async () => {
        // NOTE(Bintang): laptopId cuman nerima angka numerik (0-9), angka negatif tidak akan muncul
        if(laptopId.toString() === '-1') {
            showAlert('Laptop ID harus diisi!', 'danger');
            return;
        }
        setAlert(false);
        setButtonState(true);
        try {
            await axios.post('http://localhost:5000/api/delete_laptop', { laptopId }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if(response.data.status) {
                    showAlert('Berhasil menghapus Laptop ID ' + laptopId, 'primary');
                } else {
                    showAlert('Tidak ditemukan Laptop ID ' + laptopId, 'danger');
                }
                setLaptopId(-1);
            }).catch(error => {
                showAlert('Error: ' + error.message, 'danger');
            });
        } catch(error) {
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
                <Form.Group>
                    <p className="mt-3">Laptop ID (Angka):</p>
                    <FormControl
                        type="text"
                        className="id-input"
                        onChange={overrideNumericInputOnly}
                        value={laptopId}
                    />
                </Form.Group>
                <div>
                    <Button disabled={buttonState} onClick={onDeleteLaptopHandler} variant="light" size='lg' className='button-style'>
                        Hapus
                    </Button>
                    <Button disabled={buttonState} onClick={() => navigate("/")} variant="light" size='lg' className='button-style'>
                        Kembali
                    </Button>
                </div>
            </div>
        </Fragment>
    );
}
export default RemoveLaptopPage;