/**
 * Types.
 */
// Boolean
var isDone = false;
// Number
var height = 6;
// String
var name = "bob";
name = 'smith';
// Array
var list = [1, 2, 3];
var list = [1, 2, 3];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// Void
function warnUser() {
    alert("This is my warning message");
}
