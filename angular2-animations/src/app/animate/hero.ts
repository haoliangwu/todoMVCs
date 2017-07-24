export class Hero {
  private name: string
  private state: string = 'inactive'

  constructor(name: string, state?: string) {
    this.name = name
    if(state) this.state = state
  }

  toggleState() {
    if (this.state === 'inactive') this.state = 'active'
    else this.state = 'inactive'
  }
}
