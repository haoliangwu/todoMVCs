const ERROR = {
  0: 'input must not be empty',
  1: 'duplicate entry'
}

export default {
  getErrorInfo(code) {
    return ERROR[code]
  }
}
