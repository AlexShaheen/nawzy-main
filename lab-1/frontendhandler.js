function cardObject(cardName) {
    this.name = cardName;
    this.image = "cardimages/" + cardName + ".jpg";
    var img = document.createElement("img");
    img.src = this.image;
};

var draw1 = false;
var draw2 = false;

var p1 = false;
var p2 = false;
//for html line 39-58 we should make four columns of three so its easier to add three new cards

var p1Score = 0;
var p2Score = 0;
var cardsLeft = 81;

var board = [];
var selectedCards = []; 

//key:
//color: red green purple = rgp (first letter charAt(0)
//number: one two three = 123 (second letter charAt(1)
//shape: diamond squiggle oval = dso (third letter charAt(2))
//shading: filled half none = fhn (fourth letter charAt(3))
//ex: g2sn is the green squiggle with no filling and theres 2 

var deck = [r1df = new cardObject('r1df'), r1dh = new cardObject('r1dh'), r1dn = new cardObject('r1dn'),
r1sf = new cardObject('r1sf'), r1sh = new cardObject('r1sh'), r1sn = new cardObject('r1sn'),
r1of = new cardObject('r1of'), r1oh = new cardObject('r1oh'), r1on = new cardObject('r1on'),
r2df = new cardObject('r2df'), r2dh = new cardObject('r2dh'), r2dn = new cardObject('r2dn'),
r2sf = new cardObject('r2sf'), r2sh = new cardObject('r2sh'), r2sn = new cardObject('r2sn'),
r2of = new cardObject('r2of'), r2oh = new cardObject('r2oh'), r2on = new cardObject('r2on'),
r3df = new cardObject('r3df'), r3dh = new cardObject('r3dh'), r3dn = new cardObject('r3dn'),
r3sf = new cardObject('r3sf'), r3sh = new cardObject('r3sh'), r3sn = new cardObject('r3sn'),
r3of = new cardObject('r3of'), r3oh = new cardObject('r3oh'), r3on = new cardObject('r3on'),
g1df = new cardObject('g1df'), g1dh = new cardObject('g1dh'), g1dn = new cardObject('g1dn'),
g1sf = new cardObject('g1sf'), g1sh = new cardObject('g1sh'), g1sn = new cardObject('g1sn'),
g1of = new cardObject('g1of'), g1oh = new cardObject('g1oh'), g1on = new cardObject('g1on'),
g2df = new cardObject('g2df'), g2dh = new cardObject('g2dh'), g2dn = new cardObject('g2dn'),
g2sf = new cardObject('g2sf'), g2sh = new cardObject('g2sh'), g2sn = new cardObject('g2sn'),
g2of = new cardObject('g2of'), g2oh = new cardObject('g2oh'), g2on = new cardObject('g2on'),
g3df = new cardObject('g3df'), g3dh = new cardObject('g3dh'), g3dn = new cardObject('g3dn'),
g3sf = new cardObject('g3sf'), g3sh = new cardObject('g3sh'), g3sn = new cardObject('g3sn'),
g3of = new cardObject('g3of'), g3oh = new cardObject('g3oh'), g3on = new cardObject('g3on'),
p1df = new cardObject('p1df'), p1dh = new cardObject('p1dh'), p1dn = new cardObject('p1dn'),
p1sf = new cardObject('p1sf'), p1sh = new cardObject('p1sh'), p1sn = new cardObject('p1sn'),
p1of = new cardObject('p1of'), p1oh = new cardObject('p1oh'), p1on = new cardObject('p1on'),
p2df = new cardObject('p2df'), p2dh = new cardObject('p2dh'), p2dn = new cardObject('p2dn'),
p2sf = new cardObject('p2sf'), p2sh = new cardObject('p2sh'), p2sn = new cardObject('p2sn'),
p2of = new cardObject('p2of'), p2oh = new cardObject('p2oh'), p2on = new cardObject('p2on'),
p3df = new cardObject('p2df'), p3dh = new cardObject('p3dh'), p3dn = new cardObject('p3dn'),
p3sf = new cardObject('p3sf'), p3sh = new cardObject('p3sh'), p3sn = new cardObject('p3sn'),
p3of = new cardObject('p3of'), p3oh = new cardObject('p3oh'), p3on = new cardObject('p3on')];

// https://stackoverflow.com/questions/35397728/storing-images-in-javascript-variables
//not sure if deck.push concatinates the variables correctly
//but this is a cool concept we can try
// TODO: change variable names

// var color = "rgp";
// var num = "123";
// var shape = "dso";
// var shading = "fhn";
// for (var i = 0; i < color.length; i++){
//  var hold1 = color.charAt(i);
//   for (var j = 0; j < num.length; j++){
//        var hold2 = num.charAt(j);
//     for (var k = 0; k < shape.length; k++){
//         var hold3 = shape.charAt(k);
//       for (var l = 0; l < shading.length; l++){
//           var hold4 = shading.charAt(l);
//           deck.push(new cardObject(hold1 + hold2 + hold3 + hold4));       
//       }
//     }
//   }
// }


function newGame() {
    alert('You pressed new game');
    StartGame();
}
function Hint() {
    alert('You pressed hint');
}
function singlePlayer() {
    singlePlayerPrompt();
}
function addCardsP1() {
    alert('You pressed player 1 addCards');
    p1Draw();
}
function addCardsP2() {
    alert('You pressed player 2 addCards');
    p2Draw();
}
function checkSetP1() {
    alert('You pressed player 1 check set');
    p1Turn();
}
function checkSetP2() {
    alert('You pressed player 2 check set');
    p2Turn();
}


function selectCard() {
    if (selectedCards.length == 3) {
        //print error too many cards selected
    } else {
        //highlight card
        // add to selectCard array
        if (selectedCards.length == 3) {
            //check if three selected cards are a set and make it return boolean val
            //if (boolean == true) {
            if (p1 == true) {
                p1Score++;
            } else {
                p2Score++;
            }
            //reset selected cards
            // } else { 
            // reset selected cards
            // print not a set
            // }
        }
    }

}



function p2Draw() {
    if (draw2 == true) {
        //this is like if they are deselecting it
        //change to default color
    } else {
        draw2 = true;
        //turn button into a different color here
        if (draw1 == true && draw2 == true) {
            drawCard();
            drawCard();
            drawCard();
            draw1 = false;
            draw2 = false;
        }
    }
}

function p1Draw() {
    if (draw1 == true) {
        //this is like if they are deselecting it
        //change to default color
    } else {
        draw1 = true;
        //turn button into a different color here
        if (draw1 == true && draw2 == true) {
            drawCard();
            drawCard();
            drawCard();
            draw1 = false;
            draw2 = false;
        }
    }
}

function p1Turn(p2, p1) {
    //reset all selected cards function goes here
    p2 = false
    p1 = true
}
function p2Turn() {
    //reset all selected cards function goes here
    p1 = false
    p2 = true
}




function singlePlayerPrompt() {
    //ask player if they really want to play single player and reset game
    //if true, reset game
    //while (Deck.length + board.length != 0){
    // wait 5,10,15 seconds depending on game mode
    // if (SetOnBoard()){ 
    //    select set add points to p2 etc etc
    // } else {
    //    select "player2: MoreCards"
    //}
    //alert('single player pressed');

    //Prompts the user with a confirmation
    if (confirm('Are you sure you want to play singleplayer?')) {
        // Begin setup
        console.log('Beginning a singleplayer game');
        console.log('Deck Size: ', deck.length);
        console.log(deck[0].name);
        console.log(deck[0].image);
        //window.location.href = deck[0].image;
        StartGame();
    } else {
        // Do nothing
        console.log('Singleplayer cancelled');
    }

}

function drawCard(slot) {
    //Doesn't work yet, may get an undefined card, or go out of bounds?
    //TODO
    //var index = Math.random() * cardsLeft;
    //var cardDrawn = deck.indexOf(index);
    //deck.splice(index);
    //cardsLeft--;
    //board.push(cardDrawn);
    //add card to display
    var card = deck[Math.floor(Math.random() * deck.length)];
    console.log('slot' + String(slot));
    document.getElementById('slot' + String(slot)).src = "";
    document.getElementById('slot' + String(slot)).src = String(card.image);
    //return (CardDrawn); // not sure if this line is needed or not yet


}
function StartGame() {
    board = [];
    for (var i = 0; i < 12; i++) {
        drawCard(i);
    }
    draw1 = false;
    draw2 = false;
    p1 = false;
    p2 = false;
    cardsLeft = 81;
    p1Score = 0;
    p2Score = 0;
}