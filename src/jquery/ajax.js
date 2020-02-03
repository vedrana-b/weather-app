$(document).ready(function () {
    let lat;
    let lon;
    //Get info depending on browser geolocation
    function currentTemp(position) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                $('main').css('display', 'block');
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=c0a18f84d70381ae75214f6103f85f7e`;
                //Get info depending on browser geolocation
                $.ajax({
                    url: url,
                    type: "GET",
                    success: function (data) {
                        $(".accu-temp__city").html(data.name);
                        $(".accu-temp__degrees").html(data.main.temp + "&deg");
                        let description = data.weather.map(a => a.description);
                        let icon = data.weather.map(a => a.icon);
                        $(".accu-temp__desc").html(description);
                        $(".temp__icon").attr('src', `http://openweathermap.org/img/w/${icon}.png`);
                        $(".max-temp").html(data.main.temp_max + '&deg');
                        $(".min-temp").html(data.main.temp_min + '&deg');
                        $(".wind").html(data.wind.speed + ' km/h');
                        $(".humidity").html(data.main.humidity + '%');


                    }
                });

                let url3 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=c0a18f84d70381ae75214f6103f85f7e`
                $.ajax({
                    url: url3,
                    type: "GET",
                    success: function (data) {
                        let todayDate = new Date();
                        let today = todayDate.getDate();
                       // console.log(today);
                        let newdata1 = data.list.filter(obj => new Date(obj.dt * 1000).getUTCHours() === 12 & new Date(obj.dt * 1000).getUTCDate() === today + 1);
                        let newdata2 = data.list.filter(obj => new Date(obj.dt * 1000).getUTCHours() === 12 & new Date(obj.dt * 1000).getUTCDate() === today + 2);
                        let newdata3 = data.list.filter(obj => new Date(obj.dt * 1000).getUTCHours() === 12 & new Date(obj.dt * 1000).getUTCDate() === today + 3);
                        let day2 = newdata1[0];
                        let day3 = newdata2[0];
                        let day4 = newdata3[0];
                        //console.log(day4);
                        let icon2 = day2.weather[0].icon;
                        let icon3 = day3.weather[0].icon;
                        let icon4 = day4.weather[0].icon;
                      
                        let days = ['Sunday', 'Monday', 'Tuesay', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                        let dayName2 = days[new Date(day2.dt * 1000).getDay()];
                        // console.log(new Date(obj.dt * 1000).getUTCDay());
                        let dayName3 = days[new Date(day3.dt * 1000).getDay()];
                        let dayName4 = days[new Date(day4.dt * 1000).getDay()];
                        $(".daily-icon__2").attr('src', 'http://openweathermap.org/img/w/' + icon2.toString() + '.png');
                        $(".daily-icon__3").attr('src', 'http://openweathermap.org/img/w/' + icon3.toString() + '.png');
                        $(".daily-icon__4").attr('src', 'http://openweathermap.org/img/w/' + icon4.toString() + '.png');
                        $(".day__2").html(dayName2);
                        $(".day__3").html(dayName3);
                       $(".day__4").html(dayName4);
                    }
                });
            });
        } else {

            alert("Geolocation is not supported by this browser.");
        }
    }
    currentTemp();

    // Get info depending on city name
    let city;
    $(".js-search-input").keyup(function (e) {
        if (e.keyCode == 13) {
            city = $(this).val();
            getCitiesTemp(city);

        }
    });
    $(".search-button").click(function (e) {
        city = $(".js-search-input").val();
        getCitiesTemp(city);
    });


    function getCitiesTemp() {
        let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=c0a18f84d70381ae75214f6103f85f7e`;
        $.ajax({
            url: url2,
            type: "GET",
            success: function (result) {
                $(".accu-temp__city").html(result.name);
                $(".accu-temp__degrees").html(result.main.temp + '&deg');
                let description = result.weather.map(b => b.description);
                let icon = result.weather.map(b => b.icon);
                $(".temp__icon").attr('src', `http://openweathermap.org/img/w/${icon}.png`);
                $(".accu-temp__desc").html(description);
                $(".max-temp").html(result.main.temp_max + '&deg');
                $(".min-temp").html(result.main.temp_min + '&deg');
                $(".wind").html(result.wind.speed + ' km/h');
                $(".humidity").html(result.main.humidity + '%');
            }
        });


        let url4 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=c0a18f84d70381ae75214f6103f85f7e`;
        $.ajax({
            url: url4,
            type: "GET",
            success: function (data) {
                let todayDate = new Date();
                let today = todayDate.getDate();
                let newdata1 = data.list.filter(obj => new Date(obj.dt * 1000).getUTCHours() === 12 & new Date(obj.dt * 1000).getUTCDate() === (today + 1));
                let newdata2 = data.list.filter(obj => new Date(obj.dt * 1000).getUTCHours() === 12 & new Date(obj.dt * 1000).getUTCDate() === today + 2);
                let newdata3 = data.list.filter(obj => new Date(obj.dt * 1000).getUTCHours() === 12 & new Date(obj.dt * 1000).getUTCDate() === today + 3);
                let day2 = newdata1[0];
                let day3 = newdata2[0];
                let day4 = newdata3[0];
                let icon2 = day2.weather[0].icon;
                let icon3 = day3.weather[0].icon;
                let icon4 = day4.weather[0].icon;
                let days = ['Sunday', 'Monday', 'Tuesay', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                let dayName2 = days[new Date(day2.dt * 1000).getDay()];
                let dayName3 = days[new Date(day3.dt * 1000).getDay()];
                let dayName4 = days[new Date(day4.dt * 1000).getDay()];
                $(".daily-icon__2").attr('src', 'http://openweathermap.org/img/w/' + icon2.toString() + '.png');
                $(".daily-icon__3").attr('src', 'http://openweathermap.org/img/w/' + icon3.toString() + '.png');
                $(".daily-icon__4").attr('src', 'http://openweathermap.org/img/w/' + icon4.toString() + '.png');
                $(".day__2").html(dayName2);
                $(".day__3").html(dayName3);
                $(".day__4").html(dayName4);
            }
        });
    }
});