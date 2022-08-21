const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }
    return gifts
}
wrapGifts(gifts)
const name = ["Ollie", "Samip", "Ali"]

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        name.splice(i, 1, `Thank you, ${name[i]}, for the wonderful surprise gift!`)
        }
        return name
    }
function countDown(begginingNumber) {
    // let begginingNumber = x
    // let begginingNumber = 9
    while (begginingNumber > 0) {
        console.log(begginingNumber)
        begginingNumber -= 1;
       // x--
    }
    //return x
    console.log(begginingNumber)
}
console.log(countDown(-1))