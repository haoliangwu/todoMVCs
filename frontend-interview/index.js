import './main.css'
import { question1, question2 } from './main'

try {
  question1.add(1).add(2).add(3).add(4)
} catch (e) {}

const projectName = 'frontend-interview'

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
  <h2>question 1</h2>
  <span>${question1.result}</span>
  <h2>question 2</h2>
  <span>[${question2([1, 1, 2, 2, 3, 3])}]</span>
  <h2>question 3</h2>
  <div class="clock-panel" style="display: inline-block; width: 150px; height: 150px; background: #ccc; border-radius: 50%;">
    <div class="clock"></div>
  </div>
`
document.body.appendChild(div)
