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

