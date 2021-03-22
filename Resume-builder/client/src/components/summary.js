import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Paper, Card, CardHeader, TextField, Button, TextareaAutosize, CardActions } from '@material-ui/core';
import { saveAs } from 'file-saver';

const axios = require('axios');

export class FormSummaryDetails extends Component {

    continue = e => {
        e.preventDefault();
        (() => {
            axios
                .post('/create-pdf', this.props.value)
                .then(() => {
                    axios
                        .get('fetch-pdf', { responseType: 'arraybuffer' })
                        .then(res => {
                            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                            saveAs(pdfBlob, `${this.props.value.firstName}'s Resume.pdf`);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                })
                .catch(err => {
                    console.log(err);
                });
        })()
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <Paper style={{ width: '80%', margin: 'auto', marginTop: '4rem' }}>
                        <Card>
                            <CardHeader title='Summary' style={{ textAlign: "center" }} />
                            <TextField
                                placeholder="Summary"
                                variant="outlined"
                                label='Summary'
                                multiline
                                fullWidth
                                rows={10}
                                onChange={handleChange('summary')}
                            />
                            <CardActions style={{
                                marginTop: 12,
                                marginBottom: 3,
                                display: 'flex',
                                justifyContent: 'space-around',
                            }}>
                                <Button variant='contained' color='secondary' onClick={this.back}>Back</Button>
                                <Button variant='contained' color='primary' onClick={this.continue}>Download</Button>
                            </CardActions>
                        </Card>

                    </Paper>
                </>
            </MuiThemeProvider>
        );
    }
}

export default FormSummaryDetails;





