# Javascript

# Javascript is prototypical language.
    https://www.geeksforgeeks.org/prototype-in-javascript/#:~:text=JavaScript%20is%20a%20prototype%20based,object%2C%20which%20enables%20all%20the


# There are two way of creating object in javascript 
    1: literal way : In this way you create a empty object and keeps adding property to it.
        var cust = {}; // literal way of creating object.
        cust.name = "mrinal";
        cust.age = 30;
        cust.Add = function(){
            alert('added');
        }

        cust.Add();


    2: Constructor way: in this way we can create multiple instance by new . but in literal way we cant create multiple instance.

    // constructor way

        function Customer(){
            this.Name = "mrinal jha";
            this.Add = function(){
                alert(this.Name);
            }
        }

        var x = new Customer();
        x.Add();

# Javascript datatypes are inferred. 
    javascript datatype is infered. infered means it looks at right hand side and infer its type . in below example it looks value 10 
    and so it says its datatype is number. again when it sees its right hand value is mrinal so it infer type as string.
    thats why javascript variable is called as infered.

        var x= 10;
        alert(typeof(x));
        x= "mrinal";
        alert(typeof(x));

# There are only three datatypes in javascript.
    1: string    2: number   3: boolean

# Variable not existing and undefined are two different thing.

      alert(x); // here x is not defined so we will get reference error x is not defined.

      var a; // here we have declared it but not defined it 
      alert(a); //  so undefined error will come.

# All javascript variable hoisted only if declared with var.

     alert(x); // here we will get undefined error because what javascript compiler will do internally is
                    // it will pick var x from below and place on top like var x; and since x is declared so we will get
                    // undefined error. Note hoisting only happens if we use var. if we dont use var we will get reference error.
            var x = 0;

# Using var and not using var(global pollution) . So we use always use var for variable to avoid global pollution.
    
    function show(){
                //var x=0;
                x=0;  // this form create global pollution
                x++;
            }
            
            show();
            alert(x);

            
# Javascript is also known for shadowing.

      function show(){
        var x=1;
        alert(x);
    }
    function show(){
        var x=50;
        alert(x);
    }
    show(); // it will alert 50 as it will shadow above show

    in javascript we can declare to function with same name. what will happen is latest function will shadow older one. thats why
    in above example when we call show() it alerts 50.

# So to overcome shadowing we can use annonmus function.
    // to remove shadowing we use annonmus function

        // IIFE : immidiately invoked function expression
     var y =   (function (){
            var x=100;
           return x;
        })();

        alert(y);


# Lexical scope
    In c# , java scope are defined using private public, but in javascript it is determined by position. if a variable is defined on top
    it is global. if a variable inside function without var it is also global.


# This is dangerious. coz this is dom object and if you create property using this inside function it is accessible globaly.

    function show(){
        this.Name = "mrinal";
    }
        alert(this.Name); // name accessible outside.


# Closures.

# inheritance is done by prototype in javascript.