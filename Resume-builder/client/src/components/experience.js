import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { TextField, Button, Paper, Card, Grid, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core';

export class FormExperienceDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { handleChange } = this.props;
        return (
            <div>

                <MuiThemeProvider>
                    <>
                        <Paper style={{ width: '80%', margin: 'auto', marginTop: '4rem' }}>
                            <Card>
                                <CardHeader title="Projects & Experience Details" style={{ textAlign: 'center' }} />
                                <CardContent>
                                    <div>
                                        <Grid container spacing={2} alignItems="center" lg={12}>

                                            <Grid item xs={12}><Typography variant='h6'>Project 1</Typography></Grid>
                                            <Grid item md={6} sm={12} xs={12} lg={6}>
                                                <TextField
                                                    required
                                                    margin="dense"
                                                    variant="outlined"
                                                    name="title"
                                                    label="Title"
                                                    fullWidth
                                                    value={this.props.value.proj1_title}
                                                    error={this.props.error.proj1_title}
                                                    helperText={this.props.error.proj1_title}
                                                    onChange={handleChange('proj1_title')}

                                                />
                                            </Grid>
                                            <Grid item md={6} sm={12} xs={12} lg={6}>
                                                <TextField
                                                    required
                                                    margin="dense"
                                                    variant="outlined"
                                                    name="link"
                                                    label="Link"
                                                    fullWidth
                                                    value={this.props.value.proj1_link}
                                                    error={this.props.error.proj1_link}
                                                    helperText={this.props.error.proj1_link}
                                                    onChange={handleChange('proj1_link')}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    margin="dense"
                                                    variant="outlined"
                                                    name="Description"
                                                    label="Description"
                                                    fullWidth
                                                    value={this.props.value.proj1_desc}
                                                    error={this.props.error.proj1_desc}
                                                    helperText={this.props.error.proj1_desc}
                                                    onChange={handleChange('proj1_desc')}
                                                />
                                            </Grid>
                                            <Grid item xs={12}><Typography variant='h6'>Project 2</Typography></Grid>

                                            <Grid item md={6} sm={12} xs={12} lg={6}>
                                                <TextField

                                                    margin="dense"
                                                    variant="outlined"
                                                    name="title"
                                                    label="Title"
                                                    fullWidth
                                                    value={this.props.value.proj2_title}
                                                    onChange={handleChange('proj2_title')}
                                                />
                                            </Grid>
                                            <Grid item md={6} sm={12} xs={12} lg={6}>
                                                <TextField

                                                    margin="dense"
                                                    variant="outlined"
                                                    name="link"
                                                    label="Link"
                                                    fullWidth
                                                    value={this.props.value.proj2_link}
                                                    onChange={handleChange('proj2_link')}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField

                                                    margin="dense"
                                                    variant="outlined"
                                                    name="Description"
                                                    label="Description"
                                                    fullWidth
                                                    value={this.props.value.proj2_desc}
                                                    onChange={handleChange('proj2_desc')}
                                                />
                                            </Grid>
                                            <Grid item xs={12}><Typography variant='h6'>Project 3</Typography></Grid>

                                            <Grid item md={6} sm={12} xs={12} lg={6}>
                                                <TextField

                                                    margin="dense"
                                                    variant="outlined"
                                                    name="title"
                                                    label="Title"
                                                    value={this.props.value.proj3_title}
                                                    onChange={handleChange('proj3_title')}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item md={6} sm={12} xs={12} lg={6}>
                                                <TextField

                                                    margin="dense"
                                                    variant="outlined"
                                                    name="link"
                                                    label="Link"
                                                    fullWidth
                                                    value={this.props.value.proj3_link}
                                                    onChange={handleChange('proj3_link')}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField

                                                    margin="dense"
                                                    variant="outlined"
                                                    name="Description"
                                                    label="Description"
                                                    fullWidth
                                                    value={this.props.value.proj3_desc}
                                                    onChange={handleChange('proj3_desc')}
                                                />
                                            </Grid>
                                            <Grid item xs={12}><Typography variant='h6'>Experience 1</Typography></Grid>

                                            <Grid item md={5} sm={6} xs={12} lg={5}>
                                                <TextField

                                                    margin="dense"
                                                    variant="outlined"
                                                    name="organization"
                                                    label="Organization"
                                                    fullWidth
                                                    value={this.props.value.exp1_org}
                                                    onChange={handleChange('exp1_org')}
                                                />
                                            </Grid>
                                            <Grid item md={5} sm={6} xs={12} lg={5}>
                                                <TextField
                                                    fullWidth
                                                    margin="dense"
                                                    variant="outlined"
                                                    name="position"
                                                    label="Position"
                                                    value={this.props.value.exp1_pos}
                                                    onChange={handleChange('exp1_pos')}

                                                />
                                            </Grid>
                                            <Grid item md={2} sm={4} xs={4} lg={2}>
                                                <TextField
                                                    fullWidth
                                                    margin="dense"
                                                    variant="outlined"
                                                    name="duration"
                                                    label="Duration"
                                                    value={this.props.value.exp1_dur}
                                                    onChange={handleChange('exp1_dur')}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField

                                                    margin="dense"
                                                    variant="outlined"
                                                    name="description"
                                                    label="Description"
                                                    fullWidth
                                                    value={this.props.value.exp1_desc}
                                                    onChange={handleChange('exp1_desc')}
                                                />
                                            </Grid>
                                            <Grid item xs={12}><Typography variant='h6'>Experience 2</Typography></Grid>

                                            <Grid item md={5} sm={6} xs={12} lg={5}>
                                                <TextField

                                                    margin="dense"
                                                    variant="outlined"
                                                    name="organization"
                                                    label="Organization"
                                                    fullWidth
                                                    value={this.props.value.exp2_org}
                                                    onChange={handleChange('exp2_org')}
                                                />
                                            </Grid>
                                            <Grid item md={5} sm={6} xs={12} lg={5}>
                                                <TextField
                                                    fullWidth
                                                    margin="dense"
                                                    variant="outlined"
                                                    name="position"
                                                    label="Position"
                                                    value={this.props.value.exp2_pos}
                                                    onChange={handleChange('exp2_pos')}

                                                />
                                            </Grid>
                                            <Grid item md={2} sm={4} xs={4} lg={2}>
                                                <TextField

                                                    margin="dense"
                                                    variant="outlined"
                                                    name="duration"
                                                    label="Duration"
                                                    value={this.props.value.exp2_dur}
                                                    onChange={handleChange('exp2_dur')}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField

                                                    margin="dense"
                                                    variant="outlined"
                                                    name="description"
                                                    label="Description"
                                                    fullWidth
                                                    value={this.props.value.exp2_desc}
                                                    onChange={handleChange('exp2_desc')}

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
                                    <Button variant='contained' color='secondary' onClick={this.back}>Back</Button>
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

export default FormExperienceDetails;
