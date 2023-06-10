

const darkButton=document.getElementById('dark');
const lightButton=document.getElementById('light');

const setColorMode=()=>{
    if(localStorage.getItem('colorMode')=='light'){
        setLightMode();
        lightButton.click();
    }
    else{
        setDarkMode();
        darkButton.click();
    }
};

const checkMode=()=>{
    if(localStorage.getItem('colorMode')==null) {
        if (window.matchMedia("(prefers-color-scheme:light)").matches) {
            lightButton.click();
        } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
            darkButton.click();
        }
    }
};

const setDarkMode=()=>{
    document.querySelector('body').classList='dark';
}
const setLightMode=()=>{
    document.querySelector('body').classList='light';
}

const checkModeChange=()=>{

}
setColorMode();
checkMode();
checkModeChange();

const radioButtons= document.querySelectorAll('.toggle__wrapper input');
for(let i=0;i<radioButtons.length;i++){
    radioButtons[i].addEventListener('click', event=>{
    if(darkButton.checked) {
        document.querySelector('body').classList = 'dark'
        setDarkMode();
    }
    else{
        document.querySelector('body').classList='light';
        setLightMode();
    }

    });
}

const checkModeChange=()=>{
    window.matchMedia("(prefers-color-scheme:light)").addEventListener('change',(event)=>{
        checkMode();
    });
};