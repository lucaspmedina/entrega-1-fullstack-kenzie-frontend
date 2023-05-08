import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {

  /* BACKGROUND COLORS */
  --toastify-color-dark: #212529;
  --bg-clear: #ffffff;
  --bg-dark: #121214;

  /*PRIMARY COLORS*/
  --color-primary: #FF577F;
  --color-primary-focus: #FF427F;
  --color-primary-disable: #59323F;

  /* GREY SCALE */
  --gray-4: #121214;
  --gray-3: #212529;
  --gray-2: #343B41;
  --gray-1: #868E96;
  --gray-0: #F8F9FA;

  /* FEEDBACK PALLET */
  --negative: #E83F5B;
  --sucess: #3FE864;

  /* FONT TYPE */
  --font-title: 16px;
  --font-headline: 12px;

  --font-weight-1: 700;
  --font-weight-2: 600;
  --font-weight-3: 400;

  /* BUTTONS */

  /* INPUTS */

 
}

/* RESET CSS */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}

html,
body {
  scroll-behavior: smooth;
  /* width:100vw; */
  height: 100vh;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Inter', sans-serif;
  background-color: var(--gray-4);
  color: var(--gray-0);
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

ol, ul {
	list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root {
  display: flex;
  flex-direction: column;
  justify-content:  center;
  align-items: center;
  margin-top: 5rem;
  
  height: fit-content;
  /* width: 100vw; */
  overflow-y: scroll;

  @media (max-width: 425px) {
    margin: 0;
  }
}

#root, #__next {
  isolation: isolate;
}
button {
  cursor: pointer;
  border: none;
} 
*{
  scrollbar-width: thin;
  scrollbar-color: var(--gray-3);

}
  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    margin: 6px;
    border-radius: 12px
  }
  &::-webkit-scrollbar:horizontal {
    height: 6px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--gray-1);
    border-radius: 12px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--gray-0);
  }

`;
