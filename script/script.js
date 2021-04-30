const prev = document.querySelector('.pev');
const next = document.querySelector('.next');
const clientQuote = document.querySelector('.client-quote')
const img = document.querySelector('.img');
const client = document.querySelector('.client-name');
const occupation = document.querySelector('.client-ocupation');

//altera informações dos clientes
const clients = [
    {
        name: 'Tanya Sinclair',
        occupation: 'UX Engineer',
        src: './assets/image-tanya.jpg',
        quote: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`
    },
    {
        name: 'John Tarkpor',
        occupation: 'Junior Front-end Developer',
        src: './assets/image-john.jpg',
        quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`
    }
]

//functions

function prevClient() {
    let client = 0;
    let currentClientName = clientName.texContent;

    clientQuote.textContent = clients[clientIndex].quote;
    imgHolder.setAttribute('src', clients[clientIndex].src);
    clientName.textContent = clients[clientIndex].name;
    occupation.textContent = clients[clientIndex].occupation;

    if(clientName.textContent === currentClientName) return;
    if(clientName.textContent !== currentClientName) clientIndex-1
}


function nextClient(e) {
    let clientIndex = 1;
    let currentClientName = clientName.textContent;

    clientQuote.textContent = clients[clientIndex].quote;
    imgHolder.setAttribute('src', clients[clientIndex].src);
    clientName.textContent = clients[clientIndex].name;
    occupation.textContent = clients[clientIndex].occupation;

    if(clientName.textContent === currentClientName) return;
    if(clientName.textContent !== currentClientName) clientIndex+1
}

// event listeners
prev.addEventListener('click', prevClient);
next.addEventListener('click', nextClient);