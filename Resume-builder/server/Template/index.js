module.exports = ({ firstName, lastName, email, phone, linkedin, github, address, edu1_college, edu1_qualification,
    edu1_desc, edu1_start_year, edu1_end_year, edu2_school,
    edu2_qualification, edu2_desc, edu2_year,
    proj1_title, proj1_link, proj1_desc, proj2_title, proj2_link, proj2_desc, proj3_title,
    proj3_link, proj3_desc, exp1_org, exp1_pos, exp1_desc, exp1_dur, exp2_org,
    exp2_pos, exp2_desc, exp2_dur, skill1, skill2, skill3, language1, language2, interest1,
    interest2, interest3, summary }) => {
    return `<!doctype html>
  <html>
  
  <head>
      <style>
          @page {
              size: letter portrait;
              margin: 0;
          }
  
          :root {
              --page-width: 8.5in;
              --page-height: 11in;
              --main-width: 6.4in;
              --sidebar-width: calc(var(--page-width) - var(--main-width));
          }
          html{
            zoom: 1.4;
        }   

  
          body {
              width: var(--page-width);
              height: var(--page-height);
              margin: 0;
              font-family: "Open Sans", sans-serif;
              font-weight: 300;
              line-height: 1.3;
              color: #444;
              hyphens: auto;
          }
  
          .main {
              float: left;
              width: var(--main-width);
              padding: 0.25in 0.25in 0 0.25in;
              font-size: 8pt;
          }
  
          .right {
              float: right;
              position: absolute;
              width: var(--sidebar-width);
              height: 100%;
              top: 0;
              right: 0;
              padding: 0.6in .2in;
              background-color: #f2f2f2;
              font-size: 9pt;
          }
  
          .title {
              position: relative;
              left: 0.55in;
              margin-bottom: 0.2in;
              line-height: 1.2;
              text-align: center;
          }
  
          .summary {
              margin-bottom: 0.3in;
              text-align: center;
          }
  
          .experience,
          .education {
              margin-bottom: .2rem;
          }
  
          .edu-title {
              margin-top: .3in;
          }
  
          .exp-heading,
          .edu-title {
              text-transform: uppercase;
              padding-left: .2rem;
          }
  
          .exp,
          .proj,
          .edu {
              margin-bottom: .3rem;
              padding: .1rem 1rem;
          }
  
          .exp-title,
          .proj-title,
          .edu-ins {
              font-weight: bold;
              font-size: 9pt;
          }
  
          .edu-ins {
              display: inline-block;
              margin-right: .2rem;
          }
  
          .exp-org,
          .edu-qual {
              font-size: 8pt;
              margin-right: .3rem;
          }
  
          .exp-dur,
          .edu-dur {
              font-size: 7pt;
          }
  
          .exp-desc,
          .proj-desc,
          .edu-desc {
              margin-top: .07in;
          }
  
          .proj-link {
              font-size: 8pt;
          }
  
  
          .personal {
              margin-top: 2rem;
          }
  
          .pers,
          .skills,
          .langs,
          .ints {
              margin-bottom: .18in;
          }
  
          .pers-heading,
          .lang-heading,
          .int-heading,
          .skill-heading {
              text-transform: uppercase;
              font-size: 10pt;
              margin-bottom: .16in;
          }
  
          .pers-sub-heading,
          .skill,
          .lang,
          .int {
              font-size: 9.4pt;
              margin-left: .07in;
          }
  
          .skill,
          .lang,
          .int {
              margin-bottom: .09in;
          }
  
          .pers-detail {
              margin-top: .02in;
              margin-left: .07in;
          }
      </style>
  </head>
  
  <body lang="en">
      <section class="main">
          <header class="title">
              <h1>${firstName + " " + lastName}</h1>
          </header>
          <section class='summary'>
              ${summary}
          </section>
          <section class='experience'>
              <h2 class='exp-heading'>Projects and Experiences</h2>
              <div class='exp'>
                  <h3 class='exp-title'>${exp1_pos}</h3>
                  <span class='exp-org'>${exp1_org}</span>
                  <span class='exp-dur'>${exp1_dur}</span>
                  <div class='exp-desc'>
                      ${exp1_desc}
                  </div>
              </div>
  
              <div class='exp'>
                  <h3 class='exp-title'>${exp2_pos}</h3>
                  <span class='exp-org'>${exp2_org}</span>
                  <span class='exp-dur'>${exp2_dur}</span>
                  <div class='exp-desc'>
                      ${exp2_desc}
                  </div>
              </div>
  
              <div class='proj'>
                  <h3 class='proj-title'>${proj1_title}</h3>
                  <span class='proj-link'>${proj1_link}</span>
                  <div class='proj-desc'>
                      ${proj1_desc}
                  </div>
              </div>
  
              <div class='proj'>
                  <h3 class='proj-title'>${proj2_title}</h3>
                  <span class='proj-link'>${proj2_link}</span>
                  <div class='proj-desc'>
                      ${proj2_desc}
                  </div>
              </div>
  
              <div class='proj'>
                  <h3 class='proj-title'>${proj3_title}</h3>
                  <span class='proj-link'>${proj3_link}</span>
                  <div class='proj-desc'>
                      ${proj3_desc}
                  </div>
              </div>
          </section>
  
          <section class='education'>
              <h2 class='edu-title'>Education</h2>
              <div class='edu'>
                  <h3 class='edu-ins'>${edu1_college}</h3>
                  <span class='edu-dur'>${"( " + edu1_start_year + "-" + edu1_end_year + ")"}</span>
                  <div class='edu-qual'>${edu1_qualification}</div>
                  <div class='edu-desc'>
                      ${edu1_desc}
                  </div>
              </div>
  
              <div class='edu'>
                  <h3 class='edu-ins'>${edu2_school}</h3>
                  <span class='edu-dur'>${edu2_year}</span>
                  <div class='edu-qual'>${edu2_qualification}</div>
                  <div class='edu-desc'>
                      ${edu2_desc} </div>
              </div>
          </section>
          <aside class='right'>
              <div class='personal'>
                  <div class='pers-heading'> Personal Details</div>
                  <div class='pers'>
                      <div class='pers-sub-heading'>Address</div>
                      <div class='pers-detail'>${address}</div>
                  </div>
                  <div class='pers'>
                      <div class='pers-sub-heading'>Email</div>
                      <div class='pers-detail'>${email}</div>
                  </div>
                  <div class='pers'>
                      <div class='pers-sub-heading'>Phone</div>
                      <div class='pers-detail'>${phone}</div>
                  </div>
                  <div class='pers'>
                      <div class='pers-sub-heading'>Github</div>
                      <div class='pers-detail'>${github}</div>
                  </div>
                  <div class='pers'>
                      <div class='pers-sub-heading'>Linkedin</div>
                      <div class='pers-detail'>${linkedin}</div>
                  </div>
              </div>
  
              <div class='skills'>
                  <div class='skill-heading'>Skills</div>
                  <div class='skill'> ${skill1}</div>
                  <div class='skill'>${skill2}</div>
                  <div class='skill'>${skill3}</div>
              </div>
  
  
              <div class='langs'>
                  <div class='lang-heading'>Languages</div>
                  <div class='lang'>${language1}</div>
                  <div class='lang'>${language2}</div>
              </div>
  
              <div class='ints'>
                  <div class='int-heading'>Interests</div>
                  <div class='int'>${interest1}</div>
                  <div class='int'>${interest2}</div>
                  <div class='int'>${interest3}</div>
              </div>
  
          </aside>
  </body>
  </html>`;
}