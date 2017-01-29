import { curry } from 'lodash'

export function inspect (x) {
  return (typeof x === 'function') ? inspectFn(x) : inspectArgs(x)
}

export function inspectFn (f) {
  return (f.name) ? f.name : f.toString()
}

export function inspectArgs (args) {
  return args.reduce(function (acc, x) {
      return acc += inspect(x)
    }, '(') + ')'
}

// export function curry(fx) {
//   var arity = fx.length

//   return function f1() {
//     var args = Array.prototype.slice.call(arguments, 0)
//     if (args.length >= arity) {
//       return fx.apply(null, args)
//     }
//     else {
//       var f2 = function f2() {
//         var args2 = Array.prototype.slice.call(arguments, 0)
//         return f1.apply(null, args.concat(args2)); 
//       }
//       f2.toString = function() {
//         return inspectFn(fx) + inspectArgs(args)
//       }
//       return f2
//     }
//   }
// }

// export const compose = function() {
//   var fns = toArray(arguments),
//       arglen = fns.length

//   return function(){
//     for(var i=arglen;--i>=0;) {
//       var fn = fns[i]
//         , args = fn.length ? Array.prototype.slice.call(arguments, 0, fn.length) : arguments
//         , next_args = Array.prototype.slice.call(arguments, (fn.length || 1)) //not right with *args
//       next_args.unshift(fn.apply(this,args))
//       arguments = next_args
//     }
//     return arguments[0]
//   }
// }

export const add = curry(function (x, y) {
  return x + y
})

export const match = curry(function (what, x) {
  return x.match(what)
})

export const replace = curry(function (what, replacement, x) {
  return x.replace(what, replacement)
})

export const filter = curry(function (f, xs) {
  return xs.filter(f)
})

export const map = curry(function map (f, xs) {
  return xs.map(f)
})

export const reduce = curry(function (f, a, xs) {
  return xs.reduce(f, a)
})

export const split = curry(function (what, x) {
  return x.split(what)
})

export const join = curry(function (what, x) {
  return x.join(what)
})

export const toUpperCase = function (x) {
  return x.toUpperCase()
}

export const toLowerCase = function (x) {
  return x.toLowerCase()
}

export const trace = _.curry(function (x, y) {
  console.log(x, y)
  return y
})
