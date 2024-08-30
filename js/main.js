window.onload = loaded;

/**
 * function that will be run when the browser is finished loading.
 */
function loaded() {
    // get the button by its ID
    const button = document.getElementById("helloButton");

    //event listener to the button for the click event
    button.addEventListener("click", function() {
        // call the sayHello function and display the result in an alert
        alert(sayHello());
    });
}

/**
 * this function returns the string 'Hello, thanks for viewing my about me page :)'
 * @return {string} custom message
 */
export function sayHello() {
    return 'Hello, thanks for viewing my about me page :)';
}
