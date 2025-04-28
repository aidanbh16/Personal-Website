let contactAnimationCheck = false;
window.addEventListener("scroll", function(){
    if (contactAnimationCheck === false){
        if(this.window.scrollY >= 2100){
            setTimeout(function() {
                document.getElementById("grid13").classList.add("grid13SlideAnimation");
            }, 1200);
            setTimeout(function() {
                document.getElementById("grid16").classList.add("grid16SlideAnimation");
            }, 1200);
            setTimeout(function() {
                document.getElementById("grid11").classList.add("grid11SlideAnimation");
            }, 800);
            setTimeout(function() {
                document.getElementById("grid14").classList.add("grid14SlideAnimation");
            }, 600);
            setTimeout(function() {
                document.getElementById("grid15").classList.add("grid15SlideAnimation");
            }, 400);
            setTimeout(function() {
                document.getElementById("message").classList.add("textAreaSlideAnimation");
            }, 550);
            setTimeout(function() {
                document.getElementById("grid17").classList.add("grid17SlideAnimation");
            }, 200);
            contactAnimationCheck = true;
        }
    }
})