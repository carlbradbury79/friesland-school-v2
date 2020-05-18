import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
  /* Color info needed */
  --light-shade: #f2e8e9;
  --light-accent: #47b9d6;
  --primary: #214f95;
  /* --dark-accent: #6d6689; */
  --dark-accent: #94606b;
  --dark-shade: #16141c;
  --light-shade-alpha: rgba(242, 232, 233, 0.3);
  --light-accent-alpha: #47b9d6;
  --primary-alpha: rgba(33, 79, 149, 0.8);
  --dark-accent-alpha: #6d6689;
  --dark-shade-alpha: #16141c;

  /* Diagonal Divs */
  /* --width: 100vw;
  --full-width: 100vw;
  --angle: 11deg;
  --magic-number: 0.04;
  --skew-padding: calc(var(--width) * var(--magic-number));
  --clip-padding: calc(var(--full-width) * var(--magic-number));

  @media (min-width: 42em) {
    --width: 42rem;
  } */
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

* {
  box-sizing: border-box;
  /* margin: 0;
  padding: 0; */
}

body {
  color: var(--dark-shade);
  font-family: "Lato";
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  /* background: #eee; */
}

a {
  color: var(--primary);
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Cormorant Garamond", serif;
  color: #000;
  /* font-weight: normal; */
    line-height: 1.5;
}

p {
  font-size: 16px;
  color: #3c3c3c;
  font-family: "Open Sans", arial, sans-serif;
  /* line-height: 1.6rem; */
}

p, ul, ol {
    line-height: 1.77777777777777776777777777;
    font-weight: 400;
  }

  ul, ol {
    padding: 1rem;
    margin: 0;
  }

/* Whole Page */
.container {
  /* max-width: 800px; */
  padding: 1rem;
}

/* Governors Page */
.governor-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  
}

.governor-list div {
  flex: 0 33%;
  padding: 20px;
  text-align: center;

  img {
    margin: auto;
  }

  h2, h4 {
    text-align:center;
  }
}

.governor-list div p {
  font-size: 0.9rem;
  text-align:left;
}

/* Vacancies */
#tes-jobs-search {
  max-width: 100%;
  border: none;
  display: block;
  margin: auto;
}

/* Polices */

.policy-container {
}

/* Sixth Form */

/* .sixth-form-content {
  padding: 2rem;
  position: relative;
  margin-top: calc((var(--clip-padding) * -1) - 2px);
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.05) 50%,
      0,
      transparent 100%
    ),
    linear-gradient(-135deg, #0cc, #066);
  background-size: 0.5em 0.5em, 100% 100%;
  padding: calc(
      (var(--clip-padding) * 2) - (var(--clip-padding) - var(--skew-padding))
    )
    0 4em;
  clip-path: polygon(
    0% calc(var(--clip-padding) * 2),
    100% 0%,
    100% 100%,
    0% 100%
  );
  -webkit-clip-path: polygon(
    0% calc(var(--clip-padding) * 2),
    100% 0%,
    100% 100%,
    0% 100%
  );
}

.sixth-form-inner-content {
  max-width: var(--width);
  margin: 0 auto;
  padding: 1.5em;
  position: relative;
}

.sixth-form-inner-content p {
  font-size: 1.25em;
  margin: 0;
  line-height: 1.5;
  color: #fff;
}

.sixth-form-video-container {
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.sixth-form-video {
} */


/* Uniform */
.uniformItem {
  border-bottom:1px solid #c0c0c0;
}

.uniformItem .items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
  
  
}
@media(max-width: 500px) {
  .uniformItem .items {
    flex-direction: column;
  }
}

.uniformItem .items ul {
  list-style: none;
  padding: 0;
  flex: 1;
}

.uniformItem .items ul li .fa-check {
  color: green;
}

.uniformItem .items ul li .fa-times {
  color: red;
}

`
