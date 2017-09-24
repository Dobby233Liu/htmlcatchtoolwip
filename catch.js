function main(){
    var request = new XMLHttpRequest();      
    var GCF_URL = document.getElementById("url").value;
    // credits http://www.cnblogs.com/charling/p/3579704.html
    request.open("GET", GCF_URL); 
    // orig fn start
    // its showtime
        var WhatsGetOut = request.responseText;
    document.getElementById("sc").value = WhatsGetOut;    
        //    Got an SC (Source)
    // end
    // orig fn end
    }
