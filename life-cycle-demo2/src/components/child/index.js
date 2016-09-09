import controller from './controller'
import template from './template.html'

// import './main.css'

export default {
  bindings: {
    user: '<',
    onUpdate: '&'
  },
  template: template,
  controller: controller
}
