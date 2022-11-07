/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, makeStyles, Box, Card, CardMedia, Container, Avatar } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Tabs from '../../components/Tabs/Tabs';
import HandWave from '../../assets/1f44b.png';
import './About.css';

const style = makeStyles(theme => ({
    AboutBackground: {
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        paddingTop: '190px',
        paddingBottom: '190px',
        backgroundColor: '#282C34',
        [theme.breakpoints.down('lg')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    aboutcard: {
        width: '471px',
        height: '627px',
        marginRight: '7vh',
        [theme.breakpoints.down('lg')]: {
            maxWidth: '100%',
            marginRight: '0',
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%',
            marginRight: '0',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
            marginRight: '0',
        }
    },
    cardMedia: {
        background: 'require("../../assets/menProfile.jpg")',
        height: '60vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cover'
    },
    box: {
        display: 'flex',
        [theme.breakpoints.down('lg')]: {
            flexDirection: 'row'
        },
        [theme.breakpoints.down('md')]: {
            display:'flex',
            flexDirection: 'row'
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    aboutText: {
        textAlign: 'left',
        width: '33%',
        fontSize: '40px',
        float: 'left',
        fontFamily: 'Touche',
        color: 'white',
        paddingBottom: '17px',
        [theme.breakpoints.down('lg')]: {
            paddingBottom: '17px 0',
            textAlign: 'left',
        },
        [theme.breakpoints.down('md')]: {
            paddingBottom: '17px 0',
            textAlign: 'center',
            width:'100%'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '17px 0',
            textAlign: 'center',
            width:'100%'
        }
    },
    experienceText: {
        width: '94%',
        float: 'left',
        fontSize: '19px',
        fontFamily: 'Arial',
        color: 'white',
        lineHeight: '36px',
        paddingBottom: '33px',
        [theme.breakpoints.down('lg')]: {
            width: '70%',
            textAlign: 'left',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
            textAlign: 'center'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center'
        }
    },
    SkillList: {
        'ul': {
            display: 'flex',
        },
        'li': {
            padding: '20px'
        }
    },
    HandWaveAnimate: {
        animationName: 'wave',
        WebkitAnimationDuration: '1.8s',
        animationDuration: '1.8s',
        WebkitAnimationIterationCount: 'infinite',
        animationIterationCount: 'infinite',
        WebkitAnimationName: 'wave',
        display: 'block',
        WebkitTransformOrigin: '70% 70%',
        transformOrigin: '70% 70%',
        alignItem: 'center'
    }
}))

const About = (props) => {
    const classes = style()
    return (
        <div className={classes.AboutBackground}>
            <Container>
                <div className={classes.box}>
                    <Box>
                        <Typography className={classes.aboutText}>About Us</Typography>
                        <Typography variant="p" component="p" className={classes.experienceText}>
                            I am a Front Web Developer with 7 Years of experience
                            in Web Development. My experience allows me to build
                            modern & successful implementations with high quality,
                            professional appearance, and feel.
                            I am a motivated & hardworking computer programmer
                            looking to utilize my technical & professional experience
                            to advance in a respectable business to achieve personal
                            and corporate growth. I'm interested in developing cross
                            platform web apps & interactive front-end templates.
                            I understand that every website that represents a business
                            is highly important.
                        </Typography>
                    </Box>
                    <Box className='box'>
                        <Card className={classes.aboutcard}>
                            <CardMedia className={classes.cardMedia} />
                        </Card>
                    </Box>

                </div>

            </Container>
        </div>
    )
}

export default About;