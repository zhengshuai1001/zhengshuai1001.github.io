/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: -1,
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
  var dom="";
  for(var i in chartData){
    var rgb1 = parseInt(Math.random()*256);
    var rgb2 = parseInt(Math.random()*256);
    var rgb3 = parseInt(Math.random()*256);
    dom+="<div class='list' style='height:"+chartData[i]+"px;background-color:"+rgb(rgb1,rgb2,rgb3)+"'></div>";
  }
  document.getElementsByClassName("aqi-chart-wrap")[0].innerHTML = dom;
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  // 确定是否选项发生了变化 

  // 设置对应数据

  // 调用图表渲染函数
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 

  // 设置对应数据

  // 调用图表渲染函数
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {

}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项

  // 给select设置事件，当选项发生变化时调用函数citySelectChange

}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
  var citySelect = document.getElementById("city-select").value;
  switch (pageState.nowGraTime){
    case "day":
      chartData = aqiSourceData[citySelect];
      break;
    case "week":
      var count = 0,sum=0,week =1,nweweek;     
      for (var j in aqiSourceData[citySelect]){
        nweweek = new Date(j).getDate();
        count++;
        if(nweweek == 6){
            sum+=aqiSourceData[citySelect][j];
            chartData["周次："+week] = parseInt(sum/count);
            count = 0;
            sum = 0;
            week++;
        }else{
            sum+=aqiSourceData[citySelect][j];
        }
      }
            chartData["周次："+week] = parseInt(sum/count);
            break;
    case "month":
        var count= 0,sum= 0,month=-1,date;
        for(var j in aqiSourceData[city]){
            date=new Date(j);
            if(month==-1){
                month=date.getMonth()+1;
            }else if(date.getMonth()+1!=month) {
                chartData["月份："month]=parseInt(sum/count);
                month = date.getMonth()+1;
                count=0;
                sum=0;
            }
            count++;
            sum+=aqiSourceData[city][j];
        }
        chartData["月份："month]=parseInt(sum/count);
        break;
  }
  renderChart();
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}

init();