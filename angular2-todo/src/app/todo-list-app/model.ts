export class TodoItem {
  id: number
  name: string
  done: boolean

  constructor(id: number, name: string, done: boolean = false) {
    this.id = id
    this.name = name
    this.done = done
  }

  toggle(status: boolean) {
    this.done = status
  }
}

export type TodoItems = TodoItem[]
