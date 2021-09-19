var pro = document.getElementById("pro");
var college = document.getElementById("college");
var highSchool = document.getElementById("high_school");
var facts = document.getElementById("facts");
var number = document.getElementById("number");
var source = document.getElementById("source");
var proFacts = [
  {
    num: "#1",
    fact: "Xxx",
    source: "Xxx"
  }, 
    {
      num: "#2",
      fact: "Xxxx",
      source: "Xxxx"
    },
    {
      num: "#3",
      fact: "Xxxx",
      source: "Xxx"
    },
    {
      num: "#4",
      fact: "Xxxx",
      source: "Xxx"
    },
    {
      num: "#5",
      fact: "Xxxx",
      source: "— Xxxx"
    }
];
var collegeFacts = [
  {
    num: "#1",
    fact: "Archie Griffin, a former Ohio State Buckeyes running back, is the only two-time Heisman Trophy winner in NCAA history.",
    source: "— Fanbuzz Sports"
  }, 
    {
      num: "#2",
      fact: "Steve Spurrier, who led the South Carolina Gamecocks from 2005-15, leads all South Carolina coaches in wins with 86.",
      source: "— University of South Carolina"
    },
    {
      num: "#3",
      fact: "The Arkansas Razorbacks have been involved in the two longest games in college football history. On Nov. 3, 2001, they defeated Ole Miss 58-56. On Nov. 1, 2003, they defeated Kentucky 71-63. Both games ended after seven overtime periods.",
      source: "— Athlon Sports"
    },
    {
      num: "#4",
      fact: "Frank Howard, who coached the Clemson Tigers from 1940-69, has more wins than any other coach in program history with 165.",
      source: "— Sports Illustrated"
    },
    {
      num: "#5",
      fact: "With 18 national titles, Yale has more college football championships than any other school. Its first came in 1874 and its most recent came in 1927.",
      source: "— National Collegiate Athletic Association"
    }
  ];
  var i = 1;
  

function getFacts(){
    if (pro.checked == true) {
        console.log("Pro facts")
      } else if (college.checked == true) {
        console.log ("College facts");
        console.log (collegeFacts[1].fact);
        number.innerHTML = collegeFacts[0].num;
        facts.innerHTML = collegeFacts[0].fact;
        source.innerHTML = collegeFacts[0].source;
        setInterval(function(){
          for(i; i < collegeFacts.length;){
            number.innerHTML = collegeFacts[i].num;
            facts.innerHTML = collegeFacts[i].fact;
            source.innerHTML = collegeFacts[i].source;
            i++;
            break;
          } 
        }, 10000);

      } else if (highSchool.checked == true) {
        console.log("High School facts")
      } else {
          alert("Please make a selection.")

      }
}