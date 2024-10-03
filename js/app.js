const playerImg = document.querySelector(".player__img")
const nextBtn = document.querySelector(".increment")
const oldBtn = document.querySelector(".dicrement")
const startGame = document.querySelector(".play")
const pcImg = document.querySelector(".pc_player_img")
const result = document.querySelector(".winner")




const images = [`assets/tosh.webp`, `assets/qog'oz.webp`, `assets/qaychi.webp`]
let playerIndex = 0
let computerIndex = 0

nextBtn.addEventListener(`click`, ()=> {
    playerIndex = (playerIndex + 1) % images.length
    playerImg.src = images[playerIndex]
});

oldBtn.addEventListener(`click`, ()=> {
    playerIndex = (playerIndex - 1 + images.length) % images.length
    playerImg.src = images[playerIndex]
});


function computerchoice(){
    return Math.floor(Math.random() * images.length)
}

function winner(playerIndex, computerIndex){
    if(playerIndex === computerIndex){
        return `Durrang`
    }
    else if ((playerIndex === 1 && computerIndex === 0 ) || (playerIndex === 2 && computerIndex === 1) || (playerIndex === 0 && computerIndex === 2) ){
        return `Siz g'olib bo'ldingiz`
    }
    else{
        return `Kompyuter g'olib bo'ldi`
    }
}

startGame.addEventListener(`click`, ()=> {
        computerIndex = computerchoice()
        pcImg.src = images[computerIndex]

        const chempion = winner(playerIndex, computerIndex)

        result.innerHTML = chempion

        startGame.style.display = "none"

        setTimeout(()=>{
            playerIndex = 0
            computerIndex = 0
            playerImg.src = images[playerIndex]
            pcImg.src = images[computerIndex]
            result.innerHTML = ""
            startGame.style.display = "block"
        }, 3000)
})


{
    // Berilgan stringdagi barcha raqamlarni toping va alohida arrayda qaytaring.
    function extractNumbers(s) {
        let arr = s.split("")
        let numbers = "1234567890"
        let result = []
        for(let i = 0; i < arr.length; i++){
            if(numbers.includes(arr[i])){
                result.push(Number(arr[i]))
            }
        }
        return result
     }
     console.log(extractNumbers("There are 3 apples and 4 oranges")); // Output: [3, 4]
     console.log(extractNumbers("123 Main St.")); // Output: [123]
}

{
    // Berilgan stringdagi so'zlarni ularning uzunligi bo'yicha tartiblang.
    function sortByLength(s) {
        let arr = s.split(" ")
        return arr.sort((a, b)=> a.length - b.length)
    }
    console.log(sortByLength("short longest medium")); // Output: "short medium longest"
    console.log(sortByLength("a quick brown fox")); // Output: "a fox quick brown"
}

{
    // Berilgan sonlar qatorida berilgan yig'indini topuvchi barcha ikkilik juftliklarni toping.
    function twoSumPairs(nums, target) {
        let result = []
        for(let i = 0 ; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] + nums[j] === target){
                    result.push(nums[i], nums[j])
                }
            }
        }
        return result
      }
      console.log(twoSumPairs([2, 7, 11, 15], 9)); // Output: [[2, 7]]
      console.log(twoSumPairs([3, 2, 4], 6)); // Output: [[2, 4]]
}

{
    // Berilgan massivdan faqat toq indekslaridagi elementlarni qaytaring.
    function oddIndexedElements(arr) {
        let result = []
        for(let i = 0; i < arr.length; i++){
            if(i % 2 != 0){
                result.push(arr[i])
            }
        }
        return result
    }
    console.log(oddIndexedElements([1, 2, 3, 4, 5, 6]));
    // Output: [2, 4, 6]
}

{
    // Berilgan satr ichidagi barcha raqamlarni ajratib, tartiblang.
    function extractAndSortNumbers(str) {
        let arr = str.split("")
        let numbers = "1234567890"
        let result = []
        for(let i = 0; i < arr.length; i++){
            if(numbers.includes(arr[i])){
                result.push(Number(arr[i]))
            }
        }
        return result.sort((a, b)=> a - b)
    }
    console.log(extractAndSortNumbers("a3c2d4b1"));
    // Output: [1, 2, 3, 4]
}