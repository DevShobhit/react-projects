import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Typography, TextField, Button, Paper, Card, Grid, FormControl, CardActions, CardContent, CardHeader, InputLabel, Select } from '@material-ui/core';


export class FormEducationDetails extends Component {
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
                <CardHeader title="Education Details" style={{ textAlign: 'center' }} />
                <CardContent>
                  <div>
                    <Grid container
                      spacing={2}
                      alignItems="center"
                      lg={12}
                    >
                      <Grid item xs={12}><Typography variant='h6'>Graduation</Typography></Grid>

                      <Grid item md={4} sm={12} xs={12} lg={4}>
                        <TextField
                          required
                          margin="dense"
                          variant="outlined"
                          id='edu1_college'
                          name="college"
                          fullWidth
                          label="College/University"
                          value={this.props.value.edu1_college}
                          error={this.props.error.edu1_college}
                          helperText={this.props.error.edu1_college}
                          onChange={handleChange('edu1_college')}
                        />
                      </Grid>
                      <Grid item md={4} sm={12} xs={12} lg={4}>
                        <TextField
                          required
                          margin="dense"
                          variant="outlined"
                          name="qualification"
                          id='edu1_qualification'
                          label="Qualification"
                          fullWidth
                          value={this.props.value.edu1_qualification}
                          error={this.props.error.edu1_qualification}
                          helperText={this.props.error.edu1_qualification}
                          onChange={handleChange('edu1_qualification')}
                        />
                      </Grid>
                      <Grid item md={2} sm={6} xs={12} lg={2}>
                        <FormControl variant="outlined" margin='dense'>
                          <InputLabel htmlFor="start-year">Start Year</InputLabel>
                          <Select
                            native
                            onChange={handleChange('edu1_start_year')}
                            inputProps={{
                              name: 'start-year',
                              id: 'start-year',
                            }}
                            style={{ width: '8rem' }}
                          >
                            <option aria-label="None" value="" />
                            <option value={2021}>2021</option>
                            <option value={2020}>2020</option>
                            <option value={2019}>2019</option>
                            <option value={2018}>2018</option>
                            <option value={2017}>2017</option>
                            <option value={2016}>2016</option>
                            <option value={2015}>2015</option>
                            <option value={2014}>2014</option>
                            <option value={2013}>2013</option>
                            <option value={2012}>2012</option>
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item md={2} sm={6} xs={12} lg={2}>
                        <FormControl variant="outlined" margin='dense'>
                          <InputLabel htmlFor="end-year">End Year</InputLabel>
                          <Select
                            native
                            onChange={handleChange('edu1_end_year')}
                            label='year'
                            inputProps={{
                              name: 'end-year',
                              id: 'end-year',
                            }}
                            style={{ width: '8rem' }}
                          >
                            <option aria-label="None" value="" />
                            <option value={2021}>2021</option>
                            <option value={2020}>2020</option>
                            <option value={2019}>2019</option>
                            <option value={2018}>2018</option>
                            <option value={2017}>2017</option>
                            <option value={2016}>2016</option>
                            <option value={2015}>2015</option>
                            <option value={2014}>2014</option>
                            <option value={2013}>2013</option>
                            <option value={2012}>2012</option>
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          margin="dense"
                          variant="outlined"
                          name="description"
                          label="Description"
                          value={this.props.value.edu1_desc}
                          error={this.props.error.edu1_desc}
                          helperText={this.props.error.edu1_desc}
                          onChange={handleChange('edu1_desc')}
                        />
                      </Grid>

                      <Grid item xs={12}><Typography variant='h6'>Schooling</Typography></Grid>

                      <Grid item md={5} sm={12} xs={12} lg={5}>
                        <TextField
                          required
                          margin="dense"
                          variant="outlined"
                          id='School'
                          name="school"
                          fullWidth
                          label="School"
                          value={this.props.value.edu2_school}
                          error={this.props.error.edu2_school}
                          helperText={this.props.error.edu2_school}
                          onChange={handleChange('edu2_school')}
                        />
                      </Grid>
                      <Grid item md={5} sm={12} xs={12} lg={5}>
                        <TextField
                          required
                          margin="dense"
                          variant="outlined"
                          name="qualification"
                          label="Qualification"
                          fullWidth
                          value={this.props.value.edu2_qualification}
                          error={this.props.error.edu2_qualification}
                          helperText={this.props.error.edu2_qualification}
                          onChange={handleChange('edu2_qualification')}
                        />
                      </Grid>
                      <Grid item md={2} sm={12} xs={12} lg={2}>
                        <FormControl variant="outlined" margin='dense'>
                          <InputLabel htmlFor="year">Year</InputLabel>
                          <Select
                            native
                            onChange={handleChange('edu2_year')}
                            label='year'
                            inputProps={{
                              name: 'year',
                              id: 'year',
                            }}
                          >
                            <option aria-label="None" value="" />
                            <option value={2021}>2021</option>
                            <option value={2020}>2020</option>
                            <option value={2019}>2019</option>
                            <option value={2018}>2018</option>
                            <option value={2017}>2017</option>
                            <option value={2016}>2016</option>
                            <option value={2015}>2015</option>
                            <option value={2014}>2014</option>
                            <option value={2013}>2013</option>
                            <option value={2012}>2012</option>
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          margin="dense"
                          variant="outlined"
                          name="description"
                          label="Description"
                          value={this.props.value.edu2_desc}
                          error={this.props.error.edu2_desc}
                          helperText={this.props.error.edu2_desc}
                          onChange={handleChange('edu2_desc')}
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

export default FormEducationDetails;



