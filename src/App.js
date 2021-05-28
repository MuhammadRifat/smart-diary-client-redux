import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import smartDiary from './images/diary_logo.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    return (
        <Container maxidth="lg">
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

export default App;