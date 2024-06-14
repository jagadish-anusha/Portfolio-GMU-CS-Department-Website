function getGreeting() {
    var today = new Date();
    var hour = today.getHours();

    if (hour >= 5 && hour < 12) {
        return "Good Morning";
    }
    else if (hour >= 12 && hour < 18) {
        return "Good Afternoon";
    }
    else {
        return "Good Evening";
    }
}

function setCookie(name, value, minutes) 
{
    var expires = "";
    if (minutes) 
    {
        var date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000)); 
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) 
{
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) 
    {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function displayGreeting() 
{
    var userName = getCookie("userName");
    if (userName) {
        var greeting = getGreeting();
        alertWithReset(greeting + " " + userName + ", welcome to SWE642 Survey");
    }
    else {
        promptForName();
    }
}

function alertWithReset(message) 
{
    var reset = confirm(message + "\n\nDo you want to reset your name?");
    if (reset) {
        resetNameAlert();
    }
}

function promptForName() 
{
    var userName = prompt("Please enter your name:");
    if (userName) 
    {
        setCookie("userName", userName, 60); 
        displayGreeting();
    }
}

function resetNameAlert() 
{
    var storedName = getCookie("userName");
    var userName = prompt("Please enter your name:");
    if (userName) 
    {
        setCookie("userName", userName, 60); 
        if (userName !== storedName) 
        {
            alert("Name updated. The page will now reload.");
            location.reload(); // Reload the page
        }
    }
}