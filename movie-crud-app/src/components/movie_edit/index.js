import controller from './controller'
import template from './template.html'

export default {
  template: template,
  controller: ['$resource', '$state', '$stateParams', controller]
}
