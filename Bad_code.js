(function __Bad_code () {
  foo = true
  bar = false
  faz = true
  foobar = true
  System=(function(){
    return Object.freeze(new(function(){
      this.out=new(function(){
        this.println=console.log
      })()
    })())
  })()
  System.out.println(new String("Hello"+' World'))
  if (foo ? foo && !bar : bar && faz || !foo ? foobar : faz || foobar && !foo) console.log(new String("Hope" + " you"+" have"+" a"+" great"+' time!'))
})()
