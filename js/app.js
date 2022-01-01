// -----------Show Menu-----------

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => {
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
};
const getCurrentIcon = () => {
    themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';
};

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
};

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})


const eMail = document.getElementById('eMail');

function eMailValue(){
    var value = eMail.value
    console.log(value);
}

function getApi(e) { 
    // e.preventDefault();
    $.ajax({url: "http://localhost:3000/api/cities", success: function(result){
        var a = result.map(item => {
            document.getElementById("textAreaID").innerHTML = "City: " + item.name + "\n" + "Country: " + item.country;
        })
      }});
}


// document.getElementById("demo").innerHTML = newArr;