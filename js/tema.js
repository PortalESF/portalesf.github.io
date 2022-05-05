//  ┌┬┐┬ ┬┌─┐┌┬┐┌─┐
//  │ ├─┤├┤ │││├┤
//  ┴ ┴ ┴└─┘┴ ┴└─┘
// Set theme based on Configurations and Preferences

let darkTheme = localStorage.getItem('darkTheme');
const themeToggle = document.querySelector('#themeButton');
const bodyBackground = document.getElementById('#body');

const enableDark = () => {
	document.body.classList.add('darktheme');
	localStorage.setItem('darkTheme', 'enabled');
	themeToggle.innerHTML = `<i id="themeButton__icon" icon-name="sun"></i>`;
	lucide.createIcons();
};



const disableDark = () => {
	document.body.classList.remove('darktheme');
	localStorage.setItem('darkTheme', null);
	themeToggle.innerHTML = `<i id="themeButton__icon" icon-name="moon"></i>`;
	lucide.createIcons();
};

if (darkTheme === 'enabled') {
	document.body.classList.add('notransition');
	enableDark();
	document.body.classList.remove('notransition');
	document.body.classList.add('light-img');
	document.body.classList.remove('dark-img');
} else {
	disableDark();
	document.body.classList.add('dark-img');
	document.body.classList.remove('light-img');
}

themeToggle.addEventListener('click', () => {
	darkTheme = localStorage.getItem('darkTheme');
	if (darkTheme !== 'enabled') {
		enableDark();
	} else {
		disableDark();
	}
});

if (CONFIG.imageBackground) {
	document.body.classList.add('withImageBackground');
}

if (CONFIG.changeThemeByOS && CONFIG.autoChangeTheme) {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		enableDark();
	} else {
		disableDark();
	}
}
