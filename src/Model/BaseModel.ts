import {ToDoElement,ToDoStoreRequest, ToDoDeleteRequest} from '../InterFace/ToDoElement'

interface BaseModel {
    save: (toDo: ToDoStoreRequest) => Promise<ToDoElement | null>,
    list: () => Promise<Array<ToDoElement> | null>,
    lastId: () => Promise<number>,
    delete: (toDo: ToDoDeleteRequest) => Promise<void>,
}

export default BaseModel;