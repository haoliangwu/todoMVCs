import $ from 'jquery'

document.write('<link rel="stylesheet" href="https://npmcdn.com/hack@0.5.2" />')

const projectName = 'rxjs-learn'

document.body.className = 'hack'

const div = document.createElement('div')
div.id = 'app'
div.className = 'container'
div.innerHTML = `
  <h1>${projectName}</h1>
  <div class="main">
    <p>
      Hi there, you've made a perfect start using tooling!
    </p>
    <p>
      Check out <strong>README.md</strong> or head to <a href="https://github.com/egoist/tooling">tooling</a> to get more instructions.
    </p>
  </div>
`
document.body.appendChild(div)

const body = $(document.body)

const button1 = $('<button class="button1">I am Button1</button>')

body.append(button1)

const input1 = $('<input class="input1">')

body.append(input1)

require('./main')