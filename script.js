document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 55) {
            document.getElementById('navbar').classList.add('fixed-top');
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar').classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current.toLocaleString('en-US');;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 34900, 35000, 1200);
    counter("count2", 15000, 15250, 0);
    counter("count3", 9000, 9270, 0);
    counter("count4", 52000, 52300, 0);
});

$(document).ready(function () {
    $('.header-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        
        // autoplay: true,
        // autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            }
        }
    })

    $('.portfolio-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    $('.logo-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })
});