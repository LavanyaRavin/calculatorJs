let onScreen = document.getElementById("screen");

function dispaly(num) {
    onScreen.value = onScreen.value + num;
}

function allClear() {
    onScreen.value = "";
}

function del() {
    onScreen.value = onScreen.value.slice(0, -1);
}

function equalTo() {
    try {

        onScreen.value = eval(onScreen.value);
    } catch (err) {
        alert("invalid");
    }
}

// let screen = document.getElementById("screen");


// function dispaly(num) {
//     screen.value = screen.value + num;
// }

// function allClear() {
//     screen.value = "";
// }

// function del() {
//     screen.value = screen.value.slice(0, -1);
// }

// function equalTo() {
//     screen.value = eval(screen.value);
// }

@media (max-width: 350px) and (min-width: 250px){
    .calculator{
        width:123vw;
        height:73vh;
    }
}

@media (max-width: 400px) and (min-width: 351px){
    .calculator{
        width:82vw;
        height:73vh;
    }
}

@media (max-width: 450px) and (min-width: 401px){
    .calculator{
        width:72vw;
        height:73vh;
    }
}

@media (max-width: 550px) and (min-width: 451px){
    .calculator{
        width:65vw;
        height:73vh;
    }
}

@media (max-width: 600px) and (min-width: 551px){
    .calculator{
        width:55vw;
        height:73vh;
    }
}

@media (max-width: 650px) and (min-width: 601px){
    .calculator{
        width:48vw;
        height:70vh;
    }
} 

@media (max-width: 700px) and (min-width: 651px){
    .calculator{
        width:48vw;
        height:70vh;
    }
} 

@media (max-width: 800px) and (min-width: 701px){
    .calculator{
        width:42vw;
        height:71vh;
    }
} 

@media (max-width: 900px) and (min-width: 801px){
    .calculator{
        width:39vw;
        height:72vh;
    }
} 

@media (max-width: 1000px) and (min-width: 901px){
    .calculator{
        width:34vw;
        height:71vh;
    }
} 

@media (max-width: 1100px) and (min-width: 1001px){
    .calculator{
        width:30vw;
        height:68vh;
    }
} 

@media (max-width: 1200px) and (min-width: 1101px){
    .calculator{
        width:26vw;
        height:65vh;
    }
} 

@media (max-width: 1400px) and (min-width: 1201px){
    .calculator{
        width:26vw;
        height:65vh;
    }
} 
