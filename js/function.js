/**
 * Functions.
 */
// Exemple 1.
function add(x, y) {
    return x + y;
}
var myAdd1 = function (x, y) { return x + y; };
var myAdd2 = function (x, y) { return x + y; };
console.log(add(2, 3));
console.log(myAdd1(4, 5));
console.log(myAdd2(4, 5));
// Exemple 2.
function buildName1(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
// Exemple 3 : Rest Parameters.
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
