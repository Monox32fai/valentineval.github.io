const messages = [
    "Por q le das q no maldita",
    "desgraciada para",
    "ya caramba dale al sí",
    "Ya pue :(",
    "Piénsalo bien",
    "Me voy a poner triste",
    "Me voy a poner muy triste",
    "Me voy a poner muy muy muy triste..",
    "Está bien, ya entendí..",
    "Mentira! DALE AL SÍ O TE DESPELLEJO ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes/yes_page.html";
}