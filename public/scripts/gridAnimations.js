let animationCheck = false;
window.addEventListener("scroll", function(){
    if (animationCheck === false){
        if(this.window.scrollY >= 700){
            setTimeout(function() {
                document.getElementById("grid1").classList.add("grid1SlideAnimation");
            }, 1250);
            setTimeout(function() {
                document.getElementById("grid2").classList.add("grid2SlideAnimation");
            }, 850);
            setTimeout(function() {
                document.getElementById("grid3").classList.add("grid3SlideAnimation");
            }, 800);
            setTimeout(function() {
                document.getElementById("grid4").classList.add("grid4SlideAnimation");
            }, 1050);
            setTimeout(function() {
                document.getElementById("grid5").classList.add("grid5SlideAnimation");
            }, 650);
            setTimeout(function() {
                document.getElementById("grid6").classList.add("grid6SlideAnimation");
            }, 0);
            setTimeout(function() {
                document.getElementById("grid7").classList.add("grid7SlideAnimation");
            }, 200);
            setTimeout(function() {
                document.getElementById("grid8").classList.add("grid8SlideAnimation");
            }, 600);
            setTimeout(function() {
                document.getElementById("grid9").classList.add("grid9SlideAnimation");
            }, 500);
            setTimeout(function() {
                document.getElementById("grid10").classList.add("grid10SlideAnimation");
            }, 800);
            animationCheck = true;
        }
    }
})