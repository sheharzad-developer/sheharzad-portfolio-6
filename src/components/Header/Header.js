/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { MUIDrawer } from '../drawer/MUIDrawer';
import SheharzadLogo from '../../assets/S-Logo.jpg';
import { Container, Link } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import './Header.css'
import { Button } from '@material-ui/core';


function Header() {
    return (
        <div className='Header'>
            <header className="App-header">
                <Container>
                    <nav style={{ display: 'flex', justifyContent: 'space-between', margin: '0px auto' }}>
                        <div>
                            <a href="/">
                                <img src={SheharzadLogo} />
                            </a>
                        </div>
                        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', paddingLeft: '30px' }}>
                            <Button><Link href="/" style={{ color: '#ffffff', fontFamily: 'Arial', fontSize: '16px', borderBottom: '2px solid red', textDecoration: 'none' }}>Home</Link></Button>
                            <Button><Link href="/" style={{ color: '#ffffff', fontFamily: 'Arial', fontSize: '16px', textDecoration: 'none' }}>About</Link></Button>
                            <Button><Link href="/" style={{ color: '#ffffff', fontFamily: 'Arial', fontSize: '16px', textDecoration: 'none' }}>Portfolio</Link></Button>
                            <Button><Link href="/" style={{ color: '#ffffff', fontFamily: 'Arial', fontSize: '16px', textDecoration: 'none' }}>Contact Us </Link></Button>
                        </div>
                        <ul>
                            <li>
                                <MUIDrawer />
                            </li>
                        </ul>
                    </nav>
                </Container>
            </header>
        </div>
    )
}

export default Header;