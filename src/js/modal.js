const theme = document.querySelector('body')


const x = document.querySelector('#theme-switch-toggle');

const themeS = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',        
  };



console.log(localStorage.getItem('themeS'));

if (localStorage.getItem('themeS') === themeS.DARK ) {
    theme.classList.add('dark-theme');
    x.checked = true;
} else {localStorage.setItem('themeS', themeS.LIGHT);
theme.classList.add('light-theme');
};
  

x.addEventListener('change', changeTheme);


function changeTheme (event) {
    


    if (localStorage.getItem('themeS') === themeS.LIGHT ) {
        localStorage.setItem('themeS', themeS.DARK); 
        theme.classList.toggle('light-theme');
    theme.classList.toggle('dark-theme');
    }
     else {
        localStorage.setItem('themeS', themeS.LIGHT);
        theme.classList.toggle('light-theme');
    theme.classList.toggle('dark-theme');
    }

}

