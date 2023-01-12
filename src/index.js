module.exports = function reverse (n) {
    let toString = String(Math.abs(n)).split('').reverse().join('')
      return Number(toString)
  }

