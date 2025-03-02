// Code your solutions in this file

const gifts=["teddy bears", "drone", "doll"]
function wrapGifts(gifts) {
    for (let i=0; i<gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);


function writeCards(names,event) {
    const thankyoumessages=[];
    for(let i=0; i<names.length;i++){
        const message=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        thankyoumessages.push(message)
    }
    return thankyoumessages
}
function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--; 
    }
  }
  