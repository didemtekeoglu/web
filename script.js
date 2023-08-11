var first = document.getElementById('firstkey').value;
var second = document.getElementById('secondkey').value;


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function getPoem(){
    var first = document.getElementById('firstkey').value;
    var second = document.getElementById('secondkey').value;
    
   
    const poemIndex =
    [`Roses are ${first},<br>
    Violets are ${second},<br>
    The poem generator is so neat,<br>
    With words that can't be beat.`,

    `In a world of ${first},<br>
    I found my ${second},<br>
    With joy and laughter all around,<br>
    Together, we'll make love unbound.`,

    `Through valleys of ${first} we roam,<br>
    With hearts entwined, we're never alone,<br>
    With each step, our love does bloom,<br>
    Forever together, we conquer the gloom.`];

    const randomIndex = getRandomNumber(0 , poemIndex.length - 1);
    const poem = poemIndex[randomIndex];

    if(!first || !second){
        console.log('Its empty');
        document.getElementById('generatedPoem').innerHTML = 'Its empty';
    }
    else {
        document.getElementById("generatedPoem").innerHTML = poem;
        
    }
}

function resetPoem() {
    document.getElementById('firstkey').value = '';
    document.getElementById('secondkey').value= '';
    document.getElementById('generatedPoem').innerHTML = '';


}





  