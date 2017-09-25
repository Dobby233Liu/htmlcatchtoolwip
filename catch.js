function mainc(){
        var request = new XMLHttpRequest();      
        var URL = String(document.getElementById("url").value);
    // credits http://www.cnblogs.com/charling/p/3579704.html
    request.open("GET", URL);
        request.send(null);
                            var WhatsGetOut = String(request.responseText);
    // orig fn start
    // its showtime
    document.getElementById("sc").innerHTML = String(WhatsGetOut);
        //    Got an SC (Source)
    // end
    // orig fn end
                }