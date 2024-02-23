const context = document.querySelector(".context-menu") ;

// menu function ----------------------

function menu (show = true) {
    context.style.display = show ? "flex" : "none" ;
}

window.addEventListener("contextmenu",(e) => {
    e.preventDefault() ;
    menu() ;
    const topPx = e.y  + context.offsetHeight > window.innerHeight ? window.innerHeight - context.offsetHeight : e.y;
    const leftPx = e.x + context.offsetWidth > window.innerWidth ? window.innerWidth - context.offsetWidth : e.x ;

    context.style.top = topPx + "px" ;
    context.style.left = leftPx + "px" ;
})


window.addEventListener("click",(e) => {
   
    menu(false) ;
})