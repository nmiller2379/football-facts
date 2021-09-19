var pro = document.getElementById("pro");
var college = document.getElementById("college");
var highSchool = document.getElementById("high_school");
var facts = document.getElementById("facts");
var number = document.getElementById("number");
var source = document.getElementById("source");
var proFacts = [
  {
    num: "#5",
    fact: "Don Shula, who coached in the NFL from 1963-95, has 328 career wins, the most of any coach in league history.",
    source: "— Pro Football Reference"
  }, 
    {
      num: "#4",
      fact: "In 2013, the Denver Broncos scored 606 points for the season. That’s the most ever scored in a season by a team.",
      source: "— Statmuse"
    },
    {
      num: "#3",
      fact: "In 2015, the Carolina Panthers recorded a regular season record of 15-1. That’s the most wins in any season for that franchise.",
      source: "— ESPN"
    },
    {
      num: "#2",
      fact: "On Dec. 8, 1940, the Chicago Bears beat Washington 73-0. The game marks the largest blowout in pro football history.",
      source: "Xxx"
    },
    {
      num: "#1",
      fact: "The longest game in NFL history happened on Christmas Day in 1971. The Miami Dolphins beat the Kansas City Chiefs 27-24. The game lasted more than 82 minutes.",
      source: "— Fanbuzz"
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
      fact: "With 18 national titles, Yale has more college football championships than any other school. Its first came in 1874 and its most recent came in 1927.",
      source: "— National Collegiate Athletic Association"
    },
    {
      num: "#4",
      fact: "Frank Howard, who coached the Clemson Tigers from 1940-69, has more wins than any other coach in program history with 165.",
      source: "— Sports Illustrated"
    },
    {
      num: "#5",
      fact: "The Arkansas Razorbacks have been involved in the two longest games in college football history. On Nov. 3, 2001, they defeated Ole Miss 58-56. On Nov. 1, 2003, they defeated Kentucky 71-63. Both games ended after seven overtime periods.",
      source: "— Athlon Sports" 
    }
  ];
  var highSchoolFacts = [
    {
      num: "#5",
      fact: "More than 2,000 girls play high school football each year in the United States, competing against boys.",
      source: "— National Federation of State High School Associations"
    }, 
      {
        num: "#4",
        fact: "More than 1 million students play high school football each year in the U.S. Of those, less than 1 percent make it to the NFL.",
        source: "— LeagueSide"
      },
      {
        num: "#3",
        fact: "The most points ever scored in a high school game came on Nov. 16, 1927, when Haven, Kan., beat Sylvia 256-O.",
        source: "— MaxPreps"
      },
      {
        num: "#2",
        fact: "Between 1992 and 2004, De La Salle High School in Concord, Calif., won 151 straight games, the longest such streak in history.",
        source: "— CBS sports"
      },
      {
        num: "#1",
        fact: "In 1937, 120,000 people — the largest crowd ever for a high school game — packed into Soldier Field to watch Austin High School defeat Leo High School 26-0 in the Chicago prep championship.",
        source: "— High School Football America" 
      }
  ];
  var i = 1;
  

function getFacts(){
    if (pro.checked == true) {
        console.log("Pro facts")
        number.innerHTML = proFacts[0].num;
        facts.innerHTML = proFacts[0].fact;
        source.innerHTML = proFacts[0].source;
        setInterval(function(){
          for(i; i < proFacts.length;){
            number.innerHTML = proFacts[i].num;
            facts.innerHTML = proFacts[i].fact;
            source.innerHTML = proFacts[i].source;
            i++;
            break;
          } 
        }, 7000);
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
        }, 7000);

      } else if (highSchool.checked == true) {
        console.log("High School facts")
        number.innerHTML = highSchoolFacts[0].num;
        facts.innerHTML = highSchoolFacts[0].fact;
        source.innerHTML = highSchoolFacts[0].source;
        setInterval(function(){
          for(i; i < highSchoolFacts.length;){
            number.innerHTML = highSchoolFacts[i].num;
            facts.innerHTML = highSchoolFacts[i].fact;
            source.innerHTML = highSchoolFacts[i].source;
            i++;
            break;
          } 
        }, 7000);
        
      } else {
          alert("Please make a selection.")

      }
}