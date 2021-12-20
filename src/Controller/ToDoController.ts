import ToDoModel from '../Model/ToDoModel';
import ToDoView from '../View/ToDoView';
import { ToDoStoreRequest, ToDoDeleteRequest } from '../InterFace/ToDoElement'

export default class ToDoController {
    private ToDoModel: ToDoModel;
    private ToDoView: ToDoView;

    constructor(ToDoModel: ToDoModel, ToDoView: ToDoView) {
        this.ToDoModel = ToDoModel;
        this.ToDoView = ToDoView;
    }
    
    index = async() => {
        // 一覧表示
        const todoList = await this.ToDoModel.list();
        if(todoList) {
            this.ToDoView.listView(todoList, (todo) => this.ToDoModel.save(todo), this.delete)        
        }
    }

    store = async(todo: ToDoStoreRequest) => {
        // 登録
        const toDo = await this.ToDoModel.save(todo);

        if(toDo) {
            this.ToDoView.addView(toDo, (todo) => this.ToDoModel.save(todo), this.delete)
        }
    }

    update = () => {
        // 更新
    }

    delete = async(todo: ToDoDeleteRequest) => {
        await this.ToDoModel.delete({id: todo.id})
    }
}