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
.text_small {
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
hr {
  border-top: 1px solid var(--grey);
  width: 100%;
}

ul {
  list-style: none;
  padding-left: 0;
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
  padding-left: 16px;
}

.bullets li {
  margin-bottom: 8px
}

/* Buttons */

button {
  background-color: var(--white);
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 10px 20px;
  text-align: center;
  box-shadow: var(--level-1);
  transition: background-color 0.3s, color 0.3s;
}

button:hover {
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

`
