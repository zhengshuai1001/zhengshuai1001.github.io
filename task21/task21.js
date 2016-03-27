var list = [];
var list2 = [];


  function  rightInData(inputData){
      var domLi = document.getElementById("tagDamo").getElementsByTagName("li");
      var dataArr = search(domLi,inputData);
      if (dataArr == null) {
 	  document.getElementById("tagInput").value = "";      	
        return ;
      } else {
        if (dataArr != "") {
      list.push(dataArr);           
        }         	
 	document.getElementById("tagInput").value = "";
 	upData();       
      }
 }

 
   function upData(){
  	var dom = "";
  	var index = 0;
  	for(var index = 0; index<list.length;index++) {
  		dom += "<li listIndex='"+index+"' onclick ='deleteOne(this)'>"+list[index]+"</li>";
  	}
  	document.getElementById("tagDamo").innerHTML = "<ul>"+dom+"</ul>";
  } 
 
   function deleteOne(strIndex){
  	var  sindex = strIndex.getAttribute("listIndex");
  	var index = parseInt(sindex);
  	list.splice(index,1);
  	upData();
  }
   function find(strFind,strData){
        if(strFind == strData){
          return 1;
        }
      return -1;
  }
  function search(domLi,strFind){
        // var domLi = document.getElementById("tagDamo").getElementsByTagName("li");
        for (var i = 0; i < domLi.length; i++) {
          var strData = domLi[i].innerHTML ||"";
          // var strData = list[i];
          var index = find(strFind,strData);
          if (index>0) {
            return null;
          } 
        }
        return strFind;
  }

  function tagKeyup(event){
  var event = event || window.event;
  if (event.keyCode ==13 || event.keyCode ==32) {
  		var data = document.getElementById("tagInput").value.trim();
	  	if(list.length>9){
	  		list.shift();
	  	}
		rightInData(data);	  		
  	} 
    if (event.keyCode ==188) {
  		var data = document.getElementById("tagInput").value.trim();
  		var strData = data.substring(0,data.length-1);
	  	if(list.length>9){
	  		list.shift();
	  	}
		rightInData(strData);	  		
  	}	
  }

  function inputData2(){
  var data = document.getElementById("hobbyInput").value;
  if (data) {
  var dataArr = data.trim().split(/[\n\r\t\s,，、;；]+/g);
  return dataArr;      
  } else {
    alert("输入不能为空！");
    return;
  }  
}
    function  rightInData2(){
      var domLi = document.getElementById("hobbyDamo").getElementsByTagName("li");      
      var dataArr = inputData2();
      if (dataArr == null) {
        return ;
      } else {
      for (var i = 0; i < dataArr.length; i++) {
        var data = search(domLi,dataArr[i]);
        if(data != null){
              if (list2.length > 9) {
              list2.shift();
            } 
            list2.push(dataArr[i]);           
        }
 
      }  	
 	document.getElementById("hobbyInput").value = "";
 	upData2();        
      }
 }
   function upData2(){
  	var dom = "";
  	var index = 0;
  	for(var index = 0; index<list2.length;index++) {
  		dom += "<li>"+list2[index]+"</li>";
  		// console.log()
  	}
  	document.getElementById("hobbyDamo").innerHTML = "<ul>"+dom+"</ul>";
  }
function init(){
	document.getElementById("tagInput").onkeyup = tagKeyup;
    document.getElementById("hobbySubmit").onclick = rightInData2;
	upData();
}
init();