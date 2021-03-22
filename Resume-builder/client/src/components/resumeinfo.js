import React, { Component } from 'react';
import FormUserDetails from './personalinfo'
import Skills from './skills';
import Summary from './summary';
import Experience from './experience';
import Education from './education';
import Success from './success';

const val = {

}

export class ResumeInfo extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        address: '',

        edu1_college: '',
        edu1_qualification: '',
        edu1_desc: '',
        edu1_start_year: '',
        edu1_end_year: '',

        edu2_school: '',
        edu2_qualification: '',
        edu2_desc: '',
        edu2_year: '',

        proj1_title: '',
        proj1_link: '',
        proj1_desc: '',

        proj2_title: '',
        proj2_link: '',
        proj2_desc: '',

        proj3_title: '',
        proj3_link: '',
        proj3_desc: '',


        exp1_org: '',
        exp1_pos: '',
        exp1_desc: '',
        exp1_dur: '',

        exp2_org: '',
        exp2_pos: '',
        exp2_desc: '',
        exp2_dur: '',

        skill1: '',
        skill2: '',
        skill3: '',

        language1: '',
        language2: '',

        interest1: '',
        interest2: '',
        interest3: '',

        summary: '',
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    //Go back to first step
    firstStep = () => {
        const { step } = this.state;
        this.setState({
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            linkedin: '',
            github: '',
            address: '',

            edu1_college: '',
            edu1_qualification: '',
            edu1_desc: '',
            edu1_start_year: '',
            edu1_end_year: '',

            edu2_school: '',
            edu2_qualification: '',
            edu2_desc: '',
            edu2_year: '',

            proj1_title: '',
            proj1_link: '',
            proj1_desc: '',

            proj2_title: '',
            proj2_link: '',
            proj2_desc: '',

            proj3_title: '',
            proj3_link: '',
            proj3_desc: '',


            exp1_org: '',
            exp1_pos: '',
            exp1_desc: '',
            exp1_dur: '',

            exp2_org: '',
            exp2_pos: '',
            exp2_desc: '',
            exp2_dur: '',

            skill1: '',
            skill2: '',
            skill3: '',

            language1: '',
            language2: '',

            interest1: '',
            interest2: '',
            interest3: '',

            summary: '',
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;

        const { firstName, lastName, email, phone, linkedin, github, address, edu1_college, edu1_qualification,
            edu1_desc, edu1_start_year, edu1_end_year, edu2_school,
            edu2_qualification, edu2_desc, edu2_year,
            proj1_title, proj1_link, proj1_desc, proj2_title, proj2_link, proj2_desc, proj3_title,
            proj3_link, proj3_desc, exp1_org, exp1_pos, exp1_desc, exp1_dur, exp2_org,
            exp2_pos, exp2_desc, exp2_dur, skill1, skill2, skill3, language1, language2, interest1,
            interest2, interest3, summary } = this.state;

        const values = {
            firstName, lastName, email, phone, linkedin, github, address, edu1_college, edu1_qualification,
            edu1_desc, edu1_start_year, edu1_end_year, edu2_school,
            edu2_qualification, edu2_desc, edu2_year,
            proj1_title, proj1_link, proj1_desc, proj2_title, proj2_link, proj2_desc, proj3_title,
            proj3_link, proj3_desc, exp1_org, exp1_pos, exp1_desc, exp1_dur, exp2_org,
            exp2_pos, exp2_desc, exp2_dur, skill1, skill2, skill3, language1, language2, interest1,
            interest2, interest3, summary
        };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        value={values}
                    />
                );

            case 2:
                return (
                    <Education
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        value={values}
                    />
                );
            case 3:
                return (
                    <Experience
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        value={values}
                    />
                );
            case 4:
                return (
                    <Skills
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        value={values}
                    />
                );

            case 5:
                return (
                    <Summary
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        value={values}
                        handleChange={this.handleChange}
                    />
                );
            case 6:
                return (
                    <Success firstStep={this.firstStep} />
                );
            default:
                (console.log('Resume Builder App for learning'))
        }
    }
}

export default ResumeInfo
