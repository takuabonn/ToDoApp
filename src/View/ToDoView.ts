import {ToDoElement, ToDoStoreRequest, ToDoDeleteRequest} from '../InterFace/ToDoElement'


export default class ToDoView {
    
    listView = async(toDoData: Array<ToDoElement>, updateFunc: (todo: ToDoStoreRequest) => Promise<ToDoElement | null>, deleteFunc: (todo: ToDoDeleteRequest) => Promise<void>) => {
        console.log(toDoData)
        toDoData.forEach((element: ToDoElement, index) => {
            const ulElement = document.getElementById('todo_list');

            const liElement = document.createElement("li");
            liElement.setAttribute("id", `todo-${element.id}`);
           

            const editButtonElement = document.createElement("button");
            editButtonElement.setAttribute("class", "todo_id_for_edit");
            editButtonElement.setAttribute("value", `${element.id}`);
            editButtonElement.textContent = "編集"
            
            const deleteButtonElement = document.createElement("button");
            deleteButtonElement.setAttribute("class", "todo_id_for_delete");
            deleteButtonElement.setAttribute("value", `${element.id}`)
            deleteButtonElement.textContent = "削除"

            const sendButtonElement = document.createElement("button");
            sendButtonElement.setAttribute("class","todo_id_for_update");
            sendButtonElement.setAttribute("value", `${element.id}`);
            sendButtonElement.textContent = "送信";

            const buttonGroup = document.createElement("div");
            buttonGroup.appendChild(editButtonElement);
            buttonGroup.appendChild(deleteButtonElement);

            const input = document.createElement("input");
            input.value = element.todo;
            const inputWrap = document.createElement("div");
            inputWrap.appendChild(input);

            const editLiEelemnt = document.createElement("li");
            editLiEelemnt.style.display = "none";

            editButtonElement.addEventListener("click", () => {
                liElement.style.display = "none";
                editLiEelemnt.style.display = "list-item";
            });

            sendButtonElement.addEventListener("click", async() => {
                const toDo = await updateFunc({id:element.id, todo: input.value});
                if(toDo) {                    

                    const i = document.getElementById(`todo-${toDo.id}`);

                    if(i?.firstChild) {
                        console.log(i.firstChild)
                        i.firstChild.textContent = toDo.todo
                    }
                    
                    input.value = toDo.todo;
                    
                }
                liElement.style.display = "list-item";
                editLiEelemnt.style.display = "none"
            })

            deleteButtonElement.addEventListener("click", async() => {
                await deleteFunc({id: element.id})
                liElement.remove();
            })

            editLiEelemnt.appendChild(inputWrap);
            editLiEelemnt.appendChild(sendButtonElement);

            const divElement = document.createElement("div");
            divElement.textContent = element.todo
            liElement.appendChild(divElement)
            liElement.appendChild(buttonGroup)
            ulElement?.appendChild(liElement);
            ulElement?.appendChild(editLiEelemnt)
        });
    }

    addView = (toDo: ToDoElement, updateFunc: (todo: ToDoStoreRequest) => Promise<ToDoElement | null>, deleteFunc: (todo: ToDoDeleteRequest) => Promise<void>) => {

        const ulElement = document.getElementById('todo_list');

            const liElement = document.createElement("li");
            liElement.setAttribute("id", `todo-${toDo.id}`);
           

            const editButtonElement = document.createElement("button");
            editButtonElement.setAttribute("class", "todo_id_for_edit");
            editButtonElement.setAttribute("value", `${toDo.id}`);
            editButtonElement.textContent = "編集"
            
            const deleteButtonElement = document.createElement("button");
            deleteButtonElement.setAttribute("class", "todo_id_for_delete");
            deleteButtonElement.setAttribute("value", `${toDo.id}`)
            deleteButtonElement.textContent = "削除"

            const sendButtonElement = document.createElement("button");
            sendButtonElement.setAttribute("class","todo_id_for_update");
            sendButtonElement.setAttribute("value", `${toDo.id}`);
            sendButtonElement.textContent = "送信";

            const buttonGroup = document.createElement("div");
            buttonGroup.appendChild(editButtonElement);
            buttonGroup.appendChild(deleteButtonElement);

            const input = document.createElement("input");
            input.value = toDo.todo;
            const inputWrap = document.createElement("div");
            inputWrap.appendChild(input);

            const editLiEelemnt = document.createElement("li");
            editLiEelemnt.style.display = "none";

            editButtonElement.addEventListener("click", () => {
                liElement.style.display = "none";
                editLiEelemnt.style.display = "list-item";
            });

            sendButtonElement.addEventListener("click", async() => {
                const newToDo = await updateFunc({id:toDo.id, todo: input.value});
                if(newToDo) {                    

                    const i = document.getElementById(`todo-${newToDo.id}`);

                    if(i?.firstChild) {
                        console.log(i.firstChild)
                        i.firstChild.textContent = newToDo.todo
                    }
                    
                    input.value =newToDo.todo;
                    
                }
                liElement.style.display = "list-item";
                editLiEelemnt.style.display = "none"
            })

            deleteButtonElement.addEventListener("click", async() => {
                await deleteFunc({id: toDo.id})
                liElement.remove();
            })

            editLiEelemnt.appendChild(inputWrap);
            editLiEelemnt.appendChild(sendButtonElement);
            
            const divElement = document.createElement("div");
            divElement.textContent = toDo.todo
            liElement.appendChild(divElement)
            liElement.appendChild(buttonGroup)
            ulElement?.appendChild(liElement);
            ulElement?.appendChild(editLiEelemnt)
    }
}