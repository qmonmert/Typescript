/**
 * Generics.
 */

// Exemple 1.

function identity<T>(arg: T): T {
    return arg;
}

var output1 = identity<string>("myString");
var output2 = identity("myString");