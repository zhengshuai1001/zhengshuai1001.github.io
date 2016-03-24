var list = [];
 function  leftInData(){
 	var data = document.getElementById("val").value;
 	var reg = /^-?\d+$/;
 	if (!reg.test(data)) {
 		alert("请输入整数!");
 	} else {
 			list.unshift(data);		
 	}
 	document.getElementById("val").value = "";
 	upData();
 }
  function  leftOutData(){
  	if (list.length != 0) {
 		var data = list.shift(); 
 		alert("您将删除："+data);
  	} else {
  		alert("队列为空");
  	}		
 	document.getElementById("val").value = "";
 	upData();
 }
  function  rightInData(){
 	var data = document.getElementById("val").value;
 	var reg = /^-?\d+$/;
 	if (!reg.test(data)) {
 		alert("请输入整数!");
 	} else {
 		list.push(data);
 	}
 	document.getElementById("val").value = "";
 	upData();
 }
  function  rightOutData(){
  		if (list.length != 0) {
 		var data = list.pop();
 		alert("您将删除："+data);  			
  		} else {
  		alert("队列为空");	
  		}


 	document.getElementById("val").value = "";
 	upData();
 }
  function upData(){
  	var dom = "";
  	var index = 0;
  	for(var index = 0; index<list.length;index++) {
  		dom += "<li class='listData' listIndex='"+index+"' onclick ='deleteOne(this)'>"+list[index]+"</li>";
  	}
  	document.getElementById("list").innerHTML = "<ul>"+dom+"</ul>";
  }

  function deleteOne(strIndex){
  	var  sindex = strIndex.getAttribute("listIndex");
  	var index = parseInt(sindex);
  	alert("您将删除："+strIndex.innerHTML);
  	list.splice(index,1);
  	upData();
  }
  function init() {
  document.getElementById("left_in").onclick = leftInData;
  document.getElementById("right_in").onclick = rightInData;
  document.getElementById("left_out").onclick = leftOutData;
  document.getElementById("right_out").onclick = rightOutData;
  upData();
  }
  init();