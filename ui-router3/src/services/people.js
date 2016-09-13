const getAllPeople = function () {
  return fetch('json/people.json').then(res => {
    return res.json()
  })
}

const getPerson = function (id) {
  return getAllPeople().then(people => {
    return people.find(e => {
      return e.id === id
    })
  })
}

export default {getAllPeople, getPerson}
