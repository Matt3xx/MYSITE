document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });
    });

});


const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            // quando entra nello schermo
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition =
                "all 0.8s cubic-bezier(.2,.8,.2,1)";

        } else {

            // quando ESCE dallo schermo
            entry.target.style.opacity = "0";
            entry.target.style.transform = "translateY(60px)";

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.willChange = "transform, opacity";

    observer.observe(section);

});



sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";

    observer.observe(section);

});


const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        nav.style.transform =
            "translateX(-50%) scale(0.96)";
    } else {
        nav.style.transform =
            "translateX(-50%) scale(1)";
    }

});


if (window.innerWidth > 768) {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.transform =
                `rotateX(${-(y - rect.height/2)/20}deg)
                 rotateY(${(x - rect.width/2)/20}deg)
                 scale(1.05)`;

        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });

    });

}


const form = document.querySelector(".contact-form");

form.addEventListener("submit", () => {
    alert("Messaggio inviato correttamente 🚀");
});


//-----------------------------------------------------------------------------------------

