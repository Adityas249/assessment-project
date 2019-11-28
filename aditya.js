function weather(){
    console.log("Hello");
    var city = document.getElementById("value").value;
    //var city = $("#value").val();
    console.log(city);
    var xmlhttp= new XMLHttpRequest();
 
    var url="http://api.openweathermap.org/data/2.5/weather?q="+city + "&APPID=a01af73599e449a631319b2478d67506";
    xmlhttp.open("GET", url, true);

    xmlhttp.send();
    xmlhttp.onreadystatechange=function()
    {
        if(this.readyState === 4 && this.status === 200)
        {
            var result=this.responseText;
            console.log(result);

          var x = JSON.parse(result);
         console.log(x.main.temp);
          document.getElementById("xyz").innerHTML = "<h3><u>Temperature:</u><h3> " + x.main.temp +" F";
          console.log(x.weather.description);
          document.getElementById("abc").innerHTML = "<h3><u>Wind Speed: </u><h3>" + x.wind.speed+" m/s";
          console.log(x.main.humidity);
          document.getElementById("def").innerHTML = "<h3><u>Humidity:</u><h3> " + x.main.humidity;
        }
    };


}


function getData(){
          var XHR=new XMLHttpRequest();
          XHR.onreadystatechange=function()
          {
           if(this.readyState==4 && this.status==200)
           {
              var data=this.responseText;
             var x=JSON.parse(data);
               document.getElementById("image").src=x.results[0].picture.medium;
            document.getElementById("name").value=x.results[0].name.first;
            document.getElementById("gender").value=x.results[0].gender;
              document.getElementById("city").value=x.results[0].location.city;
          }
        }
           XHR.open("GET","https://randomuser.me/api",true);
           XHR.send();

          }

          function showdiv()
          {

            document.getElementById("modal").style.display="block";
            getData();
          }
          function hidediv()
          {
              document.getElementById("modal").style.display="none";
          }




var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=ed689e0d8281404f86fc2ec8743c05fc';
        var req = new Request(url);
        
function getNews()
{
        fetch(req)
            .then(function(response) {
                return response.json();
            })
        .then(response => f1(response))
        .catch(err => {
            console.log(err);
        });
        
}

function f1(resp)
{
    console.log(resp);
    document.getElementById('loading').style.display='none';
    for(var i=0;i<resp.articles.length;i++)
    {
        $('#news').append(
        `<div class='col-3 mb-5 ml-4 mr-4'>
            <div class="card " style="width: 18rem;height:25rem">
                <img src=${resp.articles[i].urlToImage} class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">${resp.articles[i].title}</p>
                        <a href=${resp.articles[i].url} class="btn btn-primary">Read</a>
                    </div>
                </div>
            </div>
        </div>`
        )
    }
}