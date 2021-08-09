import { Theme } from './theme.js';

const refs = {
input: document.querySelector('#theme-switch-toggle'),
body: document.querySelector('body'),
}
// default bodyTheme = LIGHT
refs.body.classList.add(Theme.LIGHT);

function switchMode () {
  const themeChecked = refs.input.checked;

  if (themeChecked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('class', Theme.DARK); 
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('class', Theme.LIGHT);
  }
};

//To place the button into the right position (checked:true)
function checkTheme () {
if (localStorage.getItem('class') === Theme.DARK) {
refs.body.classList.remove(Theme.LIGHT);
refs.body.classList.add(Theme.DARK);
refs.input.checked = true;
}
};

// event on CHANGE
refs.input.addEventListener('change', switchMode);
checkTheme();

