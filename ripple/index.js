import _ from 'lodash'
import $ from 'jquery'

import './main.css'


$('#app').click(function (e) {
  const divRipple = $('<div class="ripple"></div>')

  const {left, top} = $(this).offset()

  divRipple.css('left', e.pageX - left + 'px')
  divRipple.css('top', e.pageY - top + 'px')
  $(this).append(divRipple)

  setTimeout(() => {
    divRipple.addClass('active')
  }, 100)

  setTimeout(() => {
    divRipple.remove()
  }, 2100)
})
