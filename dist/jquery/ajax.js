$(document).ready((function(){let t,e,a;function n(){let t=`https://api.openweathermap.org/data/2.5/weather?q=${a}&units=metric&APPID=c0a18f84d70381ae75214f6103f85f7e`;$.ajax({url:t,type:"GET",success:function(t){$(".accu-temp__city").html(t.name),$(".accu-temp__degrees").html(t.main.temp+"&deg");let e=t.weather.map(t=>t.description),a=t.weather.map(t=>t.icon);$(".temp__icon").attr("src",`http://openweathermap.org/img/w/${a}.png`),$(".accu-temp__desc").html(e),$(".max-temp").html(t.main.temp_max+"&deg"),$(".min-temp").html(t.main.temp_min+"&deg"),$(".wind").html(t.wind.speed+" km/h"),$(".humidity").html(t.main.humidity+"%")}});let e=`https://api.openweathermap.org/data/2.5/forecast?q=${a}&units=metric&APPID=c0a18f84d70381ae75214f6103f85f7e`;$.ajax({url:e,type:"GET",success:function(t){let e=(new Date).getDate(),a=t.list.filter(t=>12===new Date(1e3*t.dt).getUTCHours()&new Date(1e3*t.dt).getUTCDate()===e+1),n=t.list.filter(t=>12===new Date(1e3*t.dt).getUTCHours()&new Date(1e3*t.dt).getUTCDate()===e+2),i=t.list.filter(t=>12===new Date(1e3*t.dt).getUTCHours()&new Date(1e3*t.dt).getUTCDate()===e+3),r=a[0],o=n[0],m=i[0],p=r.weather[0].icon,d=o.weather[0].icon,c=m.weather[0].icon,s=["Sunday","Monday","Tuesay","Wednesday","Thursday","Friday","Saturday"],h=s[new Date(1e3*r.dt).getDay()],g=s[new Date(1e3*o.dt).getDay()],l=s[new Date(1e3*m.dt).getDay()];$(".daily-icon__2").attr("src","http://openweathermap.org/img/w/"+p.toString()+".png"),$(".daily-icon__3").attr("src","http://openweathermap.org/img/w/"+d.toString()+".png"),$(".daily-icon__4").attr("src","http://openweathermap.org/img/w/"+c.toString()+".png"),$(".day__2").html(h),$(".day__3").html(g),$(".day__4").html(l)}})}navigator.geolocation?navigator.geolocation.getCurrentPosition((function(a){$("main").css("display","block"),t=a.coords.latitude,e=a.coords.longitude;let n=`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${e}&units=metric&APPID=c0a18f84d70381ae75214f6103f85f7e`;$.ajax({url:n,type:"GET",success:function(t){$(".accu-temp__city").html(t.name),$(".accu-temp__degrees").html(t.main.temp+"&deg");let e=t.weather.map(t=>t.description),a=t.weather.map(t=>t.icon);$(".accu-temp__desc").html(e),$(".temp__icon").attr("src",`http://openweathermap.org/img/w/${a}.png`),$(".max-temp").html(t.main.temp_max+"&deg"),$(".min-temp").html(t.main.temp_min+"&deg"),$(".wind").html(t.wind.speed+" km/h"),$(".humidity").html(t.main.humidity+"%")}});let i=`https://api.openweathermap.org/data/2.5/forecast?lat=${t}&lon=${e}&units=metric&APPID=c0a18f84d70381ae75214f6103f85f7e`;$.ajax({url:i,type:"GET",success:function(t){let e=(new Date).getDate(),a=t.list.filter(t=>12===new Date(1e3*t.dt).getUTCHours()&new Date(1e3*t.dt).getUTCDate()===e+1),n=t.list.filter(t=>12===new Date(1e3*t.dt).getUTCHours()&new Date(1e3*t.dt).getUTCDate()===e+2),i=t.list.filter(t=>12===new Date(1e3*t.dt).getUTCHours()&new Date(1e3*t.dt).getUTCDate()===e+3),r=a[0],o=n[0],m=i[0],p=r.weather[0].icon,d=o.weather[0].icon,c=m.weather[0].icon,s=["Sunday","Monday","Tuesay","Wednesday","Thursday","Friday","Saturday"],h=s[new Date(1e3*r.dt).getDay()],g=s[new Date(1e3*o.dt).getDay()],l=s[new Date(1e3*m.dt).getDay()];$(".daily-icon__2").attr("src","http://openweathermap.org/img/w/"+p.toString()+".png"),$(".daily-icon__3").attr("src","http://openweathermap.org/img/w/"+d.toString()+".png"),$(".daily-icon__4").attr("src","http://openweathermap.org/img/w/"+c.toString()+".png"),$(".day__2").html(h),$(".day__3").html(g),$(".day__4").html(l)}})})):alert("Geolocation is not supported by this browser."),$(".js-search-input").keyup((function(t){13==t.keyCode&&(a=$(this).val(),n())})),$(".search-button").click((function(t){a=$(".js-search-input").val(),n()}))}));