function GetText(){
    var request = new XMLHttpRequest();      
    var GCF_URL = document.getElementById("GENC_Input").value
    // credits? later
    request.open("GET", GCF_URL); 
    request.onreadystatechange = function(){  
    //if( request.readyState !== 4 ) return;        
    //if( timeout ) return;        
    //clearTimeout( timer );       
    if(request.status === 200){
    document.getElementById("GENC_Output").value = request.responseText;        
    }   
    }   
    }
