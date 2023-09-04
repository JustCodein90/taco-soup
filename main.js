//Harry Potter Titles, Array and for loop
const harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets",
 "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix",
  "and the Half-Blood Prince", "and the Deathly Hallows"];

for (let i = 0; i < harryPotterTitles.length; i++) {
    console.log(`Harry Potter ${harryPotterTitles[i]}`);
}





let aGrades = 0

// STUDENTS GRADES
const grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for (let i = 0; i < grades.length; i++) {
    
    if (grades[i] >= 0 && grades[i] <= 69){
        console.log("You got an F");

     } else if (grades[i] >= 70 && grades[i] <= 76) {
        console.log("You got a D");

     } else if (grades[i] >= 77 && grades[i] <= 84) {
        console.log("You got a C");

     } else if (grades[i] >= 85 && grades[i] <= 92) {
        console.log("You got a B");

     } else if (grades[i] >= 93 && grades[i] <= 100) {
        console.log("You got a A");
        aGrades++ //For every A it finds it adds one
    }
}

console.log(`How many students got A's?  ${aGrades}`)






// STUDENTS PART 2
// Array.filter(Arrow fuction) filters numbers in Array that meet the condition
const gradeA = grades.filter(number => number >= 93);
console.log(`How many students got A's?  ${gradeA.length}`);

// Array.filter(Arrow fuction) filters numbers in Array that meet the condition(s) giving total # of grades in groups
const gradeB = grades.filter(number => number >= 85 && number <= 92);
console.log(`How many students got B's?  ${gradeB.length}`);


/* Average Percentage Grade, Math.floor rounds number 
(.reduce adds all integers in Array /divides by grades.length*/
const average = Math.floor(grades.reduce((accumulator, currentValue) => 
accumulator + currentValue) / grades.length);

console.log(`What was the average percentage grade in the class?  ${average}%`);





// CHEER
// Loop counts by 2 till 8, Then stored in the variable numbers
let numbers = ""

for (let index = 2; index <= 8; index = index + 2) {
    numbers = numbers + index + " "; // numbers = `${numbers + index} `; Template String
} 
numbers += "Who do we appericate"

console.log(numbers)



// INTERUPTING COW
// Write a loop that builds a sentence and every 4th word is "MOOOOOOOOO"
const sentenceArray = ["The", "cow", "danced", "through", "the", "trees", "in", "the",
 "light", "of", "the", "moon"];

let sentence = "";
for (let i = 0; i < sentenceArray.length; i++){
    sentence = sentence + sentenceArray[i] + " "; // sentence += `${sentenceArray[i] `
    
    /* adds 1 to each value in index making it start at 1, % find the remainder of each
    index by 4 then runs if equal to 0*/
    if ((i + 1) % 3 === 0) {
        sentence = sentence + "MOOOO "; 
    }
    
}

console.log(sentence);




// BEATLES
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", 
    "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

for (let i=0; i < 4; i++) {
    let string = `${beatles.members[i].name} was in the Beatles from ${beatles.history.formed} 
    to ${beatles.history.disbanded}. He was born in ${beatles.members[i].birth}. He contributed 
    heavily to the ${beatles.albums[i]} Album.`

    if(beatles.members[i].death) {
        string += `They died in ${beatles.members[i].death}.`
    }
    console.log(string)
    console.log()
}