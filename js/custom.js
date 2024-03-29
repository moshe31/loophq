// Price Section js

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Video popup

$('document').ready(function() {
    $('#banner .play-btn').click(function() {
        $('.video-popup').fadeIn();
        $('video')[0].play();

    });

    $('.video-popup .close-btn').click(function() {
        $('.video-popup').fadeOut();
        setTimeout(function() {
            $('video')[0].pause();
            $('video')[0].currentTime = 0;
        }, 1000);
    });
});

// mobile menu btn jquery starts here
$(".menu-btn").click(function() {
    $(".navbar-wrapper").toggleClass("navbarshow");
});
$('.navbar-wrapper').click(function() {
    $(".navbar-wrapper").removeClass("navbarshow");
    });
// mobile menu btn jquery ends here

// Gsap Animations 

gsap.from(".herolarge-image", {
    opacity: 0,
    delay: 2
})
gsap.from(".gsapanimate-up", {
    stagger: 0.5,
    duration: 1.5,
    opacity: 0
})
gsap.from(".btn-wrapper a", {
    scale: 0.5,
    opacity: 0,
    delay: 1.5,
    duration: 2,
    ease: Elastic.easeOut
})
gsap.from(".heroimage-4", {
    rotate: -360,
    duration: 1,
    scale: 0,
})
gsap.from(".heroimage-3", {
    opacity: 0,
    duration: 0.5,
    x: 50,
    y: -50,
    scale: 0,
    delay: 0.3,
})
gsap.from(".heroimage-2", {
    opacity: 0,
    duration: 0.5,
    x: 50,
    y: -50,
    scale: 0,
    delay: 0.6,
})
gsap.from(".heroimage-1", {
    delay: 1,
    scale: 0,
    rotate: 360
})

// Scroll Trigger
gsap.registerPlugin(ScrollTrigger);
gsap.from(".scrolltrigger-animation1", {
    scrollTrigger: {
        trigger: ".scrolltrigger-animation1",
        start: "20px 100%",
        end: "top 20%",
        scrub: 1,
    },
    y: 100,
    opacity: 0,
    scale: 0.5,
    duration: 1
})
gsap.from(".apps-video img", {
    scrollTrigger: {
        trigger: ".apps-video img",
        start: "20px 150%",
        end: "top 80%",
        scrub: 1,
    },
    y: 100,
    scale: 0.5,
    duration: 1
})
gsap.from(".about-video video", {
    scrollTrigger: {
        trigger: ".about-video video",
        start: "20px 150%",
        end: "top 80%",
        scrub: 1,
        delay: 1,
    },
    y: 200,
    scale: 0.5,
    duration: 1
})
gsap.from(".scrolltrigger-animation2", {
    scrollTrigger: {
        trigger: ".scrolltrigger-animation2",
        start: "20px 100%",
        end: "top 20%",
        scrub: 1,
    },
    y: 100,
    opacity: 0,
    scale: 0.5,
    duration: 1
})
gsap.from(".productivity-inner .image img", {
    scrollTrigger: {
        trigger: ".productivity-inner .image img",
        start: "20px 80%",
        end: "top 20%",
        scrub: 1,
    },
    y: -100,
    opacity: 0,
    scale: 0,
    duration: 0.5
})
gsap.from(".scrolltrigger-animation3", {
    scrollTrigger: {
        trigger: ".scrolltrigger-animation3",
        start: "20px 80%",
        end: "top 0%",
        scrub: 1,
    },
    opacity: 0,
    scale: 0.5,
    transformOrigin: "center center",
    duration: 1,
    ease: Elastic.easeOut.config(1, 0.5),
})
gsap.from(".images .image", {
    scrollTrigger: {
        trigger: ".images .image",
        toggleActions: "play pause play reverse",
        start: "20px 80%",
        end: "top 0%",
    },
    opacity: 0,
    scale: 0,
    transformOrigin: "center center",
    duration: 1,
    ease: Elastic.easeOut.config(1, 0.5),
    stagger: 0.3
})
gsap.from(".upper-sec .left-sec", {
    scrollTrigger: {
        trigger: ".upper-sec .left-sec",
        toggleActions: "play pause play reverse",
        start: "20px 80%",
        end: "top 0%",
    },
    opacity: 0,
    y: 100,
    duration: 1
})
gsap.from(".optimize .video-loop img", {
    scrollTrigger: {
        trigger: ".optimize .video-loop img",
        toggleActions: "play pause play reverse",
        start: "20px 80%",
        end: "top 0%",
    },
    opacity: 0,
    scale: 0.5,
    y: 100,
    stagger: 0.3,
    delay: 1
})
gsap.from(".optimize .list ul li", {
    scrollTrigger: {
        trigger: ".optimize .list ul li",
        toggleActions: "play pause play reverse",
        start: "20px 80%",
        end: "top 0%",
    },
    opacity: 0,
    scale: 0.5,
    y: -100,
    stagger: 0.3,
})
gsap.from(".optimize .container > h6", {
    scrollTrigger: {
        trigger: ".optimize .list ul li",
        toggleActions: "play pause play reverse",
        start: "20px 80%",
        end: "top 0%",
    },
    opacity: 0,
    x: -100,
    duration: 1
})
gsap.from(".integrate-inner .right-sec", {
    scrollTrigger: {
        trigger: ".integrate-inner .right-sec",
        toggleActions: "play pause play reverse",
        start: "20px 80%",
        end: "top 0%",
    },
    opacity: 0,
    y: 100,
    duration: 0.5,
    delay: 1
})
gsap.from(".integrate-inner .left-sec", {
    scrollTrigger: {
        trigger: ".integrate-inner .left-sec",
        toggleActions: "play pause play reverse",
        start: "20px 80%",
        end: "top 0%",
    },
    opacity: 0,
    scale: 0,
    duration: 0.3
})
gsap.from(".on-point-inner .video-loop img", {
    scrollTrigger: {
        trigger: ".on-point-inner .video-loop img",
        toggleActions: "play pause play reverse",
        start: "20px 80%",
        end: "top 0%",
    },
    opacity: 0,
    scale: 0,
    duration: 0.3,
    stagger: 1
})

gsap.from(".on-point-inner .left-sec", {
    scrollTrigger: {
        trigger: ".on-point-inner .left-sec",
        toggleActions: "play pause play reverse",
        start: "20px 80%",
        end: "top 0%",
    },
    opacity: 0,
    y: 100,
    duration: 0.5,
    delay: 1
})
gsap.from(".scrolltrigger-animation4", {
    scrollTrigger: {
        trigger: ".scrolltrigger-animation4",
        toggleActions: "play pause play reverse",
        start: "20px 80%",
        end: "top 50%",
        scrub: true
    },
    opacity: 0,
    scale: 0,
    y: 100,
    duration: 1,
})
gsap.from(".price-packages-tabs .tablinks", {
    scrollTrigger: {
        trigger: ".price-packages-tabs .tablinks",
        toggleActions: "play pause play reverse",
        start: "20px 120%",
        end: "top 0%",
    },
    opacity: 0,
    scale: 0,
    duration: 0.3,
    stagger: 0.3
})
gsap.from(".price-packages-tabs", {
    scrollTrigger: {
        trigger: ".price-packages-tabs .tabcontent",
        toggleActions: "play pause play reverse",
        start: "20px 120%",
        end: "top 0%",
    },
    opacity: 0,
    scale: 0,
    y: 100,
    duration: 1,
})

document.addEventListener("mousemove", function(event) {
    var width = window.innerWidth,
        height = window.innerHeight,
        positionX = (event.clientX / width) - 0.55,
        positionY = (event.clientY / width) - 0.55;
    gsap.to(".integrate .integrate-inner .left-sec video", {
        rotationY: positionX * 50,
        rotationX: positionY * 50,
        ease: "none"
    });
    gsap.to(".on-point-inner .right-sec .video-loop img", {
        rotationY: positionX * 50,
        rotationX: positionY * 50,
        ease: "none"
    });
})