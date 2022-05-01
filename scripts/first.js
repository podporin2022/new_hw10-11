


const inpE = document.getElementById('txt');
const btn = document.getElementById('btn');
const errorE = document.querySelector('.error-cont');
const contE = document.querySelector('.container');

inpE.addEventListener('keyup',validateTodo);
btn.addEventListener('click', OnAddTodo);
contE.addEventListener('click', onTodoClick);

btn.disabled = true;

function  OnAddTodo (){
const element =`<div name="todo" class="item">
<span name="delete" class="delete">x</span>
${inpE.value}
</div>`
    contE.innerHTML += element;
    inpE.value = "";
}

const TODO_FUNC = {
todo:compliteTodo,
delete:deleteTodo
}

function onTodoClick(e){
    [...e.target.attributes].forEach((el) => {
        if(el.value === 'delete'){
            deleteTodo(e.target);
        }
        if(el.value === 'todo'){
            compliteTodo(e.target)
        }
    });
    }

function  deleteTodo(elem){
    console.log(elem)
    elem.closest('.item').remove();
}
function compliteTodo(elem){
    elem.classList.toggle('complite');
}

function validateTodo(e){
    console.log(e)
    if (event.shiftKey && event.keyCode === 8) {
        e.target.value = "";
    }

    if (!e.target.value.trim()){
        errorE.innerText = "";
        btn.disabled = true;
        return;
    }

    if (e.target.value.trim().length <=3 ){
    errorE.innerText = "Error, length should be >3";
    btn.disabled = true;
    return;
    }

    if (e.keyCode ===13){
        OnAddTodo();
    }
    errorE.innerText = "";
    btn.disabled = false;

}
