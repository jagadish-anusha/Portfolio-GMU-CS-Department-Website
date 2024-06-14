function calculateAverageAndMaximum() 
{
    // Get the input value from the Data field
    const dataInput = document.getElementById('inputnumber');
    const dataValue = dataInput.value;

    // Check if the input is valid
    const validInput = validateDataInput(dataValue);

    if (validInput) 
    {
        // Split the input string into an array of numbers
        const numbers = dataValue.split(',').map(Number);

        // Calculate average and maximum
        const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
        const maximum = Math.max(...numbers);

        // Display the results in the Average and Maximum output fields
        document.getElementById('averageOutput').innerText = `${average.toFixed(2)}`;
        document.getElementById('maximumOutput').innerText = `${maximum}`;
    }
}

function validateDataInput(input) 
{
    // Validate that there are ten numbers between 1 and 100 
    const numbers = input.split(',').map(Number);

    if (numbers.length !== 10 || numbers.some(num => num < 1 || num > 100 || isNaN(num))) 
    {
        alert('Please enter ten comma-separated numbers between 1 and 100.');
        return false;
    }

    return true;
}


function validateForm() 
{
    // Validate Name field
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value;

    if (!/^[a-zA-Z\s]+$/.test(nameValue)) 
    {
        alert('Name should contain only alphabets.');
        nameInput.value = ''; // Clear the field
        nameInput.focus(); // Set focus to the field
        return false;
    }

    // Validate Email field
    const emailInput = document.getElementById('inputEmail');

    const emailValue = emailInput.value;
    if (!validateEmail(emailValue)) 
    {
        alert('Please enter a valid email address.');
        emailInput.value = ''; // Clear the field
        emailInput.focus(); // Set focus to the field
        return false;
    }

    // Validate Street Address
    const streetAddressInput = document.getElementById('inputStreetAddress');
    const streetAddressValue = streetAddressInput.value;

    if (!/^[a-zA-Z0-9\s]+$/.test(streetAddressValue)) 
    {
        alert('Invalid characters in Street Address. Please use alphanumeric and space.');
        streetAddressInput.value = ''; // Clear the field
        streetAddressInput.focus(); // Set focus to the field
        return false;
    }

    // Validate Zip
    const zipInput = document.getElementById('inputZip');
    const zipValue = zipInput.value;

    if (!/^\d{5}$/.test(zipValue)) 
    {
        alert('Invalid Zip code. Please enter a valid 5-digit Zip code.');
        zipInput.value = ''; // Clear the field
        zipInput.focus(); // Set focus to the field
        return false;
    }


    // Validate at least two checkboxes are checked
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    if (checkboxes.length < 2) 
    {
        alert('Please check at least two options in the "What did you like about the campus?" section.');
        return false;
    }

    // Validate a radio button is selected
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    if (radioButtons.length === 0) 
    {
        alert('Please select an option in the "What made you consider this university?" section.');
        return false;
    }


    // Validate Data field
    const dataInput = document.getElementById('inputnumber');
    const dataValue = dataInput.value;
    if (!validateDataInput(dataValue)) 
    {
        return false;
    }

    return true;
}

function validateEmail(email) 
{
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm() 
{
    // Validate the form before submitting
    if (validateForm()) 
    {
        // Your form submission logic goes here
        // For now, display an alert indicating successful submission
        alert('Form submitted successfully!');
    }
}


function resetForm() 
{
    // Clear all input fields and outputs
    // Use the form's reset method
    document.forms["survey-form"].reset();

    // Clear Average and Maximum outputs
    document.getElementById('averageOutput').innerText = '';
    document.getElementById('maximumOutput').innerText = '';
    location.reload();
}



