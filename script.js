const NUMBERS_NUM = 5;
const BIGGEST_NUMBER = 1000;
const NUMBERS_ARRAY = [];

const container = document.createElement('div');
const numbersContainer = document.createElement('div');
const restart = document.createElement('button');

container.style.textAlign = 'center';

restart.innerHTML = 'RESTART';
restart.classList.add('align-self-end')
restart.addEventListener('click', main);


container.appendChild (numbersContainer);
container.appendChild(restart);
document.body.appendChild(container);

main();


function main(){
    numbersContainer.innerHTML = '';

    for (let i = 0; i <= BIGGEST_NUMBER; i++){
        NUMBERS_ARRAY.push(i);
    }
    
    for (let i = 0; i < NUMBERS_NUM; i++){
        const numberDiv = document.createElement('div');
        numberDiv.style.margin = '1rem';

        numberDiv.classList.add('align-self-center');
    
        const content = Math.floor(Math.random() * BIGGEST_NUMBER) + 1;
        const index = NUMBERS_ARRAY.indexOf(content);
        NUMBERS_ARRAY.splice(index, 1); 
    
        numberDiv.innerHTML = `<h1>${content}</h1>`;
    
        numbersContainer.appendChild(numberDiv);
    }
    
    numbersContainer.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'align-content-center', 'flex-wrap');
    numbersContainer.style.height = 'calc(100vh - 3rem)';
      
    
    

}