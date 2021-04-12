import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Typography, TextField, Button, Paper, Card, Grid, CardActions, CardContent, CardHeader } from '@material-ui/core';

export class FormSkillDetails extends Component {
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
                                <CardHeader title="Skills" style={{ textAlign: 'center' }} />
                                <CardContent>
                                    <div>
                                        <Grid container spacing={2} alignItems="center" lg={12}>
                                            <Grid item xs={12}><Typography variant='h6'>Skills</Typography></Grid>

                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    margin="dense"
                                                    variant="outlined"
                                                    name="skill"
                                                    id="skill-1"
                                                    label="Skill-1"
                                                    value={this.props.value.skill1}
                                                    error={this.props.error.skill1}
                                                    helperText={this.props.error.skill1}
                                                    onChange={handleChange('skill1')}
                                                    fullWidth

                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    margin="dense"
                                                    variant="outlined"
                                                    name="skill"
                                                    label="Skill-2"
                                                    value={this.props.value.skill2}
                                                    error={this.props.error.skill2}
                                                    helperText={this.props.error.skill2}
                                                    onChange={handleChange('skill2')}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    margin="dense"
                                                    variant="outlined"
                                                    name="skill"
                                                    label="Skill-3"
                                                    fullWidth
                                                    value={this.props.value.skill3}
                                                    error={this.props.error.skill3}
                                                    helperText={this.props.error.skill3}
                                                    onChange={handleChange('skill3')}

                                                />
                                            </Grid>

                                            <Grid item xs={12}><Typography variant='h6'>Languages</Typography></Grid>

                                            <Grid item xs={12} >
                                                <TextField
                                                    required
                                                    margin="dense"
                                                    variant="outlined"
                                                    name="Language"
                                                    label="Language"
                                                    value={this.props.value.language1}
                                                    error={this.props.error.language1}
                                                    helperText={this.props.error.language1}
                                                    onChange={handleChange('language1')}
                                                    fullWidth
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    margin="dense"
                                                    variant="outlined"
                                                    name="Language"
                                                    label="Language"
                                                    fullWidth
                                                    value={this.props.value.language2}
                                                    error={this.props.error.language2}
                                                    helperText={this.props.error.language2}
                                                    onChange={handleChange('language2')}
                                                />
                                            </Grid>
                                            <Grid item xs={12}><Typography variant='h6'>Interests</Typography></Grid>

                                            <Grid item xs={12} >
                                                <TextField
                                                    required
                                                    margin="dense"
                                                    variant="outlined"
                                                    name="Interest"
                                                    label="Interest"
                                                    fullWidth
                                                    value={this.props.value.interest1}
                                                    error={this.props.error.interest1}
                                                    helperText={this.props.error.interest1}
                                                    onChange={handleChange('interest1')}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    margin="dense"
                                                    variant="outlined"
                                                    name="Interest"
                                                    label="Interest"
                                                    fullWidth
                                                    value={this.props.value.interest2}
                                                    error={this.props.error.interest2}
                                                    helperText={this.props.error.interest2}
                                                    onChange={handleChange('interest2')}
                                                />
                                            </Grid>
                                            <Grid item xs={12} >
                                                <TextField
                                                    required
                                                    margin="dense"
                                                    variant="outlined"
                                                    name="Interest"
                                                    label="Interest"
                                                    fullWidth
                                                    value={this.props.value.interest3}
                                                    error={this.props.error.interest3}
                                                    helperText={this.props.error.interest3}
                                                    onChange={handleChange('interest3')}
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

export default FormSkillDetails;