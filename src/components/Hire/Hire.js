/* eslint-disable no-dupe-keys */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { Component, useRef } from 'react'
import { Typography, makeStyles, Container, TextField, TextareaAutosize, Button, Input, Box, Grid, Link } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Hire.css'

const style = makeStyles(theme => ({
  HireBackground: {
    backgroundColor: '#282C34',
    padding: '122px 0',
    [theme.breakpoints.down('lg')]: {
      padding: '60px 0',
    },
    [theme.breakpoints.down('md')]: {
      padding: '60px 0',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '60px 0',
    }
  },
  Container: {
    maxWidth: '1520px',
    [theme.breakpoints.down('lg')]: {
      width: '80px'
    },
    [theme.breakpoints.down('md')]: {
      width: '80px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '80px'
    }
  },
  hireText: {
    fontSize: '55px',
    fontFamily: 'Touche',
    color: 'white',
    paddingBottom: '22px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '30px'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    }
  },
  hireTitle: {
    fontFamily: 'Arial',
    fontSize: '19px',
    color: 'white',
    paddingBottom: '50px'
  },
  LinkedinText: {
    color: 'white',
    textDecoration: 'none',
  },
  InputText: {
    width: '550px',
    borderRadius: '16px',
    paddingBottom: '20px',
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8D8F98"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8D8F98"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8D8F98"
    },
    "& .MuiOutlinedInput-input": {
      color: "#fff"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#fff"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#fff"
    },
    "& .MuiInputLabel-outlined": {
      color: "#fff"
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#fff"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#fff"
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '100%',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    }
  },
  InputArea: {
    width: '550px',
    height: '120px'
  },
  SendButton: {
    width: '226px',
    height: '60px',
    backgroundColor: '#F9004D',
    fontSize: '15px',
    borderRadius: '6px',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#282C34',
      border: '1px solid white',
      borderRadius: '6px',
    }
  },
  box: {
    display: 'flex',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'row'
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  HireImg: {
    width: '573px',
    height: '612.63px',
    objectFit: 'contain',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '100%',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    }
  },
  HireImgBox: {
    display: 'flex',
    alignItems: 'center',
  },
  HireUS: {
    marginRight: '11.5vh',
    [theme.breakpoints.down('lg')]: {
      textAlign: 'left',
      marginRight: '0',
      fontSize: '13px'
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginRight: '0'
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginRight: '0'
    },
    LeftForm: {
      float: 'left'
    },
  },
  IconLi: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingTop: '50px',
    justifyContent: 'flex-start'
  },
  li: {
    padding: '0 30px 0 0',
    [theme.breakpoints.down('lg')]: {
      padding: '0 30px 0 0',
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 30px 0 0',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 24px 0 0',
    }
  },
  facebookIcon: {
    width: '50px',
    height: '50px',
    lineHeight: '47px',
    fontSize: '16px',
    color: '#fff',
    borderRadius: '100%',
    textAlign: 'center',
    border: '2px solid #fff',
    padding: '10px 10px',
    '&:hover': {
      backgroundColor: '#F9004D',
      transition: '1s',
    },
    [theme.breakpoints.down('lg')]: {
      width: '20px !important',
      height: '20px !important'
    },
    [theme.breakpoints.down('md')]: {
      width: '30px',
      height: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '30px',
      height: '30px',
    }
  },
  instagramIcon: {
    width: '50px',
    height: '50px',
    lineHeight: '47px',
    fontSize: '16px',
    color: '#fff',
    borderRadius: '100%',
    textAlign: 'center',
    border: '2px solid #fff',
    padding: '10px 10px',
    '&:hover': {
      backgroundColor: '#F9004D',
      transition: '1s',
    },
    [theme.breakpoints.down('lg')]: {
      width: '20px !important',
      height: '20px !important'
    },
    [theme.breakpoints.down('md')]: {
      width: '30px',
      height: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '30px',
      height: '30px',
    }
  },
  linkedInIcon: {
    width: '50px',
    height: '50px',
    lineHeight: '47px',
    fontSize: '16px',
    color: '#fff',
    borderRadius: '100%',
    textAlign: 'center',
    border: '2px solid #fff',
    padding: '10px 10px',
    '&:hover': {
      backgroundColor: '#F9004D',
      transition: '1s',
    },
    [theme.breakpoints.down('lg')]: {
      width: '20px !important',
      height: '20px !important'
    },
    [theme.breakpoints.down('md')]: {
      width: '30px',
      height: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '30px',
      height: '30px',
    }
  },
  twitterIcon: {
    width: '50px',
    height: '50px',
    lineHeight: '47px',
    fontSize: '16px',
    color: '#fff',
    borderRadius: '100%',
    textAlign: 'center',
    border: '2px solid #fff',
    padding: '10px 10px',
    '&:hover': {
      backgroundColor: '#F9004D',
      transition: '1s',
    },
    [theme.breakpoints.down('lg')]: {
      width: '20px !important',
      height: '20px !important'
    },
    [theme.breakpoints.down('md')]: {
      width: '30px',
      height: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '30px',
      height: '30px',
    }
  },
}))

const Hire = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i7imxka', 'template_flhcw7t', form.current, 'CgCeRumEGrKzP_3Fd')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
        alert("Success")

      }, (error) => {
        console.log(error.text);
      });
  };
  const classes = style()
  return (
    <div className={classes.HireBackground} id="hireSection">
      <Container>
        <div className={classes.box}>
          <Box>
            <div className={classes.HireUS}>
              <Typography className={classes.hireText}>Hire Us</Typography>
              <Typography className={classes.hireTitle}>I am available for work. Connect with me via Linkedin: <br />
                <a className={classes.LinkedinText} href="https://www.linkedin.com/in/sheharzad-salahuddin/"> https://www.linkedin.com/in/sheharzad-salahuddin/</a>
                or email: <a className={classes.LinkedinText} href="mailto:sheharzad.salahuddin9000@outlook.com">sheharzad.salahuddin9000@outlook.com</a></Typography>
              <form className={classes.LeftForm} ref={form} onSubmit={sendEmail} >
                <TextField required type="text" name="user_name" variant='outlined' label="First Name" id="standard-basic" className={classes.InputText} /><br />
                <TextField required type="email" name="user_email" variant='outlined' label="Your Email" id="standard-basic" className={classes.InputText} /><br />
                <TextField required type="text" name="message" variant='outlined' label="Write a Subject" id="standard-basic" className={classes.InputText} /><br />
                <TextField required type="text" name="message" variant='outlined' multiline rows={4} label="Your Message" id="standard-basic" className={classes.InputText} /><br />
                <Button className={classes.SendButton} type='submit'>Send a Message</Button>
              </form>
            </div>
            <ul className={classes.IconLi}>
              <li className={classes.li}><Link href="https://www.facebook.com/s.ssalahuddin2/"><FacebookIcon className={classes.facebookIcon} /></Link></li>
              <li className={classes.li}><Link href="https://www.instagram.com/sheharzad.salahuddin80/"><InstagramIcon className={classes.instagramIcon} /></Link></li>
              <li className={classes.li}><Link href="https://www.linkedin.com/in/sheharzad-salahuddin/"><LinkedInIcon className={classes.linkedInIcon} /></Link></li>
              <li className={classes.li}><Link href="https://twitter.com/sheharzad_salah"><TwitterIcon className={classes.twitterIcon} /></Link></li>
            </ul>
          </Box>

          <Box>
            <div className={classes.HireImgBox}>
              <img className={classes.HireImg} />
            </div>
          </Box>
        </div>
      </Container>
    </div >
  )
}

export default Hire;

// src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
