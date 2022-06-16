var wrapperBars = document.querySelector(".wrapper-bars");
var menu = document.querySelector('.menu-item')
var bars = document.querySelector('.fa-bars')
var body = document.querySelector('body')

menu.style.display = "none"
wrapperBars.style.zIndex = 10000000
wrapperBars.addEventListener('click', (e) => {
    
    var x = document.querySelector(".menu-item")
    menu.style.display = "block"
  
    if (x.classList.contains("isNotVisibleLinks")) {
        menu.style.display = "block"
        wrapperBars.style.zIndex = "1000000000";
        bars.style.fill = "#FCA311";
        console.log(x, "x");
        removeClass(x, "isNotVisibleLinks");
        addClass(x, "isVisibleLinks");
    } else {
        menu.style.display = "none"
        addClass(x, "isNotVisibleLinks");
        removeClass(x, "isVisibleLinks");
        bars.style.fill = "#FFFF";
        
    }

    function addClass(el, className)
    {
        if (el.classList)
            el.classList.add(className)
        else if (!hasClass(el, className))
            el.className += " " + className;
    }

    function removeClass(el, className)
    {
        if (el.classList)
            el.classList.remove(className)
        else if (hasClass(el, className))
        {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
            el.className = el.className.replace(reg, ' ');
        }
    }
    


    // let menu = document.querySelector('.open-menu').addEventListener('wheel', preventScroll, {passive: false});
    // console.log(menu,'menu')
    // function preventScroll(e){
    //     console.log(e, "eee")
    //     e.preventDefault();
    //     e.stopPropagation();
    //     return false;
    // }
})

