$(document).ready(function(){
    const menuBtn = $('.menu-btn')
    const navLink = $('nav a')
    const header = $('header')
    show = false

    menuBtn.click(function(){
        if(!show){
        menuBtn.addClass("open")
        header.addClass("shadow")
        show = true
        }else{
            menuBtn.removeClass("open")
            header.removeClass("shadow")
            show = false
        }
        $("nav").fadeToggle()
    })

    if(window.matchMedia("(max-width: 767px)").matches){
        navLink.click(function(){
            $("nav").fadeOut()
            menuBtn.removeClass("open")
            header.removeClass("shadow")
            show = false
        })
        $(window).scroll(function(){
            if(this.scrollY > 20){
                $("nav").addClass("bg-white")
            }else{
                $("nav").removeClass("bg-white")
            }
        })
    }

    if(window.matchMedia("(min-width: 768px)").matches){
        $(window).scroll(function(){
            if(this.scrollY > 20){
                navLink.addClass("color-white")
            }else{
                navLink.removeClass("color-white")
            }
        })
    }

    if(window.matchMedia("(min-width: 1200px)").matches){
        $(window).scroll(function(){
            if(this.scrollY > 20){
                $("header").addClass("sticky-2")
                navLink.addClass("color-white")
            }else{
                $("header").removeClass("sticky-2")
                navLink.removeClass("color-white")
            }
        })
    }

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $("header").addClass("sticky")
            $(".btn-up").addClass("flex")
        }else{
            $("header").removeClass("sticky")
            $(".btn-up").removeClass("flex")
        }
    })

    $(".btn-up").click(function(){
        window.scroll(0,0)
    })
})




