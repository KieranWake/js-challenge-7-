function absolute(n) {
    let newVal = (n < 0) ? n * -1 : n; 
    return newVal;
}

console.log(absolute(-10));

//What is the abs function? 

//Math.abs() function returns the absolute value of a number. 

// The function is particularly useful for converting negative numbers into positive numbers -
// Taking this into account. To recreate the math.abs function, we can times a negative -
// by a negative to equal a positive for the same functionality. Lets pseudocode! 

//declare a let variable which will store our data. 
//State that 0 is greater than our parameter n (places in the negative) 
//Use conditional statement to check if num is multiplied by a negative one -
// if so, return it's value, converted to a positive. 
