const addButton = document.querySelector('.add button');
const inputDiv = document.querySelector('section .input');
const players = document.querySelector('#players ul');
const input = document.querySelector('section .input #input');

addButton.addEventListener('click', () => {
    input.style.display = 'inline';
    // let input = document.createElement("input");
    // input.setAttribute("type", "text");
    // input.setAttribute("id", "input");
    // input.setAttribute("placeholder", "name");
    // inputDiv.appendChild(input);
});

let playersList = [];

input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        event.preventDefault();
        // Cancel the default action, if needed
        // Trigger the button element with a click
        playersList.push(input.value);
        input.style.display = 'none';
        input.value = '';
        let nameDiv = document.createElement("div");
        let name = document.createElement("li");
        let x = document.createElement("span");
        x.setAttribute('name', `${playersList[playersList.length - 1]}`);
        nameDiv.setAttribute('name', `${playersList[playersList.length - 1]}`);
        x.innerHTML = '<svg height="365.696pt" viewBox="0 0 365.696 365.696" width="365.696pt" xmlns="http://www.w3.org/2000/svg"><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" /></svg>';
        x.setAttribute('id', 'delete');
        name.innerText = playersList[playersList.length - 1];
        nameDiv.appendChild(name);
        nameDiv.appendChild(x);
        players.appendChild(nameDiv);


    }
});

setInterval(() => {
    const delPlayer = document.querySelectorAll('#delete');
    delPlayer.forEach(player => {
        player.addEventListener('click', (e) => {
            const elem = e.path[1];
            attriName = elem.getAttribute('name');
            elem.remove();
            let index = playersList.indexOf(`${attriName}`);
            console.log(index);
            playersList.splice(`index`, 1);
            return;
            console.log(playersList);
        });
    });

}, 500);;
