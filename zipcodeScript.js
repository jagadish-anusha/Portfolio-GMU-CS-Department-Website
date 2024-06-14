function getCityAndState() {
    var zipcode = document.getElementById('inputZip').value;
    var request = new XMLHttpRequest();

    request.open('GET', 'zipcodes.json', true);

    request.onload = function() 
    {
        if (request.status === 200) 
        {
            var data = JSON.parse(request.responseText);
            var found = false;

            for (var i = 0; i < data.zipcodes.length; i++) 
            {
                if (data.zipcodes[i].zip === zipcode) 
                {
                    document.getElementById('outputCity').innerText =  data.zipcodes[i].city;
                    document.getElementById('outputState').innerText = data.zipcodes[i].state;
                    found = true;
                    break;
                }
            }
            if (!found) 
            {
                alert('Invalid zip code');
                document.getElementById('outputCity').innerText =  '';
                document.getElementById('outputState').innerText = '';
            }
        }
    };
    request.send();
}

document.getElementById('inputZip').addEventListener('blur', getCityAndState);
