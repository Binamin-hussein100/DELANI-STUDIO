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


    //mouse over
    $(document).ready(function(){
        $("#work1").mouseover(function(){
            $("#label1").show();
        }).mouseout(function(){
            $("#label1").hide();
        });
        
        $("#work2").mouseover(function(){
            $("#label2").show();
        }).mouseout(function(){
            $("#label2").hide();
        })

        $("#work3").mouseover(function(){
            $("#label3").show();
        }).mouseout(function(){
            $("#label3").hide()
        })

        $("#work4").mouseover(function(){
            $("#label4").show();
        }).mouseout(function(){
            $("#label4").hide();
        })

        $("#work5").mouseover(function(){
            $("#label5").show();
        }).mouseout(function(){
            $("#label5").hide();
        })

        $("#work6").mouseover(function(){
            $("#label6").show();
        }).mouseout(function(){
            $("#label6").hide();
        })

        $("#work7").mouseover(function(){
            $("#label7").show();
        }).mouseout(function(){
            $("#label7").hide();
        })

        $("#work8").mouseover(function(){
            $("#label8").show();
        }).mouseout(function(){
            $("#label8").hide();
        })
    });



        //business logic
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
            alert("Dear " + userName + " ,thank you for reaching out. We will get back to you on "+ userEmail+ " incase we have feedback for you/")  
        }





    })











});

