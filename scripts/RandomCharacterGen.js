document.getElementById("button7").addEventListener("click", generateCharacter);


function generateCharacter() {

    let radials = document.querySelectorAll(".radial");
    let name = document.getElementById("name");
    let gender = document.getElementById("gender");
    let age = document.getElementById("age");
    let birthday = document.getElementById("birthday");
    let photo = document.getElementById("photo");
    let region = document.getElementById("region");
    let title = document.getElementById("title");

    let selected = "";
    for (let x = 0; x <= radials.length - 1; x++) { //loop over all the radials
        if (radials[x].checked == true) { //if the radial is checked
            if (radials[x].value === "Female") { //if the value is female
                //console.log("Female"); //log female
                var rand = Math.floor(Math.random() * females.length);
                //^^^^select a random number that corresponds to the character
                var yourCharacter = females[rand];
                console.log(yourCharacter);
                name.innerHTML = yourCharacter.name + " " + yourCharacter.surname;
                gender.innerHTML = yourCharacter.gender;
                age.innerHTML = yourCharacter.age;
                birthday.innerHTML = yourCharacter.birthday.mdy;
                photo.src = yourCharacter.photo;
                region.innerHTML = yourCharacter.region;
                title.innerHTML = yourCharacter.title;
                //log your character's information
            }

            if (radials[x].value === "Male") {
                var rand = Math.floor(Math.random() * males.length);
                var yourCharacter = males[rand];
                //console.log(males[rand]);
                name.innerHTML = yourCharacter.name + " " + yourCharacter.surname;
                gender.innerHTML = yourCharacter.gender;
                age.innerHTML = yourCharacter.age;
                birthday.innerHTML = yourCharacter.birthday.mdy;
                photo.src = yourCharacter.photo;
                region.innerHTML = yourCharacter.region;
                title.innerHTML = yourCharacter.title;
            }
            if (radials[x].value === "Others") {
                name.innerHTML = "There's only two!";
                gender.innerHTML = null;
                age.innerHTML = null;
                birthday.innerHTML = null;
                photo.src = null;
                region.innerHTML = null;
                title.innerHTML = null;
            }
        }
    }
    //the character you get when you call random
}

//for(var x = 0; x <= females.length - 1; x++) {  
//    // console.log(females[x].name + " " + females[x].surname + " FEMALE");
//
//};
//
//for(var x = 0; x <= males.length - 1; x++) {
//  // console.log(males[x].name + " " + males[x].surname + " MALE");
//};




//Call API to get random list of people with extra information
//can be gender specific
//can be region specific
//https://uinames.com
//?ext = extra info
//?amount=10 = more than 1
////more than 7 requests per minute will result in 1 min lockout
// function getNames() {
//    fetch('https://uinames.com/api/?ext&gender=male&amount=500&region=United+States')
//      .then(function (resp) {
//        return resp.json()
//      }) // Convert data to json
//      .then(function (data) {
//        console.log(data)
//      })
//      .catch(function () {
//        // catch any errors
//      });
//  }
//  getNames();