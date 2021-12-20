import BaseModel from './BaseModel'
import fetch from 'node-fetch'
import axios from 'axios'
import {ToDoElement, ToDoStoreRequest,ToDoDeleteRequest} from '../InterFace/ToDoElement'

export default class ToDoModel implements BaseModel  {
    
    list = async() => {
        const res: Promise<Array<ToDoElement>> = await axios.get('http://localhost:3000/todo')
        .then((results) => { // レスポンスが来たらthenを実行
            return results.data
        })
        .catch((error) => {
            console.log(error.status);
            return null
        });

        if(!res) {
            return null;
        }
        return res
    }

    lastId = async() => {
        const todoList = await this.list();
        let lastId = 0
        if(todoList) {
            lastId = todoList.slice(-1)[0].id
        }

        return lastId
    }

    
    
    save = async(toDo: ToDoStoreRequest) => {
        if(toDo.id) {
            const savedToDo: Promise<ToDoElement> = await axios.put(`http://localhost:3000/todo/${toDo.id}`, {
                todo: toDo.todo
            })
            .then(res => {
                console.log(res.data);
                return res.data
            })
            .catch((error) => {
                console.log(error)
                return null
            })
    
            if(!savedToDo) {
                return null
            }

            return savedToDo

        }
        const id = await this.lastId() + 1;
        const savedToDo: Promise<ToDoElement> = await axios.post('http://localhost:3000/todo', {
            id: id,
            todo: toDo.todo
        })
        .then(res => {
            console.log(res.data);
            return res.data
        })
        .catch((error) => {
            console.log(error)
            return null
        })

        if(!savedToDo) {
            return null
        }

        return savedToDo
    }

    delete = async(todoDeleteRequest: ToDoDeleteRequest) => {
        await axios.delete(`http://localhost:3000/todo/${todoDeleteRequest.id}`)
    }
}