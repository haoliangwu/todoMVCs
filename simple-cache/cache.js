export default class SimpleCache {
  constructor (namespace) {
    if (typeof namespace === 'string') this.namespace = namespace || 'global'

    this.cache = {}
    this.resolveMapping = {}
  }

  setItem (key, data, isOverride, cb) {
    Promise.resolve(data).then(res => {
      if (this.cache[key] && !isOverride) {
        console.error('the data of key %s has existed.', key)
      } else {
        this.resolveMapping[key] = data
        this.cache[key] = res
      }

      cb && cb()
    })
  }

  getItem (key, cb) {
    if (!this.cache[key]) {
      console.info('the data of key %s is undefined.', key)
      return
    }

    cb && cb()

    return this.cache[key]
  }

  cleanItems (cb) {
    this.cache = {}

    cb && cb()
  }

  removeItem (key) {
    if (!this.cache[key]) return

    delete this.cache[key]
  }
}

export function namespace (namespace) {
}
