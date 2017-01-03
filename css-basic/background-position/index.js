document.write('<link rel="stylesheet" href="https://npmcdn.com/hack@0.5.2" />')

document.body.className = 'hack'

const div = document.createElement('div')
div.id = 'app'
div.className = 'container'
div.innerHTML = `
  <div class="main">
    <div class="panel"></div>
    <div class="panel"></div>
    <div class="panel"></div>
    <div class="panel"></div>
  </div>
`
document.body.appendChild(div)

require('./main.css')
