export class TodoItem {
  name: string
  done: boolean

  constructor(name: string, done: boolean = false) {
    this.name = name
    this.done = done
  }

  toggle(status: boolean) {
    this.done = status
  }
}
