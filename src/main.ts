import ToDoModel from './Model/ToDoModel'
import ToDoView from './View/ToDoView'
import ToDoController from './Controller/ToDoController'
 
const ToDo = new ToDoModel();
const View = new ToDoView();

const Controller = new ToDoController(ToDo, View)

// 初回起動時検索
Controller.index();

// ToDo追加
const addButton = document.getElementById("add_button");
addButton?.addEventListener("click", () => {
    const inputElement = <HTMLInputElement>document.getElementById("todo_input");
    const inputText = inputElement.value
    if(inputText) {
        Controller.store({todo: inputText}, )
    }
})








