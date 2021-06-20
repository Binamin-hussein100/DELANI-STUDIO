$(document).ready(function(){
    $("#design").click(function(){
        $("#show").toggle();
        $("#hide").toggle();
    $("#hide").click(function(){
        $("#show").toggle();
        $("#hide").toggle();
    })
    });

    $("#development").click(function(){
        $("#dev-show").toggle();
        $("#dev-hide").toggle();
    });

    $("#product").click(function(){
        $("#product-show").toggle();
        $("#product-hide").toggle();
    })









    $("button").click(function(event){
        event.preventDefault()
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userEmail").value;
        let message = document.getElementById("message");

        if(userName === ""){
            alert("Please insert your name");
        }
        else if(userEmail === ""){
            alert("Please insert your email")
        }
        else if( message === ""){
            alert("Please type your message.")

        }
        else{
            alert("Dear " + userName + " ,thank you for reaching out. We will get back to you on "+ userEmail+ " incase we have feedback for you.")  
        }





    })











});

