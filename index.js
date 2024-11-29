// IF STATEMENTS = if a condition is true, execute some code if not, do something


/*let age = 10; 

if(age >= 18){
    console.log ("you are old enough to enter the site");

}
else{
    console.log ("You must be 18+ to enter this state");
} */




    // Another example!!!!!!!

/*let time = 9;


if (time < 12){
    console.log("Good Morning!");
}else{
    console.log("Good Afternoon!")
} */



    /*


    // BOOLEAN
    let isStudent=  false;

    if(isStudent){
        console.log("You are a student");
    }else {
        console.log("You are not a student");
    }

    */


    ///NESTED IF STATEMENTS .....

   /* let age = 30;
    let hasliscense = true;

    if(age >=16){
        console.log("You are old enough to drive");

        if(hasliscense){
            console.log("You have your license");
        }else  {
            console.log( "You do not have your license yet!");
        }


    }else{
        console.log('You must be 16+ to have a license');
    } 
        */


       // ELSE IF STATEMENTS   1:28:30

        const myText= document.getElementById(" myText");
        const mySubmit = document.getElementById("mySubmit");
        const resultElement = document.getElementById("resultElement");

       let age;



       mySubmit.onclick = function{

        if (age >= 100){
            console.log("You are too old to enter this site");
           }
           else if(age == 0){
            console.log("you cant enter this site, you were just born");
           }
           else if(age >= 18){
            console.log("You are old enough to enter this site");
           }
           else if (age < 0){
            console.log("Your age cant be below 0");
    
           }
           
           else{
            console.log("You must be 18+ to enter this site");
    
           }
    


       }






    