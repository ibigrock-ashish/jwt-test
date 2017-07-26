var query = window.location.search.substring(1);
//document.write(query);
var jwtToken = query.split('Authorization:')[1];
//document.write(jwtToken);Authorization
try{
var obj=parseJwt(jwtToken);
var hasMatch =false;

for(var admin in obj){
if(obj.hasOwnProperty(admin))
	if(obj.admin===true){
   		hasMatch = true;
   		break;
 	}
}

if(hasMatch===true){
	document.write("PASS");
}else{
	document.write("Invalid Token");
	}
}
catch(e){
	document.write("incorrect token");
	}


function parseJwt(jwtToken) {
    return JSON.parse(window.atob(jwtToken.split('.')[1])); //parsing base64Url
};