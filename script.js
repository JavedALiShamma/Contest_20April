
OpeningCeremony();
function OpeningCeremony(){
    let scoreObject={red:0,blue:0,green:0,yellow:0};
    console.log("Let the game begin");
    console.log(scoreObject);
    Race100M(scoreObject);
}

function Race100M(scoreObject){
    // Here we have to generate a JS Code will generate a random number b/w
    // 10-15
    let arr={1:'red',2:'dd',3:'g',4:'y'};
    for(let key in scoreObject){
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      
      const rndInt = randomIntFromInterval(10, 15);
      scoreObject[key]=rndInt;
    }
    let sortable = [];
for (var vehicle in scoreObject) {
    sortable.push([vehicle, scoreObject[vehicle]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
});
// console.log(sortable);
// console.log(sortable[0][0]);
// console.log(sortable[1][0]);
/// here we need to aad these numbers to scoreObject
scoreObject[sortable[0][0]]=50;
scoreObject[sortable[1][0]]=25;
scoreObject[sortable[2][0]]=0;        
scoreObject[sortable[3][0]]=0; 

console.log(scoreObject);
LongJump(scoreObject);
    
}
function LongJump(scoreObject){
    // Here we need to select a randow key of the object
   let curr=getRandomKey(scoreObject);
   // Here we get a key we have to access
    // console.log(curr);
    // here we have get the key 
    // console.log(scoreObject[curr]);
    scoreObject[curr]+=150;
    console.log(scoreObject);
    HighJump(scoreObject);
      
    function getRandomKey(obj) {
        const keys = Object.keys(obj);
        // console.log("values are :" + keys);
        const randomIndex = Math.floor(Math.random() * keys.length);
        return keys[randomIndex];
    }
    
}
function HighJump(scoreObject){
    /// here we need to get a input from the user
    let colorSelected=prompt("What color secured the highest marks between Green red yellow and blue");
    let result;
    if(colorSelected==null || colorSelected==""){
        result="Event was cancelled";
        // console.log(result);
    }
    else if((colorSelected)=="green" || colorSelected=="Green"){
            scoreObject["green"]+=100;
            
    }
    else if(colorSelected=="Red" || colorSelected=="red"){
            scoreObject["red"]+=100;
    }
    
    else if(colorSelected=="yellow" || colorSelected=="yellow"){
            scoreObject["yellow"]+=100;
    }
    else{
        scoreObject["blue"]+=100;
    }
    console.log(scoreObject);
    AwardCeremony(scoreObject);
}
function AwardCeremony(scoreObject){
    // Here we need to calculate the score as well
    console.log(scoreObject);
    // how Here we need to calculate the result of the contest
    // Here we need to calculate the first and the second and the third prize winners
     // here we will do this using a simple loop
     let firstMax=-1;
     let firstColor;
     let secondMax=-2;
     let secondColor;
     // Here we need calculate the max
     for(let key in scoreObject){
        if(scoreObject[key]>firstMax){
            firstMax=scoreObject[key];
            firstColor=key;
        }
     }
    
    for(let key in scoreObject){
        if(scoreObject[key]>secondMax && key!== firstColor){
            secondMax=scoreObject[key];
            secondColor=key;
        }
    }
    console.log(scoreObject);
   console.log(firstColor +" came first with"+" " +firstMax +" "+ secondColor+" came second with"+" "+ secondMax);
}