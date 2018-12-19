$(function(){
    var url = "http://api.openweathermap.org/data/2.5/weather?q=";
    var apiKey = "9361bd03ec7175e9eea92fdf7a717518";
    var toFah = function(temp){
        var cel = temp - 273.15
        var fah = Math.floor(cel * 1.8 + 32)
        return fah
    }

    $('#submit').on('click',function(){
        $('main').empty()
        var userInput = $('#city-input').val()
        var $weatherbox = $('<div>',{
            'id': 'weatherbox',
            'text': userInput,
        })

        $.get(url + userInput + '&appid=' + apiKey)
        .done((result)=>{
            var $temperature = $('<div>',{
                'id': 'temperature',
                'text': toFah(result.main.temp) + String.fromCharCode(176) + "F"
            })
            var $mintemp = $('<div>',{
                "id": 'mintemp',
                'text': 'Min Temp: ' + toFah(result.main.temp_min) + String.fromCharCode(176) + "F"
            })
            var $maxtemp = $('<div>',{
                "id": 'maxtemp',
                'text': 'Max Temp: ' + toFah(result.main.temp_max) + String.fromCharCode(176) + "F"
            })
            var $elements = $('<div>',{
                "id": 'elements',
                'text':  result.weather[0].description
            })
            console.log(result)
            $('main').append($weatherbox)
            $('#weatherbox').append($temperature)
            $('#weatherbox').append($elements)
            $('#weatherbox').append($mintemp)
            $('#weatherbox').append($maxtemp)
            
        })
    })

})//end

