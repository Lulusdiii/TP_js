function ModifText(letex) {
    const divs = document.getElementsByName("lesdivs");

    for (let i = 0; i < divs.length; i++) {
        divs[i].textContent = letex;
    }
}

ModifText("Hello");