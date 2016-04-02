var list = [];

function inputData(){
  var data = document.getElementById("val").value;
  if (data) {
  var dataArr = data.trim().split(/[\n\r\t\s,，、;；]+/g);
  return dataArr;      
  } else {
    alert("输入不能为空！");
    return;
  }
  
}
 function  leftInData(){
      var dataArr = inputData();
      if (dataArr) {
      for (var i = 0; i < dataArr.length; i++) {
      list.unshift(dataArr[i]);         
      } 
  document.getElementById("val").value = "";
  upData();
      } 
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
      var dataArr = inputData();
      if (dataArr == null) {
        return ;
      } else {
      for (var i = 0; i < dataArr.length; i++) {
      list.push(dataArr[i]);         
      }  	
 	document.getElementById("val").value = "";
 	upData();
        
      }
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
  	// alert("您将删除："+strIndex.innerHTML);
  	list.splice(index,1);
  	upData();
  }
  function find(strFind,strData){
    var sizeFind = strFind.length;
    var sizeData = strData.length;
    var temp;
    if(sizeData >= sizeFind){
      for (var i = 0; i <= sizeData - sizeFind +1; i++) {
        temp = strData.substring(i,i+sizeFind);
        if(temp == strFind){
          return 1;
        }
      }
      return -1;
    }
      return -1;
  }
  function search(){
    var strFind = document.getElementById("input_serach").value;
    if (strFind == "") {
      alert("查询关键字不能为空！");
    } else {
      if (list.length == 0) {
        alert("队列为空！");
      } else {
        var domLi = document.getElementById("list").getElementsByTagName("li");
        for (var i = 0; i < domLi.length; i++) {
          var strData = domLi[i].innerHTML ||"";
          var index = find(strFind,strData);
          if (index>0) {
            domLi[i].style.backgroundColor ="green";
          } else {
            domLi[i].style.backgroundColor ="red";
          }
        }
      }
    }
  }
  function init() {
  document.getElementById("left_in").onclick = leftInData;
  document.getElementById("right_in").onclick = rightInData;
  document.getElementById("left_out").onclick = leftOutData;
  document.getElementById("right_out").onclick = rightOutData;
  document.getElementById("serach").onclick = search;
  upData();
  }
  init();