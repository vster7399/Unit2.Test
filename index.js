/* TDD

Unit Tests
1. A multiplication function:
...pruduct of two numbers input is expected (multiply)
...each number will be a whole number
...output would equal same thing it would equal if put into a calculator to multiply
...output = x * y

const multiply = (x,y) => {
    const product = x * y;
    return product;
}
    multiply (6,8); 
EXPECTED TO PRINT: 48

2. A concatOdds Function:
...input (arguments) two int arrays
...negative numbers should still print as long as they are odd
...multiples will print one time
...inputs only whole numbers
...output single array (odd numbers, ascending, comprised of both arrays)
...output = 1, 3, 9, 15

intA = [9, 8, 7];
intB = [9, 9, 6, 28, 17, -23];
intC = [(intA) + (intB)];
intC = odds.concat(evens);
    console.log(intC);
EXPECTED TO PRINT: [9, 7, 17, -23]

Fucntional Tests
1. A shopping cart checkout feature:
...checkout as a guest or logged in user
...with an empty cart, prompt them to keep shopping

...person proceeds to checkout
if no items, prompt them to check out deals on the website
if there are items in the cart, ask if the user wants to login to their account to get their rewards
offer to login, create a new account, or contniue as a guest
    -login option: prompt to enter username/password then redirect back to cart under their profile
    -create new account option: prompt with a 20% off first order offer, prompt to create a username/password then redirect them back to cart under the new profile
    -continue as a guest option: promt them to continue checking out and offer another chance to create a profile once email is entered
