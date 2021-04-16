// Chapter 21 to 25

// var fName = prompt("Enter your First name");
// var lName = prompt("Enter your Last name");
// var fullName = fName + " " + lName;
// document.write(fullName);

// var favMobileModel = prompt("Enter your favorite mobile model");
// document.write("My favorite phone is: " + favMobileModel + "<br>");
// document.write("Length of srting: " + favMobileModel.length);

// var word = "Pakistani";
// document.write("String: " + word + "<br>");
// word = word.indexOf("n");
// document.write("Index of 'n': " + word);

// var word1 = "Hello World";
// document.write("String: " + word1 + "<br>");
// document.write("Last index of 'l': " + word1.lastIndexOf("l"));

// var char = "Pakistani";
// document.write("String: " + char + "<br>");
// document.write("Character at index 3: " + char.charAt(3));

// var fName = prompt("Enter your First name");
// var lName = prompt("Enter your Last name");
// document.write(fName.concat(" " + lName /**fName,lName,... */ ));

// var city1 = "Hyderabad";
// var city2 = city1.slice(0, city1) + "Islamabad";
// document.write("City: " + city1 + "<br>");
// document.write("After replacement: " + city2);
//2nd Method
// var city1 = "Hyderabad";
// document.write("City: " + city1 + "<br>");
// var city2 = city1.replace("Hyderabad", "Islamabad");
// document.write("After replacement: " + city2);

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var replace = message.replace(/and/g, "&")
// document.write(replace);

// var string = "472";
// document.write("Value: " + string + "<br>");
// document.write("Type: " + typeof(string) + "<br>");
// string = Number(string);
// document.write("Value: " + string + "<br>");
// document.write("Type: " + typeof(string));

// var input = prompt("Enter characters");
// document.write("User input: " + input + "<br>");
// var upperCase = input.toUpperCase(input)
// document.write("Upper case: " + upperCase + "<br>");

// var usserIn = prompt("Enter any name");
// document.write("User input: " + usserIn + "<br>");
// var title = usserIn.slice(0, 1);
// var finalTitle = title.toUpperCase();
// var remainning = usserIn.slice(1);
// remainning = remainning.toLowerCase()
// document.write("Title case: " + finalTitle + remainning)

// var num = 35.36;
// var tostring = num.toString();
// var jugaar = tostring.slice(0, 2) + tostring.slice(3, 5);
// document.write("Number: " + num + "<br>");
// document.write("Result: " + jugaar + "<br>");
// document.write("Type: " + typeof(num) + "<br>");
// document.write("Type: " + typeof(jugaar));

// var userName = prompt("Enter youur name");
// var not = "!";
// var dot = ".";
// var comma = ",";
// var atTheRate = "@";
// for (var i = 0; i < userName.length; i++) {
//     if (userName[i] === not || userName[i] === dot || userName[i] === comma || userName[i] === atTheRate) {
//         alert("Please Enter a valid username");
//     }
// }

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchItem = prompt("Enter the item you want");
// searchItem = searchItem.toLowerCase();
// var condtition = "no";
// for (var i = 0; i < bakery.length; i++) {
//     if (bakery[i] === searchItem) {
//         document.write(searchItem + " is <b>available</b> at index " + i + " in our bakery");
//         condtition = "yes";
//         break;
//     }
// }
// if (condtition === "no") {
//     document.write("We are sorry. " + searchItem + " is <b>not available</b> in our bakery");
// }



// var password = prompt("Enter your password");
// var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (var i = 0; i < a.length; i++) {
//     if (password.length >= 7 || password === a[i]) {
//         alert("Enter a valid password");
//         break;
//     }
// }




// var university = "University of Karachi";
// for (var i = 0; i < university.length; i++) {
//     document.write(university.charAt(i) + "</br>")
// }

// var yourInput = prompt("Enter a word");
// document.write("User input: " + yourInput + "</br>");
// document.write("Last character of input: " + yourInput.charAt(yourInput.length - 1));

// var text = "the quick brown fox jumps over the lazy dog";
// document.write(text.replace(/the/g, "the"));
// document.write("</br> There are " + text.replace.length + " occurrance(s)of word 'the'");