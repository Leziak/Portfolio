$(document).ready(()=>{

    window.addEventListener('load',()=>{
        $('.jumbotron').fadeTo(2000, 1)
        $('.intro').fadeTo(1000,1);
        $('.fill').hide();
    });

    $(document.querySelectorAll('e')).appear();
    $(document.querySelectorAll('e')).on('appear', ()=>{
        $('.jumbotron').fadeTo(2000, 1)
        $('.intro').fadeTo(1000,1);
        $('.fill').hide();
    });

    $(document.querySelectorAll('b')).appear();
    $(document.querySelectorAll('b')).on('appear', ()=>{
        $('#html').show().animate({'width':'90%'}, 2000);
        $('#css').show().animate({'width':'90%'}, 2000);
        $('#js').show().animate({'width':'85%'}, 2000);
        $('#jquery').show().animate({'width':'80%'}, 2000);
        $('#react').show().animate({'width':'75%'}, 2000);
        $('#express').show().animate({'width':'85%'}, 2000);
        $('#php').show().animate({'width':'70%'}, 2000);
        $('#laravel').show().animate({'width':'75%'}, 2000);
    })

    $(document.querySelectorAll('c')).appear();
    $(document.querySelectorAll('c')).on('appear', ()=>{
        $('.project').fadeTo(1000,1)
    });

    $(document.querySelectorAll('d')).appear();
    $(document.querySelectorAll('d')).on('appear', ()=>{
        $('.photo').animate({'left': '20px'}, 2000);
        $('.text').animate({'left': '0px'}, 2000);        
    });
})