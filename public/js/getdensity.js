function ajaxDensity() {
  $.get( '/getDensity', function(data) {
  	var div= "<tr scope='row'>";
  	data=JSON.parse(data);
  	var frame=data["frameno"];
<<<<<<< HEAD
  	var img= "<td><img src='http://ec2-52-11-214-215.us-west-2.compute.amazonaws.com:8000/data/frame"+frame+".jpg' height='200' width='200'></td>";
=======
  	var img= "<td align='center'><img src='http://localhost:8000/data/frame"+frame+".jpg' height='200' width='200'></td>";
>>>>>>> f7e0e20bb6acce2e2214aabbfbc15cf198d1f48b
  	div=div+img;
	div=div+"<td>"+data["people"]+"</td>";
	div=div+"</tr>";
	div=$(div);
	div.hide();
	$('#resultlist:first').after(div);  
	div.fadeIn("slow");
   });
}
