var query = window.location.search.substring(1);
//document.write(query);
var jwtToken = query.split('Authenticate:')[1];
//document.write(jwtToken);
try{
var obj=parseJwt(jwtToken);
document.write("Tokken Value" + JSON.stringify(obj));
}
catch(e){
document.write("incorrect token");
	}
function parseJwt(jwtToken) {
    return JSON.parse(window.atob(jwtToken.split('.')[1])); //parsing base64Url
};