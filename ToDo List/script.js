const container = document.getElementById("container");
container.classList.add('container')

const leftPart =  document.createElement('div')
container.appendChild(leftPart)

const rightPart = document.createElement('div')
container.appendChild(rightPart)
rightPart.classList.add('rightPart')

const donePart =  document.createElement('div')
rightPart.appendChild(donePart)
donePart.innerHTML = 'Your Done Tasks List    CLOSE/OPEN '
donePart.classList.add('donePart')

const listDonePart =  document.createElement('div')
rightPart.appendChild(listDonePart)
listDonePart.classList.add('listDonePart')

const inputPart = document.createElement('div')
leftPart.appendChild(inputPart)
inputPart.classList.add('inputPart')

const listPart = document.createElement('div')
leftPart.appendChild(listPart)
listPart.classList.add('listPart')

const input = document.createElement('input')
inputPart.appendChild(input)
input.classList.add('input')

const button_add = document.createElement('button')
button_add.classList.add('button_add')
button_add.innerHTML = "Add"
inputPart.appendChild(button_add)

function addTask(){
    if(input.value){
    let element = document.createElement('div');
    listPart.appendChild(element)
    element.classList.add('element')

    const text = document.createElement('div');
    element.appendChild(text)
    text.innerHTML=input.value;
    text.classList.add('text')

    const done = document.createElement('div');
    const doneImg =  document.createElement('img');
    done.appendChild(doneImg)
    doneImg.setAttribute('src','./assets/done.png')
    element.appendChild(done);
    done.classList.add('done')

    const delDiv = document.createElement('div');
    const delImg = document.createElement('img');
    delImg.setAttribute('src','./assets/delete.svg')
    element.appendChild(delDiv)
    delDiv.appendChild(delImg)
    delDiv.classList.add('delDiv')
  
    input.value = "";

    delDiv.onclick = (event) => {
        event.target.parentElement.parentElement.remove()
     }

    done.onclick = (event) => {
        listDonePart.appendChild(event.target.parentElement.parentElement)
        event.target.parentElement.parentElement.lastChild.remove() 
        event.target.parentElement.parentElement.lastChild.remove() 
     }
    }
}


donePart.onclick =  ()=>{
    if(listDonePart.classList.contains('hidden')){
    listDonePart.classList.remove('hidden');
    } else {
        listDonePart.classList.add('hidden') ; 
    }
}


button_add.addEventListener('click', addTask)
