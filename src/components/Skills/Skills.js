/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { Typography, makeStyles, Box, Card, CardMedia, Container, Grid, Avatar } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import logoImg from '../../assets/index.png';
import HTMLIcon from '../../assets/HtmlIcon.png';
import CSSIcon from '../../assets/CSSIcon.png';
import JSIcon from '../../assets/JSIcon.png';
import BootstrapIcon from '../../assets/Bootstrap.png';
import SassIcon from '../../assets/sassIcon.png';
import ReactJS from '../../assets/reactJS.png';
import NodeJs from '../../assets/NodeJS.png';
import npmIcon from '../../assets/npmIcon.png';
import firebaseIcon from '../../assets/firebase.png';
import ReactNative from '../../assets/React-Native.png';
import Firebase from '../../assets/Firebase.jpg';
import Json from '../../assets/Json.png';
import MySQL from '../../assets/MySQL.png';
import gitIcon from '../../assets/gitIcon.png';
import './Skills.css';

const style = makeStyles(theme => ({
    SkillsBackground: {
        padding: '40px 0 80px',
        display: 'flex',
        backgroundColor: '#484a4c'
    },
    SkillText: {
        fontSize: '55px',
        textAlign: "center",
        padding: '40px 0',
        color: '#fff',
        fontFamily: 'Touche',
        [theme.breakpoints.down('lg')]: {
            fontSize: '30px'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '30px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px'
        }
    },
    Box: {
        width: '355px',
        height: '400px',
        boxShadow: '5px 4px 8px 0 rgba(0, 0, 0, 0.12), 0 6px 20px 0 rgba(0, 0, 0, 0.4)',
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '10px',
        '&:hover': {
            transform: 'scale(1.10)',
            transitionDuration: '600ms',
            transitionProperty: 'all'
        },
        [theme.breakpoints.down('lg')]: {
            width: '100%',
            '&:hover': {
                transform: 'none',
                transitionDuration: '600ms',
                transitionProperty: 'all'
            },
        },
        [theme.breakpoints.down('md')]: {
            width: '362px',
            '&:hover': {
                transform: 'none',
                transitionDuration: '600ms',
                transitionProperty: 'all'
            },
        },
        [theme.breakpoints.down('sm')]: {
            width: '362px',
            '&:hover': {
                transform: 'none',
                transitionDuration: '600ms',
                transitionProperty: 'all'
            },
        }
    },
    logoCenter: {
        display: 'flex',
        padding: '5%',
        paddingBottom: '0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '60px',
        height: '80%',
        objectFit: 'none',
    },
    skillsText: {
        textAlign: 'center',
        fontSize: '1.6rem',
        paddingTop: '10px',
        paddingBottom: '20px',
        color: '#fff',
    },
    PaddingLeft: {
        paddingLeft: '9%',
        display: 'flex'
    },
    Skills: {
        display: 'flex',
        justifyContent: 'center',
        li: {
            margin: '20px'
        },
        [theme.breakpoints.down('lg')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
        },
        [theme.breakpoints.down('md')]: {
            paddingBottom: '17px 0',
            textAlign: 'center',
            flexDirection: 'column'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '17px 0',
            textAlign: 'center',
            flexDirection: 'column'
        }
    },
    SkillsText: {
        fontSize: '20px',
        textAlign: 'center',
        color: 'white',
        [theme.breakpoints.down('lg')]: {
            fontSize: '19px'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '19px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '19px',
        }
    },
    SkillsList: {
        listStyleType: 'circle'
    }
}))


const Skills = (props) => {
    const classes = style()
    return (
        <div className={classes.SkillsBackground}>
            <Container>
                <Box>
                    <Typography className={classes.SkillText}>What I do</Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <ul className={classes.Skills}>
                        <li style={{ padding: '20px 20px 40px 20px' }}><Avatar src={HTMLIcon} sx={{ objectFit: 'contain' }} /></li>
                        <li style={{ padding: '20px 20px 40px 20px' }}><Avatar src={CSSIcon} sx={{ objectFit: 'contain' }} /></li>
                        <li style={{ padding: '20px 20px 40px 20px' }}><Avatar src={JSIcon} sx={{ objectFit: 'contain' }} /></li>
                        <li style={{ padding: '20px 20px 40px 20px' }}><Avatar src={BootstrapIcon} sx={{ objectFit: 'contain' }} /></li>
                        <li style={{ padding: '20px 20px 40px 20px' }}><Avatar src={SassIcon} sx={{ objectFit: 'contain' }} /></li>
                        <li style={{ padding: '20px 20px 40px 20px' }}><Avatar src={ReactJS} sx={{ objectFit: 'contain' }} /></li>
                        <li style={{ padding: '20px 20px 40px 20px' }}><Avatar src={npmIcon} sx={{ objectFit: 'contain' }} /></li>
                        <li style={{ padding: '20px 20px 40px 20px' }}><Avatar src={firebaseIcon} sx={{ objectFit: 'contain' }} /></li>
                        <li style={{ padding: '20px 20px 40px 20px' }}><Avatar src={gitIcon} sx={{ objectFit: 'contain' }} /></li>
                    </ul>

                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <ul>
                        <li><Typography className={classes.SkillsText}>- Develop highly interactive Front end / User Interfaces for your web and mobile applications<br/></Typography></li>
                        <li><Typography className={classes.SkillsText}>- Integration of third party services such as Firebase/ Maps / Payment-Gateways</Typography></li>
                    </ul>
                </Box>
            </Container>
        </div>
    )
}

export default Skills;