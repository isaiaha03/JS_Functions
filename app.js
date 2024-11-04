




// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count)
{
    if (count < 0)
    {
        console.log("Count isn't positive.");
        return;
    }
    for (i = 0; i <= count; i++)
    {
        if(i % 2 == 1)
        {
            console.log(i);
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age)
{
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age < 16)
    {
        console.log(belowSixteen);
    }
    else
    {
        console.log(aboveSixteen);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y)
{
    if (x === 0 && y === 0)
    {
        console.log("The point (0, 0) is at the origin.");
    }
    else if (x === 0)
    {
        console.log(`The point (${x}, ${y}) lies on the y-axis.`);
    }
    else if (y === 0)
    {
        console.log(`The point (${x}, ${y}) lies on the x-axis.`);
    }
    else if (x > 0 && y > 0)
    {
        console.log(`The point (${x}, ${y}) lies in Quadrant 1.`);
    }
    else if (x < 0 && y > 0)
    {
        console.log(`The point (${x}, ${y}) lies in Quadrant 2.`);
    }
    else if (x < 0 && y < 0)
    {
        console.log(`The point (${x}, ${y}) lies in Quadrant 3.`);
    }
    else if (x > 0 && y < 0)
    {
        console.log(`The point (${x}, ${y}) lies in Quadrant 4.`);
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleType(a, b, c)
{
    if (a + b <= c || a + c <= b || b + c <= a)
    {
        return "Not a valid triangle: The sum of any two sides must be greater than the third."
    }
    if (a == b && b == c)
    {
        return "Equilateral triangle: All sides are equal.";
    }
    else if (a == b || a == c || b == c)
    {
        return "Isosceles triangle: Two sides are equal.";
    }
    else
    {
        return "Scalene triangle: All sides are different.";
    }
}

