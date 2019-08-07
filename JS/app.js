let addNumber = () => {
    event.preventDefault();

    document.querySelector('.five').innerText = document.querySelector('.football').innerText;
}

let moveNumber = () => {

    event.preventDefault();

    document.querySelector('.five').addEventListener('click', addNumber);
}