const mongoose = require('mongoose');
require('dotenv').config();

//connectionUrl
const connectionUrl = process.env.MONGO_DB_URL;

//Connecting with database
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('MongoDB Connected…')
}).catch(err => console.log(err));


// Resume Model
const resumeSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true
        }, lastName: {
            type: String,
            trim: true
        }, email: {
            type: String,
            trim: true
        }, phone: {
            type: Number,
            trim: true
        }, linkedin: {
            type: String,
            trim: true
        }, github: {
            type: String,
            trim: true
        }, address: {
            type: String,
            trim: true
        }, edu1_college: {
            type: String,
            trim: true
        }, edu1_qualification: {
            type: String,
            trim: true
        },
        edu1_desc: {
            type: String,
            trim: true
        }, edu1_start_year: {
            type: String,
            trim: true
        }, edu1_end_year: {
            type: String,
            trim: true
        }, edu2_school: {
            type: String,
            trim: true
        },
        edu2_qualification: {
            type: String,
            trim: true
        }, edu2_desc: {
            type: String,
            trim: true
        }, edu2_year: {
            type: String,
            trim: true
        },
        proj1_title: {
            type: String,
            trim: true
        }, proj1_link: {
            type: String,
            trim: true
        }, proj1_desc: {
            type: String,
            trim: true
        }, proj2_title: {
            type: String,
            trim: true
        }, proj2_link: {
            type: String,
            trim: true
        }, proj2_desc: {
            type: String,
            trim: true
        }, proj3_title: {
            type: String,
            trim: true
        },
        proj3_link: {
            type: String,
            trim: true
        }, proj3_desc: {
            type: String,
            trim: true
        }, exp1_org: {
            type: String,
            trim: true
        }, exp1_pos: {
            type: String,
            trim: true
        }, exp1_desc: {
            type: String,
            trim: true
        }, exp1_dur: {
            type: String,
            trim: true
        }, exp2_org: {
            type: String,
            trim: true
        },
        exp2_pos: {
            type: String,
            trim: true
        }, exp2_desc: {
            type: String,
            trim: true
        }, exp2_dur: {
            type: String,
            trim: true
        }, skill1: {
            type: String,
            trim: true
        }, skill2: {
            type: String,
            trim: true
        }, skill3: {
            type: String,
            trim: true
        }, language1: {
            type: String,
            trim: true
        }, language2: {
            type: String,
            trim: true
        }, interest1: {
            type: String,
            trim: true
        },
        interest2: {
            type: String,
            trim: true
        }, interest3: {
            type: String,
            trim: true
        }, summary: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume
