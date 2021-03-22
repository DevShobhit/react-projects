import React, { Component } from 'react';
import { TextField, Button, Paper, Card, CardActions, CardContent, CardHeader, Grid } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { handleChange } = this.props;
        return (
            <div>

                <MuiThemeProvider>
                    <>
                        <Paper style={{ width: '80%', margin: 'auto', marginTop: '4rem' }}>
                            <Card>
                                <CardHeader title="Personal Details" alignItems='center' style={{ textAlign: 'center' }} />
                                <CardContent>
                                    <div>

                                        <Grid container
                                            spacing={2}
                                            alignItems="center"
                                            lg={12}
                                            alignContent='center'
                                        >
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    id="firstname"
                                                    margin="dense"
                                                    name='firstName'
                                                    fullWidth
                                                    label="First Name"
                                                    variant="outlined"
                                                    onChange={handleChange('firstName')}

                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    id="lastname"
                                                    fullWidth
                                                    margin="dense"
                                                    name='lastName'
                                                    label="Last Name"
                                                    variant="outlined"
                                                    onChange={handleChange('lastName')}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    id="address"
                                                    fullWidth
                                                    margin="dense"
                                                    name='address'
                                                    label="Address"
                                                    variant="outlined"
                                                    onChange={handleChange('address')}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    id="email"
                                                    fullWidth
                                                    margin="dense"
                                                    name='email'
                                                    label="Email Address"
                                                    variant="outlined"
                                                    onChange={handleChange('email')}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    id="phone"
                                                    fullWidth
                                                    margin="dense"
                                                    name='phone'
                                                    label="Phone"
                                                    variant="outlined"
                                                    onChange={handleChange('phone')}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    id="github"
                                                    margin="dense"
                                                    fullWidth
                                                    name='github'
                                                    label="Github"
                                                    variant="outlined"
                                                    onChange={handleChange('github')}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    id="linkedin"
                                                    margin="dense"
                                                    name='linkedin'
                                                    fullWidth
                                                    label="LinkedIn"
                                                    variant="outlined"
                                                    onChange={handleChange('linkedin')}
                                                />
                                            </Grid>
                                        </Grid>

                                    </div>
                                </CardContent>
                                <CardActions style={{
                                    marginTop: 12,
                                    marginBottom: 3,
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                }}>
                                    <Button disabled variant='contained' color='secondary'>Back</Button>
                                    <Button variant='contained' color='primary' onClick={this.continue}>Next</Button>
                                </CardActions>
                            </Card>
                        </Paper>
                    </>
                </MuiThemeProvider>

            </div>
        );
    }
}

export default FormUserDetails;


