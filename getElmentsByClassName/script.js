function changeText(){
    console.log("hello!");
    var mytext = document.getElementsByClassName('mytext');
    console.log(mytext[0]);
    for (let i = 0; i < mytext.length; i++){
        mytext[i].innerHTML = "You clicked the button";
    }
    console.log(typeof mytext[0]);
}

