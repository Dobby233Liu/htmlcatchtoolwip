function GetText(url){
    var request = new XMLHttpRequest();       
    request.open("GET", url);    
    request.onreadystatechange = function(){  
    //if( request.readyState !== 4 ) return;        
    //if( timeout ) return;        
    //clearTimeout( timer );       
    if(request.status === 200){
    return request.responseText;        
    }   
    }    
    request.send(null);
    }
