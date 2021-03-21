//1. Create an instance of xml http request
var request = new XMLHttpRequest();
//2. Create a connection(request.open('http method','URL',true))
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3. Send the request
request.send();
//4. Load the response this function is triggered only when the data is retrived
request.onload=function() {
    var data = JSON.parse(this.response);
    //JSON.stringify();
    //console.log(data);
    for(var i=0; i<data.length;i++) {
        console.log(data[i].name);
    }
}