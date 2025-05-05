const header = document.getElementById("header");
window.addEventListener("scroll", function () {
    if(this.window.innerWidth > 768){
        if(this.window.scrollY >= 20){
            header.classList.remove("reverseHeaderChange")
            header.classList.add("headerChange")
        } else{
            header.classList.remove("headerChange")
            header.classList.add("reverseHeaderChange")
        }
    }
});

const mobileHeader = document.getElementById("mobileHeader");
const navMobile = document.getElementById("navMobile");
const tab = document.getElementById("navTab");
const close = document.getElementById("navClose");
tab.addEventListener("click",function(){
    mobileHeader.classList.remove("reverseHeaderMobile");
    close.classList.remove("hidden");
    navMobile.classList.remove("max-md:hidden");
    navMobile.classList.remove("reverseNavMobile");
    document.body.classList.add("overflow-y-hidden");
    mobileHeader.classList.add("headerMobile");
    navMobile.classList.add("navMobile");
    document.getElementById("headerNameMobile").classList.add("hidden");
    tab.classList.add("hidden");
})

close.addEventListener("click",function(){
    document.body.classList.remove("overflow-y-hidden");
    mobileHeader.classList.remove("headerMobile");
    document.getElementById("headerNameMobile").classList.remove("hidden");
    tab.classList.remove("hidden");
    navMobile.classList.remove("navMobile");
    mobileHeader.classList.add("reverseHeaderMobile");
    close.classList.add("hidden");
    navMobile.classList.add("max-md:hidden");
    navMobile.classList.add("reverseNavMobile");
})


/*const mobileHeader = document.getElementById("mobileHeader");
const navMobile = document.getElementById("navMobile");
const tab = document.getElementById("navTab");
const close = document.getElementById("navClose");

document.getElementById("homeMobile").onclick = function () {
    mobileHeader.classList.remove("headerMobile");
    document.getElementById("headerNameMobile").classList.remove("hidden");
    tab.classList.remove("hidden");
    mobileHeader.classList.add("reverseHeaderMobile");
    close.classList.add("hidden");
    navMobile.classList.add("max-md:hidden");
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}*/