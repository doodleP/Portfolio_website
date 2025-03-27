let index = 0;
        const slides = document.querySelector(".carousel");
        const totalSlides = document.querySelectorAll(".slide").length;

        function nextSlide() {
            index = (index + 1) % totalSlides;
            slides.style.transform = `translateX(-${index * 100}%)`;
        }

        setInterval(nextSlide, 3000); 