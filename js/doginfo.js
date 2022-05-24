// this section is for the hover over dog tiles.

$(function(){
    function doBounce(element, times, distance, speed) {
        for(i = 0; i < times; i++) {
            element.animate({marginTop: '-='+distance},speed)
                .animate({marginTop: '+='+distance},speed);
        }        
    }

    $('.gridcontainer').mouseenter(function(){
        doBounce($(this), 1, '20px', 400);
        $(this).css("box-shadow", "3px 13px 10px #00000050");
        }).mouseleave(function(){
        $(this).css("box-shadow", "0px 0px 0px #555");
    })
})

// this section is for little easter eegs of hovering over featured image.


$(document).ready(function(){  
    $('.featuredimg').hover(function(){  
      $('.featuredimg').attr('src','images/eric-ward-610868-unsplash.jpg');  
      }, function(){  
      $('.featuredimg').attr('src','images/eric-ward-610868-unsplash-closed.jpg');  
    })

    var logoSound = $('#logo-sound')[0];
    $('.featuredimg').mouseenter(function(){
        logoSound.play();
        // doBounce($(this), 3, '10px', 300);
    })
})


// --------------------------------------------------
// This section is to calculte the cart total

const cartTotal = document.getElementById('cartTotal')

let currentBalance = 0.00;

$('.buttongreen').click(function(){
    currentBalance = currentBalance + (123.45);
    cartTotal.innerHTML = `$` + currentBalance.toFixed(2)
        if (currentBalance < 370){
            console.log(currentBalance.toFixed(2) + `  Woof!`)
        } if (currentBalance > 370 && currentBalance < 380){
            console.log(currentBalance.toFixed(2) + `  More than 2 dogs is a lot! Are you sure?`)
        } if (currentBalance > 380){ 
            console.log(currentBalance.toFixed(2) + `  Stop while you're ahead!!`)
        }
    
})
    
// --------------------------------------------------
// this section is just to get dog info before adding to cart.


$('#adoptMurphy').click(function(){
    alert(`Name: Murphy\nBreed: Not a cat\nAdoption Fee: $123.45`);
})

$('#adoptPoppy').click(function(){
    alert(`Name: Poppy\nBreed: Probably a cat\nAdoption Fee: $123.45`);
})

$('#adoptJack').click(function(){
    alert(`Name: Jack\nBreed: Flappy  ears\nAdoption Fee: $123.45`);
})

$('#adoptDuffy').click(function(){
    alert(`Name: Duffy\nBreed: Look at those eyes\nAdoption Fee: $123.45`);
})

$('#adoptLucas').click(function(){
    alert(`Name: Lucas\nBreed: Happy puppy\nAdoption Fee: $123.45`);
})

$('#adoptJake').click(function(){
    alert(`Name: Jake\nBreed: Golden personality\nAdoption Fee: $123.45`);
})

$('#adoptAngus').click(function(){
    alert(`Name: Angus\nBreed: Squishy face\nAdoption Fee: $123.45`);
})

$('#adoptViolet').click(function(){
    alert(`Name: Violet\nBreed: Too cute to be real\nAdoption Fee: $123.45`);
})

$('#adoptPiper').click(function(){
    alert(`Name: Piper\nBreed: Hiking pro\nAdoption Fee: $123.45`);
})

$('#adoptMaximus').click(function(){
    alert(`Name: Maximus\nBreed: Serious Serge\nAdoption Fee: $123.45`);
})

$('#adoptLuna').click(function(){
    alert(`Name: Luna\nBreed: Totally just did something naughty\nAdoption Fee: $123.45`);
})

$('#adoptStella').click(function(){
    alert(`Name: Stella\nBreed: Definitely a cat\nAdoption Fee: $123.45`);
})