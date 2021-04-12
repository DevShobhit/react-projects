export default function handleValidation() {
    let fields = this.state;
    let errors = {};
    let formIsValid = true;

    const firstStepRequiredFields = ["firstName", "lastName", "email", "phone", "address"];
    const secondStepRequiredFields = ["edu1_college", "edu1_qualification", "edu1_desc", "edu2_school", "edu2_qualification", "edu2_desc"];
    const thirdStepRequiredFields = ["proj1_title", "proj1_link", "proj1_desc"];
    const fourthStepRequiredFields = ["skill1", "skill2", "skill3", "language1", "language2", "interest1", "interest2", "interest3"];

    //firstName
    if (typeof fields["firstName"] !== "undefined") {
        if (!fields["firstName"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["firstName"] = "Please enter a valid name";
        }
    }

    //lastName
    if (typeof fields["lastName"] !== "undefined" && !fields["lastName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["lastName"] = "Please enter a valid name";
    }

    //Email
    if (typeof fields["email"] !== "undefined") {
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Please enter a valid Email.";
        }
    }

    //Phone
    if (typeof fields["phone"] !== "undefined") {
        if (!fields["phone"].match(/^\d{10}$/)) {
            formIsValid = false;
            errors["phone"] = "Please enter a valid 10 digit number";
        }
    }

    //REquired Fields
    if (fields.step === 1) {
        firstStepRequiredFields.forEach((elem) => {
            if (!fields[elem]) {
                formIsValid = false;
                errors[elem] = "This field is required";
            }
        })
    }
    if (fields.step === 2) {
        secondStepRequiredFields.forEach((elem) => {
            if (!fields[elem]) {
                formIsValid = false;
                errors[elem] = "This field is required";
            }
        })
    }
    if (fields.step === 3) {
        thirdStepRequiredFields.forEach((elem) => {
            if (!fields[elem]) {
                formIsValid = false;
                errors[elem] = "This field is required";
            }
        })
    }
    if (fields.step === 4) {
        fourthStepRequiredFields.forEach((elem) => {
            if (!fields[elem]) {
                formIsValid = false;
                errors[elem] = "This field is required";
            }
        })
    }



    this.setState({ errors: errors });
    return formIsValid;
}


