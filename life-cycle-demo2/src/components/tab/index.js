import controller from './controller'
import template from './template.html'

// import './main.css'

export default {
  bindings: {
    label: '@'
  },
  require: {
    tabs: '^^'
  },
  transclude: true,
  template: template,
  controller: controller
}
