
/* Bron: https://www.youtube.com/watch?v=aNDqzlAKmZc */
const hamMenu = document.querySelector('.ham-menu'); /* Verwijst naar html */

const offScreenMenu = document.querySelector('.off-screen-menu'); /* Menu als klik op hamburger menu */

hamMenu.addEventListener('click', () => { 
    hamMenu.classList.toggle('active'); /* Veranderd hamburger knop in kruisje */
    offScreenMenu.classList.toggle('active');
})






/* Bron: https://www.youtube.com/watch?v=XtFlpgaLbZ4&t=66s */
document.querySelectorAll(".carousel").forEach(carousel => { /* Verwijst naar carousel in html */
    const items = carousel.querySelectorAll(".carousel__item"); /* Verwijst naar inhoud carousel (tekst) */
    const buttonHtml = Array.from(items, () => { /* Hierdoor komen de 4 dots */
        return `<span class="carousel__button"></span>`;
    });

    /* Knoppen in de carousel */
    carousel.insertAdjacentHTML("beforeend", ` 
        <div class="carousel__nav">
            ${ buttonHtml.join("") }
        </div>
     `);

    const buttons = carousel.querySelectorAll(".carousel__button");

    buttons[0].classList.add("carousel__button--selected"); /* Maakt de eerste slide actief */

    /* Maakt dots klikbaar */
    buttons.forEach((button, i) => { 
        button.addEventListener("click", () => {
            items.forEach(item => item.classList.remove("carousel__item--selected"));
            buttons.forEach(button => button.classList.remove("carousel__button--selected"));

            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");
        });
    });
});
