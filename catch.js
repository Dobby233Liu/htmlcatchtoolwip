function GetText(){
    var request = new XMLHttpRequest();      
    var GCF_URL = document.getElementById("GENC_Input").value
    // credits http://www.cnblogs.com/charling/p/3579704.html
    request.open("GET", GCF_URL); 
    request.onreadystatechange = function(){  
    //if( request.readyState !== 4 ) return;        
    //if( timeout ) return;        
    //clearTimeout( timer );       
    if(request.status == 200){
        var WhatsGetOut = request.responseText;
    document.getElementById("GENC_Output").value = WhatsGetOut;        
    }   
    }   
    }
