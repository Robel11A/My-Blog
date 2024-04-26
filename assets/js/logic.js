let stackmode = JSON.parse(localStorage.getItem("stackmode")) || false;

const ToggleDark = function() {
    const container = document.body; 
    stackmode = !stackmode; 
    if(stackmode) {
        container.classList.add("dark-mode");
    } else {
        container.classList.remove("dark-mode");
    }
    localStorage.setItem("stackmode", stackmode); 
}


document.getElementById("modeToggle").addEventListener("click", ToggleDark);


const initDarkMode = function() {
    if(stackmode) {
        document.body.classList.add("dark-mode");
    }
}
initDarkMode();