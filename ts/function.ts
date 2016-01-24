/**
 * Functions.
 */

// Exemple 1.

function add(x: number, y: number): number {
    return x+y;
}

var myAdd1 = function(x: number, y: number): number { return x+y; };

var myAdd2: (baseValue:number, increment:number)=>number = 
    function(x, y) { return x+y; };
    
console.log(add(2, 3));
console.log(myAdd1(4, 5));
console.log(myAdd2(4, 5));

// Exemple 2.

function buildName1(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

// Exemple 3 : Rest Parameters.

function buildName2(firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

var employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
