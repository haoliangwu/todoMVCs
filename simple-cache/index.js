import SimpleCache from './cache'

document.write('<link rel="stylesheet" href="https://npmcdn.com/hack@0.5.2" />')

const projectName = 'simple-cache'

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

const cache1 = new SimpleCache('cache1')

console.log(cache1.namespace)
