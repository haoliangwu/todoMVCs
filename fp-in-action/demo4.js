import _ from 'ramda'
import $ from 'jquery'
import { trace } from './lib'

const Impure = {
  getJSON: _.curry(function (callback, url) {
    $.getJSON(url, callback)
  }),

  setHtml: _.curry(function (sel, html) {
    $(sel).html(html)
  })
}

// map 的组合律
// var law = compose(map(f), map(g)) == map(compose(f, g));

const url = function (term) {
  return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + term + '&format=json&jsoncallback=?'
}

const mediaUrl = _.compose(_.prop('m'), _.prop('media'))
const mediaToImg = _.compose(url => $('<img />', {src: url}), mediaUrl)

// const images = _.compose(_.map(img), _.map(mediaUrl), _.prop('items'))
const images = _.compose(_.map(mediaToImg), _.prop('items'))
const renderImgs = _.compose(Impure.setHtml('body'), images)

const app = _.compose(Impure.getJSON(renderImgs), url)

app('cats')
