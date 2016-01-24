/**
 * Types.
 */

// Boolean
var isDone: boolean = false;
// Number
var height: number = 6;
// String
var name: string = "bob";
name = 'smith';
// Array
var list:number[] = [1, 2, 3];
var list:Array<number> = [1, 2, 3];
// Enum
enum Color {Red, Green, Blue};
var c: Color = Color.Green;
// Any
var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// Void
function warnUser(): void {
    alert("This is my warning message");
}