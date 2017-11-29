 function shout(string) {
return string.toUpperCase()
}

function whisperer(string) {
return string.toLowerCase()
}

function logShout(string) {
console.log( string.toUpperCase())
}

function logWhisper(string) {
console.log( string.toLowerCase())
}

/*function sayHiToGrandma(string) {
console.log( string())
}*/

function sayHiToGrandma(string) {
  return("I can't hear you!","YES INDEED!")
  //return(`It's ${days} days until ${holiday}!`)
  //return(`It's ${days} days until ${holiday}!`)
}

describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
