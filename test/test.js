function hello (argument) {
  var one = argument || 'world'
  console.log('hello, ' + one + '!')
}
Window.hello = hello
