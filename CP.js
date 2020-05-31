  function Year1_Over (){
    document.getElementById("Year1_text").innerHTML = "1ère Année";
    document.getElementById("Year1_text").style = "width: 160px";
    document.getElementById("Year1_bg").style = "background-color: #02a5dc; color: #02a5dc; width: 160px; transition: width 0.5s;";
  }
  function Year1_Out (){
    document.getElementById("Year1_text").innerHTML = "1";
    document.getElementById("Year1_text").style = "width: 40px";
    document.getElementById("Year1_bg").style = "background-color: #eddf0c; color: #eddf0c; width: 40px; transition: width 0.25s;";
  }
  function Year1_Click(){
    document.getElementById("Pics").style = "opacity: 0; transition: opacity 0.25s;";
    document.getElementById("man").style = "left: 50%; transition: left 0.25s;";
    document.getElementById("Man_Obj").style = "left: 50%; transition: left 0.25s;";
    document.getElementById("woman").style = "left: 70%; transition: left 0.25s;";
    document.getElementById("Woman_Obj1").style = "left: 78%; transition: left 0.25s;";
    document.getElementById("Woman_Obj2").style = "left: 84%; transition: left 0.25s;";
    document.getElementsByClassName("YearContent")[0].style.display = "block";
    document.getElementsByClassName("YearContent")[1].style.display = "none";
    document.getElementsByClassName("YearContent")[2].style.display = "none";
    document.getElementsByClassName("YearContent")[3].style.display = "none";
    document.getElementsByClassName("YearContent")[4].style.display = "none";
    document.getElementsByClassName("YearContent")[5].style.display = "none";
    document.getElementsByClassName("YearContent")[6].style.display = "none";
    document.getElementById("Year1_text_click").style = "display: block";
    document.getElementById("Year2_text_click").style = "display: none";
    document.getElementById("Year3_text_click").style = "display: none";
    document.getElementById("Year4_text_click").style = "display: none";
    document.getElementById("Year5_text_click").style = "display: none";
    document.getElementById("SIQ").style = "color: white";
    document.getElementById("SIL").style = "color: white";
    document.getElementById("SIT").style = "color: white";

    var d = new Date();
    var m = d.getMonth();
    if (m >= 1 && m <= 6) {Year1Menu_S2()}
    else {Year1Menu_S1()};
  }
  function Year2_Over (){
    document.getElementById("Year2_text").innerHTML = "2ème Année";
    document.getElementById("Year2_text").style = "width: 160px";
    document.getElementById("Year2_bg").style = "background-color: #41bbe4; color: #41bbe4; width: 160px; transition: width 0.5s;";
  }
  function Year2_Out (){
    document.getElementById("Year2_text").innerHTML = "2";
    document.getElementById("Year2_text").style = "width: 40px";
    document.getElementById("Year2_bg").style = "background-color: #f1e748; color: #f1e748; width: 40px; transition: width 0.25s;";
  }
  function Year2_Click(){
    document.getElementById("Pics").style = "opacity: 0; transition: opacity 0.25s;";
    document.getElementById("man").style = "left: 50%; transition: left 0.25s;";
    document.getElementById("Man_Obj").style = "left: 50%; transition: left 0.25s;";
    document.getElementById("woman").style = "left: 70%; transition: left 0.25s;";
    document.getElementById("Woman_Obj1").style = "left: 78%; transition: left 0.25s;";
    document.getElementById("Woman_Obj2").style = "left: 84%; transition: left 0.25s;";
    document.getElementsByClassName("YearContent")[0].style.display = "none";
    document.getElementsByClassName("YearContent")[1].style.display = "block";
    document.getElementsByClassName("YearContent")[2].style.display = "none";
    document.getElementsByClassName("YearContent")[3].style.display = "none";
    document.getElementsByClassName("YearContent")[4].style.display = "none";
    document.getElementsByClassName("YearContent")[5].style.display = "none";
    document.getElementsByClassName("YearContent")[6].style.display = "none";
    document.getElementById("Year1_text_click").style = "display:none";
    document.getElementById("Year2_text_click").style = "display: block";
    document.getElementById("Year3_text_click").style = "display: none";
    document.getElementById("Year4_text_click").style = "display: none";
    document.getElementById("Year5_text_click").style = "display: none";
    document.getElementById("SIQ").style = "color: white";
    document.getElementById("SIL").style = "color: white";
    document.getElementById("SIT").style = "color: white";

    var d = new Date();
    var m = d.getMonth();
    if (m >= 1 && m <= 6) {Year2Menu_S2()}
    else {Year2Menu_S1()};
  }
  function Year1Menu_S1(){
    document.getElementsByClassName("S1")[0].style = "background-color: #eddf0c; color: white;";
    document.getElementsByClassName("triangle1")[0].style.display = "block";
    document.getElementsByClassName("S2")[0].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle2")[0].style.display = "none";
    document.getElementsByClassName("Content_S1")[0].style.display = "block";
    document.getElementsByClassName("Content_S2")[0].style.display = "none";
  }
  function Year1Menu_S2(){
    document.getElementsByClassName("S2")[0].style = "background-color: #eddf0c; color: white;";
    document.getElementsByClassName("triangle2")[0].style.display = "block";
    document.getElementsByClassName("S1")[0].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle1")[0].style.display = "none";
    document.getElementsByClassName("Content_S1")[0].style.display = "none";
    document.getElementsByClassName("Content_S2")[0].style.display = "block";
  }
  function Year2Menu_S1(){
    document.getElementsByClassName("S1")[1].style = "background-color: #eddf0c; color: white;";
    document.getElementsByClassName("triangle3")[0].style.display = "block";
    document.getElementsByClassName("S2")[1].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle4")[0].style.display = "none";
    document.getElementById("2CP_Autres").style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle5")[0].style.display = "none";
    document.getElementsByClassName("Content_S1")[1].style.display = "block";
    document.getElementsByClassName("Content_S2")[1].style.display = "none";
    document.getElementById("Content_2CP_Autres").style.display = "none";
  }
  function Year2Menu_S2(){
    document.getElementsByClassName("S2")[1].style = "background-color: #eddf0c; color: white;";
    document.getElementsByClassName("triangle4")[0].style.display = "block";
    document.getElementsByClassName("S1")[1].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle3")[0].style.display = "none";
    document.getElementById("2CP_Autres").style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle5")[0].style.display = "none";
    document.getElementsByClassName("Content_S1")[1].style.display = "none";
    document.getElementsByClassName("Content_S2")[1].style.display = "block";
    document.getElementById("Content_2CP_Autres").style.display = "none";
  }
  function Year2Menu_Autres(){
    document.getElementById("2CP_Autres").style = "background-color: #eddf0c; color: white;";
    document.getElementsByClassName("triangle5")[0].style.display = "block";
    document.getElementsByClassName("S1")[1].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle3")[0].style.display = "none";
    document.getElementsByClassName("S2")[1].style = "background-color: white; color: black;";
    document.getElementsByClassName("triangle4")[0].style.display = "none";
    document.getElementsByClassName("Content_S1")[1].style.display = "none";
    document.getElementsByClassName("Content_S2")[1].style.display = "none";
    document.getElementById("Content_2CP_Autres").style.display = "block";
  }