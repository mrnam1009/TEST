function draw_table(){
	
	let row=$("#row").val();
	let col=$("#col").val();
	let table="<table border='1'>";
		
	for(var i=1;i<=row;i++){
		table+="<tr>";
		for(var j=1;j<=col;j++){
			if(i%2==0){
				table+="<td class='even'>Row "+i+", Column "+j+"</td>";
			}else{
				table+="<td>Row "+i+", Column "+j+"</td>";
			}
		}
		table+="</tr>"
	}
	table+="</table>";
	
	document.getElementById("result").innerHTML=table;
}