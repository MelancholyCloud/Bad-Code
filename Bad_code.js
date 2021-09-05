(function __Bad_code () {
  foo = true
  bar = false
  System=(function(){
    return Object.freeze(new(function(){
      this.out=new(function(){
        this.println=console.log
      })()
    })())
  })()
  faz = true
  foobar = true
  System.out.println(new String("Hello"+' World'))
  if(foo ? foo && !bar : bar && faz || !foo ? foobar : faz || foobar && !foo) System.out.println(new String("Hope" + " you"+" have"+" a"+" great"+' time!'))
  if(faz == true){
    if(bar == true){
      (async function __Boop_function(){
        System.out.println(new String('Boop'))
      })()
    }else if(true == foobar){
      (async function __Boop_function(){
        System.out.println(new String('Boop'))
      })()
    }else{
      (async function __Poob_function(){
        System.out.println(new String('Poob'))
      })()
    }
  }
})()
