//document ready

function randomPath() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    return randomNumber;
}
$('.roll-button').on('click', function() {
    const firstRoll = randomPath();
    const secondRoll = randomPath();

    const imagePath1 =  "./images/dice" + firstRoll + ".png";
    const imagePath2 =  "./images/dice" + secondRoll + ".png";

    $('.img1').attr('src', imagePath1);
    $('.img2').attr('src', imagePath2);

   setTimeout(function winner(){
        if (firstRoll > secondRoll) {
            alert("Player 1 Wins!")
        } else if (secondRoll > firstRoll) {
            alert("Player 2 Wins!")
        } else if (firstRoll === secondRoll) {
            alert("It's a Draw!")
        }
    },200)

})
