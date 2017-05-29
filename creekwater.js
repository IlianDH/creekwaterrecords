var main = function() {

  // day/night mode

  var knop = document.getElementById("button");

  knop.onclick = function () {
    if (document.getElementsByTagName("body")[0].className === "") {
      document.getElementsByTagName("body")[0].className = "day";

    } else {
      document.getElementsByTagName("body")[0].className = "";

    }
  }


  //FB resize

  var width = window.innerWidth;

  console.log(width);

  if (width < 550) {
   document.getElementsByTagName("iframe")[0].setAttribute("src", "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCreekwaterRecords%2F&tabs=timeline&width=300&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId");
  }

}

window.onload = function() {
       main();
}
