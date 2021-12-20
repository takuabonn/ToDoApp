
export interface ToDoStoreRequest {
    todo: string,
    id?: number
}

export interface ToDoUpdateRequest {
    id: number,
    todo: string
}

export interface ToDoElement {
    id: number,
    todo: string
}

export interface ToDoDeleteRequest {
    id: number
}