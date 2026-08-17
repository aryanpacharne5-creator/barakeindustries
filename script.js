document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       HERO SLIDESHOW
    ========================= */

    const hero = document.querySelector(".hero-bg");

    if (hero) {

        const images = [
            "assets/hero-01.jpg",
            "assets/hero-02.jpg",
            "assets/hero-03.jpg",
            "assets/hero-04.jpg"
        ];

        const dots = [
            ...document.querySelectorAll(".dots button")
        ];

        let current = 0;


        function showSlide(number) {

            current =
                (number + images.length) %
                images.length;

            hero.style.backgroundImage =
                `url("${images[current]}")`;


            dots.forEach((dot, index) => {

                dot.classList.toggle(
                    "active",
                    index === current
                );

            });

        }


        dots.forEach(dot => {

            dot.addEventListener("click", () => {

                showSlide(
                    Number(dot.dataset.slide)
                );

            });

        });


        showSlide(0);


        setInterval(() => {

            showSlide(current + 1);

        }, 5500);

    }


    /* =========================
       MOBILE MENU
    ========================= */

    const menu =
        document.querySelector(".menu");

    const links =
        document.querySelector(".nav-links");


    if (menu) {

        menu.addEventListener("click", () => {

            links.classList.toggle("open");

        });

    }


    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                links.classList.remove("open");

            });

        });

});