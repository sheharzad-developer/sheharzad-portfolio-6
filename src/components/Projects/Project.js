/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Typography, makeStyles, Box, Grid, Item, Paper, Card, CardActions, CardContent, Button, Container, CardMedia, ImageList, ImageListItem } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import './Project.css';

const style = makeStyles(theme => ({
    projectBackground: {
        paddingTop: '140px',
        backgroundColor: '#313233',
        paddingBottom: '140px',
        [theme.breakpoints.down('lg')]: {
            paddingTop: '80px',
            paddingBottom:'80px'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '30px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
        }
    },
    container: {
        maxWidth: '1520px',
        padding: '0',
        backgroundColor: '#313233',
    },
    projectTitle: {
        fontSize: '55px',
        paddingBottom: '80px',
        textAlign: 'center',
        fontFamily: 'Touche',
        color: 'white',
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
    card: {
        width: '390px',
        height: '600px',
        backgroundColor: 'white'
    },
    Imgbox: {
        display: 'block',
        width: '380px',
        backgroundPosition: 'cover',
        '&:hover': {
            height: 'auto',
        },
        [theme.breakpoints.down('lg')]: {
            width: '380px',
        },
        [theme.breakpoints.down('md')]: {
            width: '380px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '380px',
        }
    },
    GridBox: {
        width: '385px',
        height: '585px',
        margin: '20px',
        marginLeft: '0',
        [theme.breakpoints.down('lg')]: {
            width: '250px',
        },
        [theme.breakpoints.down('md')]: {
            width: '250px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '250px',
        }
    },
    GridBoxInside: {
        opacity: 0,
        color: 'black',
        '&:hover': {
            opacity: '1'
        }
    },
    GridRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        [theme.breakpoints.down('lg')]: {
            flexDirection: 'row',
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    }
}))


const Project = (props) => {
    const classes = style()
    return (
        <div className={classes.projectBackground}>
            <Container>
                <div className={classes.projectContainer}>
                    <Typography className={classes.projectTitle}>My latest Project</Typography>
                </div>
                {/* <Box sx={{ flexGrow: 1 }}>
                    <Grid row={{ xs: 4, sm: 8, md: 12 }} className={classes.GridRow}>
                        <Grid item xs={6} className={classes.GridBox}>
                            <img className={classes.Imgbox} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                            <Typography className={classes.GridBoxInside}>One</Typography>
                        </Grid>
                        <Grid item xs={6} className={classes.GridBox}>
                            <img className={classes.Imgbox} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        </Grid>
                        <Grid item xs={6} className={classes.GridBox}>
                            <img className={classes.Imgbox} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        </Grid>
                    </Grid>

                    <Grid row={{ xs: 4, sm: 8, md: 12 }} className={classes.GridRow} style={{ marginTop: '140px' }}>
                        <Grid item xs={6} className={classes.GridBox}>
                            <img className={classes.Imgbox} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        </Grid>
                        <Grid item xs={6} className={classes.GridBox}>
                            <img className={classes.Imgbox} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        </Grid>
                        <Grid item xs={6} className={classes.GridBox}>
                            <img className={classes.Imgbox} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        </Grid>
                    </Grid>
                </Box> */}
            </Container>
        </div >
    )
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },

];

export default Project


