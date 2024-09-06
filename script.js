const button = document.getElementById("palindrome-check");
button.addEventListener("click", function palindromechecker() {
    const value = document.getElementById("string").value;
    const inputvalue = value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const arrayvalue = inputvalue.split('');
    const reversevalue = arrayvalue.reverse();
    const reversedarray = reversevalue.join('');



    if (inputvalue === reversedarray) {
        alert("The string is a palindrome: " + reversedarray);
    } else {
        alert("The given string is not a palindrome.");
    }
});
