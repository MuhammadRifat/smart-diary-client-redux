import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import React from 'react';
import { Form } from 'react-bootstrap';
import smartDiary from '../../images/diary_logo.png';
import Login from '../Login/Login';
import Posts from '../Posts/Posts';
import useStyles from '../../styles'

const Home = () => {
    const classes = useStyles();
    return (
        <Container maxidth="lg">
            <Login></Login>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Smart Diary</Typography>
                <img className={classes.image} src={smartDiary} alt="Diary" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch">
                        <Grid item xs={12} sm={7}>
                            <Posts></Posts> 
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <Form></Form>
                        </Grid>

                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default Home;