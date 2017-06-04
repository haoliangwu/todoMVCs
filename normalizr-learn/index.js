import { normalize, schema } from 'normalizr'

const myData = { users: [ { id: 1 }, { id: 2 } ] }
const user = new schema.Entity('users')
const mySchema = { users: [ user ] }
const normalizedData = normalize(myData, mySchema)

console.log(normalizedData)
