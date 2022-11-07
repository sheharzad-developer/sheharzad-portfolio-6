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
import ReactJS from '../../assets/reactJS.png';
import NodeJs from '../../assets/NodeJS.png';
import ReactNative from '../../assets/React-Native.png';
import Firebase from '../../assets/Firebase.jpg';
import Json from '../../assets/Json.png';
import MySQL from '../../assets/MySQL.png';
import GridClass from '../../components/Grid/Grid';


const style = makeStyles(theme => ({
    ExperienceBackground: {
        padding: '40px 0 80px',
        display: 'flex',
        backgroundColor: '#484a4c'
    },
    ExperienceText: {
        textAlign: 'center',
        fontSize: '55px',
        color: 'white',
        fontFamily: 'Touche',
        paddingBottom: '40px',
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
    GridCenter: {
        textAlign: 'center'
    },
    BoxClass: {
        background: 'white',
        margin: '10px'
    },
    BoxInside: {
        height: '40px',
        backgroundColor: 'rgb(16, 31, 56)',
        borderRadius: '4%',
    },
    Text: {
        width: '100%'
    }

}))


const Skills = (props) => {
    const classes = style()
    return (
        <div className={classes.ExperienceBackground}>
            <div className={classes.Text}>
                <Box>
                    <Typography className={classes.ExperienceText}>Experience</Typography>
                </Box>
                <GridClass />
            </div>
        </div>
    )
}

export default Skills;