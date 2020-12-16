import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
  /* Colors */
  --red: red;
  --black: #16141c;
  --blue: #214f95;
  --lightBlue: #0A84A2;
  --green: green;
  --white: #fff;
  --light-grey: #f2f4f6;
  --lightest-grey: #fafbfc;
  --grey: #bfbfbf;

  /* Alphas */
  --light-shade-alpha: rgba(242, 232, 233, 0.3);
  --light-accent-alpha: #47b9d6;
  --primary-alpha: rgba(33, 79, 149, 0.8);
  --dark-accent-alpha: #6d6689;
  --dark-shade-alpha: #16141c;

  /* Color Intentions */
  --danger: var(--red);
  --success: var(--green);
  --textColor: var(--black);
  --primary: var(--blue);
  --background: var(--white);
  --lineColor: var(--light-grey);
  --cardBg: var(--white);
  --pdfIcon: var(--primary);
  --bigButton: var(--lightBlue);
  --highlight-text: var(--lightBlue);

  /* Type */
  --headingFont: 'Cormorant Garamond', serif;
  --bodyFont: 'Lato', sans-serif;
  --h1Size: 3.052em;
  --h2Size: 2.441em;
  --h3Size: 1.953em;
  --h4Size: 1.563em;
  --h5Size: 1.25em;
  --smallText: 0.8em;

  /* Elevation */
  --level-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --level-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --level-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --level-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);

  /* Positioning */
  --containerPadding: 2.5%;
  --headerHeight: 3rem;
  --borderRadius: 10px;
}

html {
  font-size: 100%;
} /*16px*/

* {
  box-sizing: border-box;
  /* margin: 0;
  padding: 0; */
}

body {
  font-family: var(--bodyFont);
  font-weight: 400;
  line-height: 1.65;
  background-color: var(--lightest-grey);
  margin:0;
}

p {
  margin-bottom: 1.15rem;
  /* max-width: 40em; */
}



h1,
h2,
h3,
h4,
h5 {
  margin: 2.75rem 0 1.05rem;
  font-family: var(--headingFont);
  font-weight: 400;
  line-height: 1.15;
}

h1 {
  margin-top: 0;
  font-size: var(--h1Size);
}

h2 {
  font-size: var(--h2Size);
}

h3 {
  font-size: var(--h3Size);
}

h4 {
  font-size: var(--h4Size);
}

h5 {
  font-size: var(--h5Size);
}

small,
.text-small {
  font-size: var(--smallText);
}

a {
  text-decoration: none;
  color: var(--textColor);
}

p a,
blockquote a {
  text-decoration: none;
  color: var(--textColor);
  border-bottom: 2px solid var(--primary);
}

blockquote {
  margin: 10px;
  padding: 2em;
  background: var(--white);
  box-shadow: var(--level-4);
}

.highlightBgBlue {
  background-color: var(--lightBlue);
  color:var(--white)
}

.highlight {
font-weight: bold;
border-bottom: 2px dotted var(--blue);
}
hr {
  border-top: 1px solid var(--grey);
  width: 100%;
}

ul {
  list-style: none;
  padding-left: 0;
}

table {
  width: 100%;
}

thead tr {
  text-align: left;
}

td {
  border: 1px solid var(--grey);
}

/* Lists of links (e.g. Policies) */
.listLinks ul li {
  margin-bottom: 0;

}


 .listLinks ul li a {
  display: inline-block;
  width: 100%;
  padding: 5px;
  text-decoration: none;
  /* color: var(--textColor);
  background-color: var(--white); */
  color: var(--white);
  background-color: var(--primary);
  margin-bottom:5px;
}

/* .listLinks ul li a i {
  color: var(--pdfIcon);
} */

 .listLinks ul li a:hover {
  box-shadow: var(--level-1);
}

/* Bullet List */
.bullets {
  list-style: square;
  padding-left: 32px;
  margin-bottom: 2rem;
}

.bullets li {
  margin-bottom: 8px
}

.bullets li a {
  text-decoration: none;
  color: var(--textColor);
  border-bottom: 2px solid var(--primary);
}

.list li {
  margin-bottom:0.5rem;
}

.small-list {
  font-size: var(--smallText);
}

/* Buttons */

button, .button {
  background-color: var(--white);
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 10px 20px;
  text-align: center;
  box-shadow: var(--level-1);
  transition: background-color 0.3s, color 0.3s;
  margin: auto;
}

button:hover, .button:hover {
  background-color: var(--primary);
  color: var(--white);
  text-decoration: none;
  cursor: pointer;
  box-shadow: var(--level-2);
}

/* Big Buttons */

.bigButton {
 font-size: var(--h2Size);
 padding:1rem;
 border-radius: 5px;
}

.bigButton:hover {
  background-color: var(--bigButton);
}

/* Components */

.flex {
  --justifyContent: space-between;
  display: flex;
  justify-content: var(--justifyContent);
}

.grid {
  --gridCols: 2;
  display: grid;
  grid-template-columns: repeat(var(--gridCols), 1fr);
}

.cols-3 {
  --gridCols: 3;
}

.card {
  padding: 2em;
  background: var(--cardBg);
  box-shadow: var(--level-3);
  border-radius: var(--borderRadius);
}

/* First item */
.card > *:first-child {
  margin-top: 0;
}


/* Information Boxes */
.important {
  padding: 1rem;
  font-weight: 600;
  border: 1px solid var(--grey);
}

.important::before {
  content: "Important: ";
  color: var(--danger);
}

.new {
  padding: 1rem;
  font-weight: 600;
  border: 1px solid var(--green);
}

/* Specific Classes */
/* Uniform */
.uniformItem {
  border-bottom: 1px solid #c0c0c0;
}

.uniformItem div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
}
@media (max-width: 500px) {
  .uniformItem div {
    flex-direction: column;
  }
}

.uniformItem div ul {
  list-style: none;
  padding: 0;
  flex: 1;
}

.uniformItem div ul li .fa-check {
  color: var(--success);
}

.uniformItem div ul li .fa-times {
  color: var(--danger);
}

/* Catering Five Stars */
.fiveStar {
  width: 100%;
  border: 2px solid var(--black);

}

.fiveStar div:nth-child(1) {
  font-weight: bold;
  font-size: var(--h3Size);
  text-transform:uppercase;
  text-align: center;
  background-color:#A7C700;
}

.fiveStar div:nth-child(2) {
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  padding: 20px 0;
  background-color:#A7C700;
}

.fiveStar div:nth-child(2) span{
  font-size: var(--h4Size);
  border: 1px solid var(--black);
  background-color: var(--white);
  border-radius: 25px;
  padding: 5px 20px;
  font-weight:bold;
}

.fiveStar div:nth-child(2) .hygieneRating{
  border: 1px solid var(--black);
  border-radius: 25px;
  background-color: var(--black);
  color: var(--white);
  font-weight:bold;
}

.fiveStar div:nth-child(3){
  font-weight: bold;
  font-size: var(--h3Size);
  text-transform:uppercase;
  text-align: center;
  background-color: var(--black);
  color: var(--white)

}

.fa-thumbs-down {
  color: red;
}

.fa-check {
color: var(--success);
}

.fa-times {
  color: var(--danger);
}

/* Governors */

.governors {
  display: grid;
  grid-gap: 1rem;
  padding: 0.5rem;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-row-gap: 2rem;
}

.governors div h3 {
  margin-top: 0;
}

.governors h4 {
  margin-top: 0;
  font-size: var(--bodyFont)
}

.governors > div {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap:1rem;
  padding: 1em;
  background: var(--cardBg);
  box-shadow: var(--level-3);
  border-radius: var(--borderRadius);
}

@media(max-width: 500px) {
  .governors > div {
    grid-template-columns: 1fr;
  }
}

.governors img {
  border-radius:50%;
  width:auto;
}

/* KS3 Timetable */

.ks3-timetable {

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  max-width: 400px;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

[data-ks3-amount] {
  display: grid;
  place-items: center;
  text-align: center;
}

[data-ks3-amount="2"] {
  grid-template-columns: repeat(2, 1fr);
}

[data-ks3-amount="3"] {
  grid-template-columns: repeat(3, 1fr);
}

[data-ks3-amount="4"] {
  grid-template-columns: repeat(4, 1fr);
}

.ks3-timetable > [data-ks3-amount] > div {
  height: 80px;
  width: 80px;
  padding: 5px;
  border: 2px solid var(--lightBlue);
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 0.7rem;
  font-weight: 600;
}

.ks3-timetable  div span{
  font-size:1.2rem;
  font-weight: 800;

}

.ks3-timetable > [data-ks3-amount] .core-subject {
  border-color: var(--blue);
}

/* Sixth Form */
/* .sixth-form {
  display: grid;
  grid-gap: 1rem;
  padding: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-row-gap: 2rem;
}

.sixth-form div {
  padding: 1em;
  background: var(--cardBg);
  box-shadow: var(--level-3);
  border-radius: var(--borderRadius);
  font-size:var(--h2Size)
} */

.internal-links {
  list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 1rem;
}

.internal-links li { 
  margin: 7px 3px;

}


.internal-links li a {
  padding: 5px;
  background-color: var(--primary);
  color: #fff;
  font-size: 0.8rem;
}

.internal-links li a:hover{ 
  
  text-decoration: none;
  cursor: pointer;
}


#222 {
  
}

a.anchor {
display: block;
position: relative;
top: -100px;
visibility: hidden;
}


/* #222::before {
  display: block;
  content: " ";
  margin-top: -180px;
  height: 180px;
  visibility: hidden;
  pointer-events:none;
}  */

.gCalendar {
  position: relative; padding-bottom: 75%; height: 0; overflow: hidden;

}


.gCalendar iframe {
  
 position: absolute; top:0; left: 0; width: 100%; height: 100%;
  
 }


 .galleryContainer{
  max-width: 750px;
  margin: auto;
  padding: 1rem;
 }

 #current img, .imgs img{
  width: 100%;
 }

 .imgs img {
  cursor: pointer;
 }

.imgs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  
}

/* YouTube */
.youTubeContainer {
    position: relative;
     width: 100%;
     height: 0;
     padding-bottom: 56.25%;
 }
 .youTubeContainer iframe {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
 }


.sixthFormOpenEve {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
    justify-content: center;
    gap:2rem;
    margin-bottom:4rem;
    text-align:center;


}

@media (max-width: 600px) {
  .sixthFormOpenEve{
    flex-direction: column;
    margin-bottom: 12rem;
  }
}

@media (max-width: 500px) {
  .sixthFormOpenEve{
    flex-direction: column;
    margin-bottom: 8rem;
  }
}

@media (max-width: 400px) {
  .sixthFormOpenEve{
    flex-direction: column;
    margin-bottom: 4rem;
  }
}

.sixthFormOpenEve > div {
  flex: 1 1 150px; /*  No stretching: */
    margin: 5px;
}

.sixthFormOpenEve h2 {
  margin-top:0;
  font-weight:bold;
}

.sixthFormOpenEve > div > p:nth-child(2){
font-weight: bold;}


.sixthFormProspectus {
  text-align:center;
  margin-bottom: 2rem;
}

.downloadApplication {
  text-align:center;
  font-size: 1.1rem;
  margin-bottom: 4rem;
}

.sfH2 {
  text-align:center;
  font-weight: bold;
  margin-bottom:2rem;
}

.mb2 {
  margin-bottom:2rem;
}

.center {
  text-align:center;
}

/* PSHE */

.pshe-term {
  display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    height: auto;
}

.pshe-term div {
  border: 1px solid gray;
  border-radius: 10px;
  padding: 1rem;
  
}

.pshe-term h4 {
  margin:0;
  text-align: center;
  font-family: var(--bodyFont);
  font-size: var(--h5Size);
}

.pshe-term span {
  margin: auto;
  display: flex;
  align-items:center;
  justify-content:center;
  background-color: var(--primary);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  color: white;
  text-align: center;
  font-size:var(--h4Size);
  
  
  
}

.pshe-term span::before {
  content: 'Y';
}


.headteacher {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.headteacher div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.headteacher div span:nth-child(1){
  font-weight: bold;
}

.headteacher div span:nth-child(2){
  font-size: var(--smallText);
}

`
