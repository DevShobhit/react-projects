import React, { Component } from 'react';
import { Typography, Paper, Card, CardContent, CardActions, Button } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export default class Success extends Component {
    first = e => {
        e.preventDefault();
        this.props.firstStep();
    };
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <>
                        <Paper style={{ width: '80%', margin: 'auto', marginTop: '4rem' }}>
                            <Card>
                                <CardContent>
                                    <Typography variant='h3' style={{ textAlign: 'center' }} color='textSecondary'>
                                        Hang Tight while your resume Downloads!!
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        style={{ margin: 'auto' }}
                                        onClick={this.first}
                                    >
                                        Back to Home
                             </Button>
                                </CardActions>
                            </Card>
                        </Paper>
                    </>
                </MuiThemeProvider>
            </div >
        )
    }
}


