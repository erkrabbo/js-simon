const NUMBERS_NUM = 5;
const BIGGEST_NUMBER = 1000;
const NUMBERS_ARRAY = [];
const EXTRACTED_NUMBERS = [];
const USER_NUMBERS = [];

const container = document.createElement('div');
const numbersContainer = document.createElement('div');
const restart = document.createElement('button');

container.style.textAlign = 'center';


numbersContainer.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'align-content-center', 'flex-wrap');
numbersContainer.style.height = 'calc(100vh - 3rem)'; 
numbersContainer.innerHTML = '<h1>HAI 30 SECONDI PER MEMORIZZARE I 5 NUMERI CHE TI VERRANNO MOSTRATI, AL TERMINE DEI QUALI SPARIRANNO E TI VERRA\' CHIESTO TRAMITE DEI PROMPT DI INSERIRLI NELLO STESSO ORDINE IN CUI LI VEDI, CLICCA START SE TI SENTI PRONTO AD INIZIARE.</h1>';



restart.innerHTML = 'START';
restart.classList.add('align-self-end')
restart.addEventListener('click', play);


container.appendChild (numbersContainer);
container.appendChild(restart);
document.body.appendChild(container);


function play(){
    numbersContainer.innerHTML = '';

    for (let i = 0; i <= BIGGEST_NUMBER; i++){
        NUMBERS_ARRAY.push(i);
    }
    
    for (let i = 0; i < NUMBERS_NUM; i++){
        const numberDiv = document.createElement('div');
        numberDiv.style.margin = '1rem';
    
        const content = Math.floor(Math.random() * BIGGEST_NUMBER) + 1;
        const index = NUMBERS_ARRAY.indexOf(content);
        NUMBERS_ARRAY.splice(index, 1); 
        EXTRACTED_NUMBERS.push(content);

        numberDiv.innerHTML = `<h2  >${content}</h2   >`;
    
        numbersContainer.appendChild(numberDiv);
    }

    setTimeout(numbersRequest, 1000);
}


function numbersRequest(){
    numbersContainer.innerHTML = '';

    let correct = true;

    for (let i = 0; i < NUMBERS_NUM; i++){
        let input = parseInt(prompt(`Inserisci numero ${i + 1}:`));
        if(input != EXTRACTED_NUMBERS[i]){
            correct = false;
        }
        USER_NUMBERS.push(input);
    }
    correct ? numbersContainer.innerHTML = 'GRANDE BRO' : numbersContainer.innerHTML = 'MI DISP';
}

