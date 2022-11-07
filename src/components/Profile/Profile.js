/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Typography, makeStyles, Box, Paper, Button, Container, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import './Profile.css'


const style = makeStyles(theme => ({
    ProfileBackground: {
        flexDirection: 'row',
        display: 'flex',
    },
    button: {
        width: '208px',
        height: '72px',
        border: '2px solid #F9004D',
        color: '#ffff',
        fontFamily: 'Arial',
        fontSize: '18px',
        borderRadius: '35px',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#F9004D'
        }
    },
    box: {
        width: '100%',
        paddingBottom: '150px'
    },
    Box: {
        width: '100%',
        margin: '0 auto',
    },
    facebookIcon: {
        color: 'white',
        fontSize: '2rem !important',
        paddingBottom: '50px',
        '&:hover': {
            color: '#F9004D',
            transition: '2s'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '1.5rem !important',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem !important',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem !important',
        }
    },
    instagramIcon: {
        color: 'white',
        fontSize: '2rem !important',
        paddingBottom: '50px',
        '&:hover': {
            color: '#F9004D',
            transition: '2s'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '1.5rem !important',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem !important',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem !important',
        }
    },
    linkedInIcon: {
        color: 'white',
        fontSize: '2rem !important',
        paddingBottom: '50px',
        '&:hover': {
            color: '#F9004D',
            transition: '2s'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '1.5rem !important',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem !important',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem !important',
        }
    },
    twitterIcon: {
        color: 'white',
        fontSize: '2rem !important',
        paddingBottom: '50px',
        '&:hover': {
            color: '#F9004D',
            transition: '2s'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '1.5rem !important',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem !important',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem !important',
        }
    },
    text: {
        fontFamily: 'Touche',
        fontSize: '55px',
        color: 'white',
        [theme.breakpoints.down('lg')]: {
            fontSize: '45px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '30px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            lineHeight: '2em',
            width: '100%',
            textAlign: 'center'
        }
    },
    Typography: {
        paddingTop: '150px',
        width: '100%'
    },
    styleButton: {
        width: '208px',
        height: '63px',
        border: '2px solid #F9004D',
        color: '#ffff',
        fontFamily: 'Arial',
        fontSize: '15px',
        borderRadius: '35px',
        '&:hover': {
            background: '#ffff',
            color: '#F9004D'
        },
        [theme.breakpoints.down('lg')]: {
            width: '180px',
            fontSize: '13px',
            height: '55px',
        },
        [theme.breakpoints.down('md')]: {
            width: '150px',
            fontSize: '13px',
            height: '65px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '150px',
            fontsSize: '13px',
            height: '55px',
        }
    },
    ulInline: {
        marginTop: '30px',
        display: 'inline-flex',

        width: '100%',
        [theme.breakpoints.down('lg')]: {
            width: '100%',
            textAlign: 'center',
            justifyContent: 'left',
            alignItems: 'center',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    liPadding: {
        paddingRight: '50px',
        [theme.breakpoints.down('lg')]: {
            paddingRight: '30px'
        },
        [theme.breakpoints.down('md')]: {
            paddingRight: '30px'
        },
        [theme.breakpoints.down('sm')]: {
            paddingRight: '30px'
        }
    },
    styleWidth: {
        [theme.breakpoints.down('lg')]: {
            width: '100%',
            textAlign: 'left',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
            textAlign: 'center',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center',
        }
    }
}))

const Profile = (props) => {
    const classes = style()

    return (
        <div className='ProfileBackground container-fluid'>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <Box className={classes.box}>
                            <div class={classes.Typography}>
                                <div className={classes.Box}>
                                    <Typography variant="h1" component="h2" className={classes.text}>
                                        Hi, My name is Sheharzad <br />Salahuddin. I am web developer
                                    </Typography>

                                    <Box>
                                        <ul className={classes.ulInline}>
                                            <li className={classes.liPadding}><FacebookIcon className={classes.facebookIcon} /></li>
                                            <li className={classes.liPadding}><InstagramIcon className={classes.instagramIcon} /></li>
                                            <li className={classes.liPadding}><LinkedInIcon className={classes.linkedInIcon} /></li>
                                            <li className={classes.liPadding}><TwitterIcon className={classes.twitterIcon} /></li>
                                        </ul>
                                    </Box>
                                </div>
                            </div>
                            <div className={classes.styleWidth}>
                                <Button className={classes.styleButton}>
                                    Get in touch
                                </Button>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Profile
