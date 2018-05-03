function ajaxDensity() {
  $.get( '/getDensity', function(data) {
  	var div= "<tr>";
  	data=JSON.parse(data);
  	var frame=data["frameno"];
  	var img= "<td><img src='http://ec2-52-11-214-215.us-west-2.compute.amazonaws.com:8000/data/frame"+frame+".jpg' height='200' width='200'></td>";
  	div=div+img;
	div=div+"<td>"+data["people"]+"</td>";
	div=div+"</tr>";
	div=$(div);
	div.hide();
	$('#resultlist:first').after(div);  
	div.fadeIn("slow");
   });
}
