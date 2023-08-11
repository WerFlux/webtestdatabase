import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function HomePage() {
    return (
        <Fragment>
            <div className='background button'>
                <Link to="/add_new_laptop">
                    <Button variant="light" size='lg' className='button-style'>
                        Tambah Laptop
                    </Button>
                </Link>
                <Link to="/remove_laptop">
                    <Button variant="light" size='lg' className='button-style'>
                        Hapus Laptop
                    </Button>
                </Link>
                <Link to="/find_laptop">
                    <Button variant="light" size='lg' className='button-style'>
                        Cari Laptop
                    </Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default HomePage;