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
    <button id="increase">+</button>
    <button id="decrease">-</button>
    <input id="input"></input>
    <span id="count"></span>
    <span id="hello"></span>
  </div>
`
document.body.appendChild(div)

require('./main')
