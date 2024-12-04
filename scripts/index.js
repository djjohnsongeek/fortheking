document.addEventListener("DOMContentLoaded", () => {
    for (let divElement of document.getElementsByClassName("card-flip"))
    {
        divElement.addEventListener("click", (event) => {
            // flip the card
            let contentDiv = event.currentTarget.firstElementChild;
            const transformClass = "flip-transform";
            contentDiv.classList.toggle(transformClass);
        });
    }
});