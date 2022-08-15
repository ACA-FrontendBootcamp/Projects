const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
//console.log(btnShowModal)

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
}

const openModal = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}


for(let i = 0; i<btnShowModal.length; i++)
btnShowModal[i].addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click',closeModal)

document.addEventListener('keyup' , function(e){
    if(e.key==='Escape'){
        if (!modal.classList.contains('hidden')){
            closeModal();
        }
    }
})