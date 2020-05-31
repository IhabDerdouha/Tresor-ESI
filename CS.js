    function Year3_Over (){
    document.getElementById("Year3_text").innerHTML = "1ère Année";
    document.getElementById("Year3_text").style = "width: 160px";
    document.getElementById("Year3_bg").style = "background-color: #02a5dc; color: #02a5dc; width: 160px; transition: width 0.5s;";
  }
  function Year3_Out (){
    document.getElementById("Year3_text").innerHTML = "1";
    document.getElementById("Year3_text").style = "width: 40px";
    document.getElementById("Year3_bg").style = "background-color: #eddf0c; color: #eddf0c; width: 40px; transition: width 0.25s;";
  }
  function Year3_Click(){
    document.getElementById("Pics").style = "opacity: 0; transition: opacity 0.25s;";
    document.getElementById("man").style = "left: 50%; transition: left 0.25s;";
    document.getElementById("Man_Obj").style = "left: 50%; transition: left 0.25s;";
    document.getElementById("woman").style = "left: 70%; transition: left 0.25s;";
    document.getElementById("Woman_Obj1").style = "left: 78%; transition: left 0.25s;";
    document.getElementById("Woman_Obj2").style = "left: 84%; transition: left 0.25s;";
    document.getElementsByClassName("YearContent")[0].style.display = "none";
    document.getElementsByClassName("YearContent")[1].style.display = "none";
    document.getElementsByClassName("YearContent")[2].style.display = "block";
    document.getElementsByClassName("YearContent")[3].style.display = "none";
    document.getElementsByClassName("YearContent")[4].style.display = "none";
    document.getElementsByClassName("YearContent")[5].style.display = "none";
    document.getElementsByClassName("YearContent")[6].style.display = "none";
    document.getElementById("Year1_text_click").style = "display: none";
    document.getElementById("Year2_text_click").style = "display: none";
    document.getElementById("Year3_text_click").style = "display: block";
    document.getElementById("Year4_text_click").style = "display: none";
    document.getElementById("Year5_text_click").style = "display: none";
    document.getElementById("SIQ").style = "color: white";
    document.getElementById("SIL").style = "color: white";
    document.getElementById("SIT").style = "color: white";

    var d = new Date();
    var m = d.getMonth();
    if (m >= 1 && m <= 6) {Year3Menu_S2()}
    else {Year3Menu_S1()};
  }
  function Year3Menu_S1(){
    document.getElementsByClassName("S1")[2].style = "background-color: #eddf0c; color: white;";
    document.getElementsByClassName("triangle1")[1].style.display = "block";
    document.getElementsByClassName("S2")[2].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle2")[1].style.display = "none";
    document.getElementsByClassName("Content_S1")[2].style.display = "block";
    document.getElementsByClassName("Content_S2")[2].style.display = "none";
  }
  function Year3Menu_S2(){
    document.getElementsByClassName("S2")[2].style = "background-color: #eddf0c; color: white;";
    document.getElementsByClassName("triangle2")[1].style.display = "block";
    document.getElementsByClassName("S1")[2].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle1")[1].style.display = "none";
    document.getElementsByClassName("Content_S1")[2].style.display = "none";
    document.getElementsByClassName("Content_S2")[2].style.display = "block";
  }
  function Year4_Over (){
    document.getElementById("Year4_text").innerHTML = "2ème Année";
    document.getElementById("Year4_text").style = "width: 160px";
    document.getElementById("Year4_bg").style = "background-color: #41bbe4; color: #41bbe4; width: 160px; transition: width 0.5s;";
  }
  function Year4_Out (){
    document.getElementById("Year4_text").innerHTML = "2";
    document.getElementById("Year4_text").style = "width: 40px";
    document.getElementById("Year4_bg").style = "background-color: #f1e748; color: #f1e748; width: 40px; transition: width 0.25s;";
  }
  function Year4_Click(){
    document.getElementById("Year1_text_click").style = "display: none";
    document.getElementById("Year2_text_click").style = "display: none";
    document.getElementById("Year3_text_click").style = "display: none";
    document.getElementById("Year4_text_click").style = "display: inline";
    document.getElementById("Year5_text_click").style = "display: none";
  }
  function Year4Menu_SIQ(){
    document.getElementById("Pics").style = "opacity: 0; transition: opacity 0.25s;";
    document.getElementById("man").style = "left: 50%; transition: left 0.25s;";
    document.getElementById("Man_Obj").style = "left: 50%; transition: left 0.25s;";
    document.getElementById("woman").style = "left: 70%; transition: left 0.25s;";
    document.getElementById("Woman_Obj1").style = "left: 78%; transition: left 0.25s;";
    document.getElementById("Woman_Obj2").style = "left: 84%; transition: left 0.25s;";
    document.getElementsByClassName("YearContent")[0].style.display = "none";
    document.getElementsByClassName("YearContent")[1].style.display = "none";
    document.getElementsByClassName("YearContent")[2].style.display = "none";
    document.getElementsByClassName("YearContent")[3].style.display = "block";
    document.getElementsByClassName("YearContent")[4].style.display = "none";
    document.getElementsByClassName("YearContent")[5].style.display = "none";
    document.getElementsByClassName("YearContent")[6].style.display = "none";
    document.getElementById("SIQ").style = "color: black";
    document.getElementById("SIL").style = "color: white";
    document.getElementById("SIT").style = "color: white";

    var d = new Date();
    var m = d.getMonth();
    if (m >= 1 && m <= 6) {Year4Menu_SIQ_S2()}
    else {Year4Menu_SIQ_S1()};
  }
  function Year4Menu_SIQ_S1(){
    document.getElementsByClassName("S1")[3].style = "background-color: #eddf0c; color: white;";
    document.getElementsByClassName("triangle6")[0].style.display = "block";
    document.getElementsByClassName("S2")[3].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle7")[0].style.display = "none";
    document.getElementsByClassName("Modules_Optionnels")[0].style = "background-color: white; color: black;";
    document.getElementsByClassName("Content_S1")[3].style.display = "block";
    document.getElementsByClassName("Content_S2")[3].style.display = "none";
  }
  function Year4Menu_SIQ_S2(){
    document.getElementsByClassName("S2")[3].style = "background-color: #eddf0c; color: white;";
    document.getElementsByClassName("triangle7")[0].style.display = "block";
    document.getElementsByClassName("S1")[3].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle6")[0].style.display = "none";
    document.getElementsByClassName("Modules_Optionnels")[0].style = "background-color: white; color: black;";
    document.getElementsByClassName("Content_S1")[3].style.display = "none";
    document.getElementsByClassName("Content_S2")[3].style.display = "block";
  }
  function Year4Menu_Modules_Optionnels0(){
    document.getElementsByClassName("Modules_Optionnels")[0].style = "background-color: #eddf0c; color: white;";
    document.getElementsByClassName("S1")[3].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle6")[0].style.display = "none";
    document.getElementsByClassName("S2")[3].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle7")[0].style.display = "none";
    document.getElementsByClassName("Content_S1")[3].style.display = "none";
    document.getElementsByClassName("Content_S2")[3].style.display = "none";
  }
  function Year4Menu_SIL(){
    document.getElementById("Pics").style = "opacity: 0; transition: opacity 0.25s;";
    document.getElementById("man").style = "left: 50%; transition: left 0.25s;";
    document.getElementById("Man_Obj").style = "left: 50%; transition: left 0.25s;";
    document.getElementById("woman").style = "left: 70%; transition: left 0.25s;";
    document.getElementById("Woman_Obj1").style = "left: 78%; transition: left 0.25s;";
    document.getElementById("Woman_Obj2").style = "left: 84%; transition: left 0.25s;";
    document.getElementsByClassName("YearContent")[0].style.display = "none";
    document.getElementsByClassName("YearContent")[1].style.display = "none";
    document.getElementsByClassName("YearContent")[2].style.display = "none";
    document.getElementsByClassName("YearContent")[3].style.display = "none";
    document.getElementsByClassName("YearContent")[4].style.display = "block";
    document.getElementsByClassName("YearContent")[5].style.display = "none";
    document.getElementsByClassName("YearContent")[6].style.display = "none";
    document.getElementById("SIL").style = "color: black";
    document.getElementById("SIQ").style = "color: white";
    document.getElementById("SIT").style = "color: white";

    var d = new Date();
    var m = d.getMonth();
    if (m >= 1 && m <= 6) {Year4Menu_SIL_S2()}
    else {Year4Menu_SIL_S1()};
  }
  function Year4Menu_SIL_S1(){
    document.getElementsByClassName("S1")[4].style = "background-color: #eddf0c; color: white;";
    document.getElementsByClassName("triangle6")[1].style.display = "block";
    document.getElementsByClassName("S2")[4].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle7")[1].style.display = "none";
    document.getElementsByClassName("Modules_Optionnels")[1].style = "background-color: white; color: black;";
    document.getElementsByClassName("Content_S1")[4].style.display = "block";
    document.getElementsByClassName("Content_S2")[4].style.display = "none";
  }
  function Year4Menu_SIL_S2(){
    document.getElementsByClassName("S2")[4].style = "background-color: #eddf0c; color: white;";
    document.getElementsByClassName("triangle7")[1].style.display = "block";
    document.getElementsByClassName("S1")[4].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle6")[1].style.display = "none";
    document.getElementsByClassName("Modules_Optionnels")[1].style = "background-color: white; color: black;";
    document.getElementsByClassName("Content_S1")[4].style.display = "none";
    document.getElementsByClassName("Content_S2")[4].style.display = "block";
  }
  function Year4Menu_Modules_Optionnels1(){
    document.getElementsByClassName("Modules_Optionnels")[1].style = "background-color: #eddf0c; color: white;";
    document.getElementsByClassName("S1")[4].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle6")[1].style.display = "none";
    document.getElementsByClassName("S2")[4].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle7")[1].style.display = "none";
    document.getElementsByClassName("Content_S1")[4].style.display = "none";
    document.getElementsByClassName("Content_S2")[4].style.display = "none";
  }
  function Year4Menu_SIT(){
    document.getElementById("Pics").style = "opacity: 0; transition: opacity 0.25s;";
    document.getElementById("man").style = "left: 50%; transition: left 0.25s;";
    document.getElementById("Man_Obj").style = "left: 50%; transition: left 0.25s;";
    document.getElementById("woman").style = "left: 70%; transition: left 0.25s;";
    document.getElementById("Woman_Obj1").style = "left: 78%; transition: left 0.25s;";
    document.getElementById("Woman_Obj2").style = "left: 84%; transition: left 0.25s;";
    document.getElementsByClassName("YearContent")[0].style.display = "none";
    document.getElementsByClassName("YearContent")[1].style.display = "none";
    document.getElementsByClassName("YearContent")[2].style.display = "none";
    document.getElementsByClassName("YearContent")[3].style.display = "none";
    document.getElementsByClassName("YearContent")[4].style.display = "none";
    document.getElementsByClassName("YearContent")[5].style.display = "block";
    document.getElementsByClassName("YearContent")[6].style.display = "none";
    document.getElementById("SIT").style = "color: black";
    document.getElementById("SIQ").style = "color: white";
    document.getElementById("SIL").style = "color: white";

    var d = new Date();
    var m = d.getMonth();
    if (m >= 1 && m <= 6) {Year4Menu_SIT_S2()}
    else {Year4Menu_SIT_S1()};
  }
  function Year4Menu_SIT_S1(){
    document.getElementsByClassName("S1")[5].style = "background-color: #eddf0c; color: white;";
    document.getElementsByClassName("triangle6")[2].style.display = "block";
    document.getElementsByClassName("S2")[5].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle7")[2].style.display = "none";
    document.getElementsByClassName("Modules_Optionnels")[2].style = "background-color: white; color: black;";
    document.getElementsByClassName("Content_S1")[5].style.display = "block";
    document.getElementsByClassName("Content_S2")[5].style.display = "none";
  }
  function Year4Menu_SIT_S2(){
    document.getElementsByClassName("S2")[5].style = "background-color: #eddf0c; color: white;";
    document.getElementsByClassName("triangle7")[2].style.display = "block";
    document.getElementsByClassName("S1")[5].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle6")[2].style.display = "none";
    document.getElementsByClassName("Modules_Optionnels")[2].style = "background-color: white; color: black;";
    document.getElementsByClassName("Content_S1")[5].style.display = "none";
    document.getElementsByClassName("Content_S2")[5].style.display = "block";
  }
  function Year4Menu_Modules_Optionnels2(){
    document.getElementsByClassName("Modules_Optionnels")[2].style = "background-color: #eddf0c; color: white;";
    document.getElementsByClassName("S1")[5].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle6")[2].style.display = "none";
    document.getElementsByClassName("S2")[5].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle7")[2].style.display = "none";
    document.getElementsByClassName("Content_S1")[5].style.display = "none";
    document.getElementsByClassName("Content_S2")[5].style.display = "none";
  }
  function Year5_Over (){
    document.getElementById("Year5_text").innerHTML = "3ème Année";
    document.getElementById("Year5_text").style = "width: 160px";
    document.getElementById("Year5_bg").style = "background-color: #80d2ed; color: #80d2ed; width: 160px; transition: width 0.5s;";
  }
  function Year5_Out (){
    document.getElementById("Year5_text").innerHTML = "3";
    document.getElementById("Year5_text").style = "width: 40px";
    document.getElementById("Year5_bg").style = "background-color: #f6ef85; color: #f6ef85; width: 40px; transition: width 0.25s;";
  }
  function Year5_Click(){
    document.getElementById("Pics").style = "opacity: 1; transition: opacity 0.25s;";
    document.getElementById("man").style = "left: 45%; transition: left 0.25s;";
    document.getElementById("Man_Obj").style = "left: 45%; transition: left 0.25s;";
    document.getElementById("woman").style = "left: 75%; transition: left 0.25s;";
    document.getElementById("Woman_Obj1").style = "left: 83%; transition: left 0.25s;";
    document.getElementById("Woman_Obj2").style = "left: 89%; transition: left 0.25s;";
    document.getElementsByClassName("YearContent")[0].style.display = "none";
    document.getElementsByClassName("YearContent")[1].style.display = "none";
    document.getElementsByClassName("YearContent")[2].style.display = "none";
    document.getElementsByClassName("YearContent")[3].style.display = "none";
    document.getElementsByClassName("YearContent")[4].style.display = "none";
    document.getElementsByClassName("YearContent")[5].style.display = "none";
    document.getElementsByClassName("YearContent")[6].style.display = "block";
    document.getElementById("Year1_text_click").style = "display: none";
    document.getElementById("Year2_text_click").style = "display: none";
    document.getElementById("Year3_text_click").style = "display: none";
    document.getElementById("Year4_text_click").style = "display: none";
    document.getElementById("Year5_text_click").style = "display: block";
    document.getElementById("SIQ").style = "color: white";
    document.getElementById("SIL").style = "color: white";
    document.getElementById("SIT").style = "color: white";
    document.getElementById("Master").className = "Year5Appear";
    document.getElementById("Doctorat").className = "Year5Appear";
  }