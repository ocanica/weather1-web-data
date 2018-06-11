$(function render() {

        setTimeout(function() {
            
            var src = '<table>';

            $.ajax({
                url: 'weather.json',
                dataType: 'json',
                type: 'get',
    
                success: function (response) {
    
                    src += '<thead><tr>';
                    src += '<th>CITY</th>';
                    src += '<th>CONDITIONS</th>';
                    src += '<th>TEMP.</th>';
                    src += '<th>WIND SPEED</th>';
                    src += '<th>WIND DIRECTION</th>';
                    src += '<th>WIND CHILL</th>';
                    src += '</tr></thead>';
                    src += '<tbody>';
    
                    $('#response').html('');
    
                    $.each(response.weather_arr, function (index) {
    
                        src += '<tr>';
                        src += '<td>' + response.weather_arr[index].city_obj.city_name + '</td>';
                        src += '<td><img src="./weather_icons/' + response.weather_arr[index].current_conditions + '.png" alt="' + response.weather_arr[index].current_conditions + '"></td>';
                        src += '<td>' + response.weather_arr[index].temperature + '&deg;C</td>';
                        src += '<td>' + response.weather_arr[index].wind_obj.wind_speed + 'mph</td>';
                        src += '<td>' + response.weather_arr[index].wind_obj.wind_direction + '</td>';
                        src += '<td>' + response.weather_arr[index].wind_obj.wind_chill_factor + '&deg;C</td>';
    
                        src += '</tr>';
    
                    });
    
                    src += '</tbody></table>';
    
                    $('#response').append(src);

                    render();
                },
    
                error: function(jqxhr, status) {
                    $('#response').html('<p>An error has occured: ' + jqxhr.status + ' ' +jqxhr.statusText + '</p>');
                }
    
            });

        }, 500);
});