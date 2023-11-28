const chatMessage = document.querySelector('.chat__message'),
      btn = document.querySelector('.chat__button');
      parentContainerChat = document.querySelector('.chat__container_message'),
      geolocationButton = document.querySelector('#geolocation');
let  websocket = new WebSocket('wss://ws.ifelse.io/');

function renderMessage(data, classTwoMessage = 'accepted'){
    if(data != ''){
        const message = document.createElement('p');
        message.classList.add('message');
        message.classList.add(classTwoMessage);
        message.textContent = data;
        parentContainerChat.appendChild(message);
    }
}

function interactionWithTheServer(messaage){
    websocket.send(messaage);
    if(typeof messaage !== 'object'){
        websocket.onmessage = function(e){
            renderMessage(messaage);
            messaage = '';
        };
    }
}

function renderLink(longitude, latitude){
    const link = document.createElement('a');
    link.classList.add('message', 'sent');
    link.style.borderColor = 'green'
    link.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    link.textContent = 'Geolocation';
    parentContainerChat.appendChild(link);
}

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    if(chatMessage.value){
        renderMessage(chatMessage.value, 'sent');
        interactionWithTheServer(chatMessage.value);
    }
    chatMessage.value ='';
});      

geolocationButton.addEventListener('click', (e) =>{
    e.preventDefault();
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            renderLink(coords.longitude, coords.latitude)
            interactionWithTheServer(coords);
        },
        (error) => {
            console.error('Ошибка при определении местоположения:', error);
        });
    } else {
        console.log('Геолокация не поддерживается вашим браузером');
    }
});
