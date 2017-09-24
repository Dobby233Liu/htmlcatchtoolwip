function GetText(){
    var request = new XMLHttpRequest();       
    request.open("GET", document.getElementById("GENC_Input").value);    
    request.onreadystatechange = function(){  
    //if( request.readyState !== 4 ) return;        
    //if( timeout ) return;        
    //clearTimeout( timer );       
    if(request.status === 200){
    document.getElementById("GENC_Output").value = request.responseText;        
    }   
    }    
    request.send(null);
    }
