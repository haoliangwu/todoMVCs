import controller from './controller'
import template from './template.html'

// import './main.css'

export default {
  bindings: {
    selected: '<'
  },
  transclude: true,
  template: template,
  controller: controller
}
