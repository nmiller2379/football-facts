var pro = document.getElementById("pro");
var college = document.getElementById("college");
var highSchool = document.getElementById("high_school")

function getFacts(){
    if (pro.checked == true) {
        console.log("Pro facts")
      } else if (college.checked == true) {
        console.log ("College facts")
      } else if (highSchool.checked == true) {
        console.log("High School facts")
      } else {
          alert("Please make a selection.")

      }
}