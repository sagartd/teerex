import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}
html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}
body::-webkit-scrollbar {
  width: 1.5rem;
}
body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}
body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
/* h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;
}
h1 {
  color: black;
  font-size: 6rem;
  font-weight: 900;
}
 h2 {
   color: black;
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
  
  }
h3 {
  font-size: 1.8rem;
  font-weight: 400;
} */
p{
  color: black;
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight:400;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}

.cart-total-item {
      box-shadow: -2px 5px 15px #e32636;
    }
${"" /* resuable code section  */}
.container {
  max-width: 120rem;
  margin: 0 auto;
}
.grid {
  display: grid;
  gap: 9rem;
}
.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}
.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}
.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}
.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}
  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }
     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #5138ee;
    }
   .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: white;
      color: black;
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
/* input, textarea{
    max-width: 50rem;
    color: black;
    padding: 1rem 2.4rem;
    border: black;
    text-transform: capitalize;
    box-shadow: grey;
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: white;
    color: black;
    padding: 1rem 3rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: capitalize;
    font-size: 1.5rem;
    cursor: pointer;
    } */
@media (max-width: 750px) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
  }
   @media (max-width: 450px) {
       html {
      font-size: 50%;
    }
.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }

    
`;
