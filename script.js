var input = document.querySelector('#puta');
var botona = document.querySelector('.botona');
var lista = document.querySelector('.Lista');

botona.addEventListener('click',()=>{
    if (input.value==="") {
        alert('Please Entre your Value');
        return;
    }

    var li = document.createElement('li');
    var litext = document.createTextNode(input.value);
    li.appendChild(litext);
    lista.appendChild(li);

    var button = document.createElement('button');
    var butotext = document.createTextNode('x');
    button.appendChild(butotext);
    li.appendChild(button);

    button.addEventListener('click',(t)=>{
     t.target.parentElement.remove();
    })

    input.focus();
    input.value="";


})