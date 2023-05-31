let $inner = $('.inner'),
    $spin = $('#submitBtn'),
    $data = $('.data'),
    $mask = $('.mask'),
    maskDefault = 'Faites vos jeux',
    timer = 9000;

let black = [32,19,21,25,34,27,36,30,23,5,16,1,14,9,18,7,12,3];



$mask.text(maskDefault);

$spin.on('click',function(event){
    event.preventDefault();
    // get a random number between 0 and 36 and apply it to the nth-child selector
    let  randomNumber = Math.floor(Math.random() * 36),
        color = null;
    $inner.attr('data-spinto', randomNumber).find('li:nth-child('+ randomNumber +') input').prop('checked','checked');


    $('.placeholder').remove();


    setTimeout(function() {
        $mask.text('Rien ne va plus');
    }, timer/2);

    setTimeout(function() {
        $mask.text(maskDefault);
    }, timer+500);



    // remove the disabled attribute when the ball has stopped
    setTimeout(function() {

        if($.inArray(randomNumber, black) === -1){ color = 'red'} else { color = 'black'};
        if(randomNumber === 0){color = 'green'};

        $data.addClass('reveal');
        $inner.addClass('rest');

        if(color === 'red' || color === 'green'){
            alert("Vous avez gagné ! Votre message a bien été envoyé !");
            $('#formulaire').submit();
        }
        else{
            alert("Ratio! Vous avez perdu! Vous devez tous recommencer!")
            location.reload();
        }
    }, timer);

});

