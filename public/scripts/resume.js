let check = false;
const button = document.getElementById("resumeButton");
const resume = document.getElementById("resume")

button.addEventListener("click", () => {
    if(check === false){
        resume.classList.remove("resumeOut")
        resume.classList.remove("hidden")
        resume.classList.add("resumeIn")
        check = true;
    } else{
        resume.classList.remove("resumeIn")
        resume.classList.add("resumeOut")
        check = false;
    }
})