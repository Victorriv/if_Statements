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



       mySubmit.onclick = function(){




        age = myText.value; // the myText.value, gets the value from the text box and puts it into age. 
        age = Number(age); // we need to type cast age into a number, because text from a text box is just text.. We use Number function to convert it to a number. 

        if (age >= 100){
            resultElement.textContent = `You are too old to enter this site`;

           }
           else if(age == 0){

            resultElement.textContent = `you cant enter this site, you were just born`;
           }
           else if(age >= 18){
            resultElement.textContent =`You are old enough to enter this site`
            
           }
           else if (age < 0){
            resultElement.textContent = `our age cant be below 0`;
    
           }
           
           else{
            console.log("You must be 18+ to enter this site");
    
           }
    


       }






    