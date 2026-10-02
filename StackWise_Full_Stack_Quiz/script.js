const questions = [
  {
    "topic": "html",
    "label": "HTML",
    "q": "What does HTML stand for?",
    "o": [
      "HyperText Markdown Language",
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Tool Multi Language"
    ],
    "a": 1
  },
  {
    "topic": "html",
    "label": "HTML",
    "q": "Which tag is used for the largest heading?",
    "o": [
      "<heading>",
      "<h6>",
      "<h1>",
      "<head>"
    ],
    "a": 2
  },
  {
    "topic": "html",
    "label": "HTML",
    "q": "Which attribute provides alternative text for an image?",
    "o": [
      "src",
      "href",
      "title",
      "alt"
    ],
    "a": 3
  },
  {
    "topic": "html",
    "label": "HTML",
    "q": "Which tag creates an ordered list?",
    "o": [
      "<ul>",
      "<li>",
      "<ol>",
      "<list>"
    ],
    "a": 2
  },
  {
    "topic": "html",
    "label": "HTML",
    "q": "Which element is used for navigation links?",
    "o": [
      "<navigate>",
      "<nav>",
      "<links>",
      "<menu>"
    ],
    "a": 1
  },
  {
    "topic": "html",
    "label": "HTML",
    "q": "Which input type is used for an email address?",
    "o": [
      "mail",
      "email",
      "text-email",
      "address"
    ],
    "a": 1
  },
  {
    "topic": "html",
    "label": "HTML",
    "q": "Which tag creates a hyperlink?",
    "o": [
      "<link>",
      "<href>",
      "<a>",
      "<url>"
    ],
    "a": 2
  },
  {
    "topic": "html",
    "label": "HTML",
    "q": "Which element is used to embed a video?",
    "o": [
      "<media>",
      "<movie>",
      "<video>",
      "<play>"
    ],
    "a": 2
  },
  {
    "topic": "html",
    "label": "HTML",
    "q": "Which tag represents a table row?",
    "o": [
      "<td>",
      "<th>",
      "<tr>",
      "<row>"
    ],
    "a": 2
  },
  {
    "topic": "html",
    "label": "HTML",
    "q": "Which tag represents a table header cell?",
    "o": [
      "<thead>",
      "<header>",
      "<th>",
      "<td>"
    ],
    "a": 2
  },
  {
    "topic": "html",
    "label": "HTML",
    "q": "Which HTML element is semantic for the main page content?",
    "o": [
      "<body>",
      "<content>",
      "<main>",
      "<section-main>"
    ],
    "a": 2
  },
  {
    "topic": "html",
    "label": "HTML",
    "q": "Which attribute uniquely identifies an element?",
    "o": [
      "class",
      "name",
      "id",
      "key"
    ],
    "a": 2
  },
  {
    "topic": "html",
    "label": "HTML",
    "q": "Which tag is used for a paragraph?",
    "o": [
      "<para>",
      "<p>",
      "<text>",
      "<paragraph>"
    ],
    "a": 1
  },
  {
    "topic": "html",
    "label": "HTML",
    "q": "Which element creates a line break?",
    "o": [
      "<break>",
      "<lb>",
      "<br>",
      "<newline>"
    ],
    "a": 2
  },
  {
    "topic": "html",
    "label": "HTML",
    "q": "Which tag is used for an unordered list item?",
    "o": [
      "<item>",
      "<ul>",
      "<li>",
      "<list-item>"
    ],
    "a": 2
  },
  {
    "topic": "css",
    "label": "CSS",
    "q": "What does CSS stand for?",
    "o": [
      "Computer Style Syntax",
      "Cascading Style Sheets",
      "Creative Styling System",
      "Coded Style Sheets"
    ],
    "a": 1
  },
  {
    "topic": "css",
    "label": "CSS",
    "q": "Which property changes text color?",
    "o": [
      "font-color",
      "text-color",
      "color",
      "foreground"
    ],
    "a": 2
  },
  {
    "topic": "css",
    "label": "CSS",
    "q": "Which property changes the background color?",
    "o": [
      "bg-color",
      "background",
      "background-color",
      "color-bg"
    ],
    "a": 2
  },
  {
    "topic": "css",
    "label": "CSS",
    "q": "Which layout system is primarily one-dimensional?",
    "o": [
      "Grid",
      "Flexbox",
      "Table",
      "Float"
    ],
    "a": 1
  },
  {
    "topic": "css",
    "label": "CSS",
    "q": "Which layout system is designed for two-dimensional layouts?",
    "o": [
      "Flexbox",
      "CSS Grid",
      "Inline-block",
      "Positioning"
    ],
    "a": 1
  },
  {
    "topic": "css",
    "label": "CSS",
    "q": "What does 1rem usually represent?",
    "o": [
      "Parent font size",
      "Root element font size",
      "Viewport width",
      "Browser zoom"
    ],
    "a": 1
  },
  {
    "topic": "css",
    "label": "CSS",
    "q": "Which property controls inner spacing?",
    "o": [
      "margin",
      "spacing",
      "padding",
      "border"
    ],
    "a": 2
  },
  {
    "topic": "css",
    "label": "CSS",
    "q": "Which property controls outer spacing?",
    "o": [
      "padding",
      "margin",
      "gap-only",
      "outline"
    ],
    "a": 1
  },
  {
    "topic": "css",
    "label": "CSS",
    "q": "Which selector targets an element with id=\"box\"?",
    "o": [
      ".box",
      "box",
      "#box",
      "*box"
    ],
    "a": 2
  },
  {
    "topic": "css",
    "label": "CSS",
    "q": "Which selector targets elements with class=\"card\"?",
    "o": [
      "#card",
      ".card",
      "card",
      "@card"
    ],
    "a": 1
  },
  {
    "topic": "css",
    "label": "CSS",
    "q": "Which rule makes text bold?",
    "o": [
      "text-style: bold",
      "font-weight: bold",
      "font-bold: true",
      "weight: bold"
    ],
    "a": 1
  },
  {
    "topic": "css",
    "label": "CSS",
    "q": "Which unit is relative to the viewport width?",
    "o": [
      "vh",
      "vw",
      "rem",
      "em"
    ],
    "a": 1
  },
  {
    "topic": "css",
    "label": "CSS",
    "q": "Which feature applies styles based on screen conditions?",
    "o": [
      "Keyframes",
      "Media queries",
      "Variables",
      "Transforms"
    ],
    "a": 1
  },
  {
    "topic": "css",
    "label": "CSS",
    "q": "Which property rounds element corners?",
    "o": [
      "corner-radius",
      "radius",
      "border-radius",
      "round-corners"
    ],
    "a": 2
  },
  {
    "topic": "css",
    "label": "CSS",
    "q": "Which property controls stacking order?",
    "o": [
      "stack",
      "layer",
      "z-index",
      "order-index"
    ],
    "a": 2
  },
  {
    "topic": "javascript",
    "label": "JavaScript",
    "q": "Which keyword declares a block-scoped variable that can be reassigned?",
    "o": [
      "var",
      "let",
      "const",
      "define"
    ],
    "a": 1
  },
  {
    "topic": "javascript",
    "label": "JavaScript",
    "q": "Which method selects the first matching element?",
    "o": [
      "getElement()",
      "querySelector()",
      "selectOne()",
      "findElement()"
    ],
    "a": 1
  },
  {
    "topic": "javascript",
    "label": "JavaScript",
    "q": "Which method converts JSON text into a JavaScript object?",
    "o": [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.object()",
      "JSON.convert()"
    ],
    "a": 1
  },
  {
    "topic": "javascript",
    "label": "JavaScript",
    "q": "Which syntax handles asynchronous promises cleanly?",
    "o": [
      "try/sync",
      "async/await",
      "promise/wait",
      "defer/then"
    ],
    "a": 1
  },
  {
    "topic": "javascript",
    "label": "JavaScript",
    "q": "Which event occurs when an element is clicked?",
    "o": [
      "press",
      "tap-only",
      "click",
      "select"
    ],
    "a": 2
  },
  {
    "topic": "javascript",
    "label": "JavaScript",
    "q": "Which keyword declares a constant?",
    "o": [
      "constant",
      "let",
      "const",
      "static"
    ],
    "a": 2
  },
  {
    "topic": "javascript",
    "label": "JavaScript",
    "q": "Which method adds an event listener?",
    "o": [
      "listen()",
      "addEvent()",
      "addEventListener()",
      "onEvent()"
    ],
    "a": 2
  },
  {
    "topic": "javascript",
    "label": "JavaScript",
    "q": "Which operator checks strict equality?",
    "o": [
      "=",
      "==",
      "===",
      "!="
    ],
    "a": 2
  },
  {
    "topic": "javascript",
    "label": "JavaScript",
    "q": "Which array method creates a new array by transforming each item?",
    "o": [
      "filter()",
      "map()",
      "reduce()",
      "forEachOnly()"
    ],
    "a": 1
  },
  {
    "topic": "javascript",
    "label": "JavaScript",
    "q": "Which array method keeps items that satisfy a condition?",
    "o": [
      "map()",
      "filter()",
      "findAll()",
      "select()"
    ],
    "a": 1
  },
  {
    "topic": "javascript",
    "label": "JavaScript",
    "q": "What does DOM stand for?",
    "o": [
      "Data Object Model",
      "Document Object Model",
      "Document Order Map",
      "Digital Object Model"
    ],
    "a": 1
  },
  {
    "topic": "javascript",
    "label": "JavaScript",
    "q": "Which keyword is used to define a function?",
    "o": [
      "def",
      "func",
      "function",
      "method"
    ],
    "a": 2
  },
  {
    "topic": "javascript",
    "label": "JavaScript",
    "q": "Which value represents an intentional absence of an object value?",
    "o": [
      "undefined-only",
      "empty",
      "null",
      "void"
    ],
    "a": 2
  },
  {
    "topic": "javascript",
    "label": "JavaScript",
    "q": "Which method converts a JavaScript object to JSON text?",
    "o": [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.text()",
      "JSON.encodeObject()"
    ],
    "a": 1
  },
  {
    "topic": "javascript",
    "label": "JavaScript",
    "q": "Which statement is commonly used to make decisions?",
    "o": [
      "loop",
      "if",
      "switch-only",
      "check"
    ],
    "a": 1
  },
  {
    "topic": "backend",
    "label": "Backend & APIs",
    "q": "Which HTTP method is commonly used to retrieve data?",
    "o": [
      "POST",
      "GET",
      "PUT",
      "DELETE"
    ],
    "a": 1
  },
  {
    "topic": "backend",
    "label": "Backend & APIs",
    "q": "Which HTTP method is commonly used to create a resource?",
    "o": [
      "GET",
      "POST",
      "TRACE",
      "HEAD"
    ],
    "a": 1
  },
  {
    "topic": "backend",
    "label": "Backend & APIs",
    "q": "Which status code means Not Found?",
    "o": [
      "200",
      "201",
      "404",
      "500"
    ],
    "a": 2
  },
  {
    "topic": "backend",
    "label": "Backend & APIs",
    "q": "Which format is widely used for API data exchange?",
    "o": [
      "TXT",
      "JSON",
      "EXE",
      "BIN"
    ],
    "a": 1
  },
  {
    "topic": "backend",
    "label": "Backend & APIs",
    "q": "Which status code usually indicates success?",
    "o": [
      "301",
      "404",
      "500",
      "200"
    ],
    "a": 3
  },
  {
    "topic": "backend",
    "label": "Backend & APIs",
    "q": "Which HTTP method is commonly used to partially update a resource?",
    "o": [
      "PATCH",
      "FETCH",
      "MODIFY",
      "CHANGE"
    ],
    "a": 0
  },
  {
    "topic": "backend",
    "label": "Backend & APIs",
    "q": "What does REST stand for?",
    "o": [
      "Remote State Transfer",
      "Representational State Transfer",
      "Resource System Transfer",
      "Request State Technology"
    ],
    "a": 1
  },
  {
    "topic": "backend",
    "label": "Backend & APIs",
    "q": "What does API stand for?",
    "o": [
      "Application Program Internet",
      "Application Programming Interface",
      "Automated Protocol Interface",
      "Applied Programming Integration"
    ],
    "a": 1
  },
  {
    "topic": "backend",
    "label": "Backend & APIs",
    "q": "Which status code means Unauthorized?",
    "o": [
      "400",
      "401",
      "403",
      "404"
    ],
    "a": 1
  },
  {
    "topic": "backend",
    "label": "Backend & APIs",
    "q": "Which status code means Forbidden?",
    "o": [
      "401",
      "403",
      "405",
      "500"
    ],
    "a": 1
  },
  {
    "topic": "backend",
    "label": "Backend & APIs",
    "q": "Which status code usually means a resource was created?",
    "o": [
      "200",
      "201",
      "204",
      "302"
    ],
    "a": 1
  },
  {
    "topic": "backend",
    "label": "Backend & APIs",
    "q": "What is middleware commonly used for in a web server?",
    "o": [
      "Styling HTML",
      "Processing requests between request and response",
      "Creating database tables only",
      "Compiling CSS"
    ],
    "a": 1
  },
  {
    "topic": "backend",
    "label": "Backend & APIs",
    "q": "Which package manager is commonly used with Node.js?",
    "o": [
      "pip",
      "npm",
      "gem",
      "composer"
    ],
    "a": 1
  },
  {
    "topic": "backend",
    "label": "Backend & APIs",
    "q": "Which Node.js framework is widely used for web APIs?",
    "o": [
      "Django",
      "Express",
      "Laravel",
      "Spring"
    ],
    "a": 1
  },
  {
    "topic": "backend",
    "label": "Backend & APIs",
    "q": "What does CORS control?",
    "o": [
      "Database indexes",
      "Cross-origin resource access",
      "CSS responsiveness",
      "Password hashing"
    ],
    "a": 1
  },
  {
    "topic": "database",
    "label": "Databases",
    "q": "Which SQL command retrieves data?",
    "o": [
      "GET",
      "SELECT",
      "FETCHSQL",
      "READ"
    ],
    "a": 1
  },
  {
    "topic": "database",
    "label": "Databases",
    "q": "What is a primary key used for?",
    "o": [
      "Sorting rows",
      "Uniquely identifying rows",
      "Encrypting tables",
      "Creating backups"
    ],
    "a": 1
  },
  {
    "topic": "database",
    "label": "Databases",
    "q": "Which command adds new rows?",
    "o": [
      "ADD",
      "INSERT",
      "CREATE ROW",
      "APPEND SQL"
    ],
    "a": 1
  },
  {
    "topic": "database",
    "label": "Databases",
    "q": "Which clause filters rows?",
    "o": [
      "FILTER",
      "WHERE",
      "HAVING ONLY",
      "LIMIT"
    ],
    "a": 1
  },
  {
    "topic": "database",
    "label": "Databases",
    "q": "What is a foreign key used for?",
    "o": [
      "Encrypting columns",
      "Connecting related tables",
      "Sorting records",
      "Deleting duplicates"
    ],
    "a": 1
  },
  {
    "topic": "database",
    "label": "Databases",
    "q": "Which command modifies existing rows?",
    "o": [
      "CHANGE",
      "UPDATE",
      "MODIFY TABLE",
      "ALTER ROW"
    ],
    "a": 1
  },
  {
    "topic": "database",
    "label": "Databases",
    "q": "Which command removes rows?",
    "o": [
      "REMOVE",
      "DROP ROW",
      "DELETE",
      "CLEAR"
    ],
    "a": 2
  },
  {
    "topic": "database",
    "label": "Databases",
    "q": "Which clause sorts query results?",
    "o": [
      "SORT BY",
      "ORDER BY",
      "GROUP BY",
      "ARRANGE"
    ],
    "a": 1
  },
  {
    "topic": "database",
    "label": "Databases",
    "q": "Which clause groups rows for aggregate calculations?",
    "o": [
      "GROUP BY",
      "COLLECT BY",
      "ORDER GROUP",
      "MERGE BY"
    ],
    "a": 0
  },
  {
    "topic": "database",
    "label": "Databases",
    "q": "Which function counts rows?",
    "o": [
      "TOTAL()",
      "COUNT()",
      "ROWS()",
      "NUMBER()"
    ],
    "a": 1
  },
  {
    "topic": "database",
    "label": "Databases",
    "q": "Which SQL command creates a table?",
    "o": [
      "MAKE TABLE",
      "NEW TABLE",
      "CREATE TABLE",
      "BUILD TABLE"
    ],
    "a": 2
  },
  {
    "topic": "database",
    "label": "Databases",
    "q": "Which SQL command changes table structure?",
    "o": [
      "CHANGE TABLE",
      "ALTER TABLE",
      "UPDATE TABLE",
      "MODIFY ROW"
    ],
    "a": 1
  },
  {
    "topic": "database",
    "label": "Databases",
    "q": "What does SQL stand for?",
    "o": [
      "Structured Query Language",
      "Simple Query Language",
      "System Query Logic",
      "Sequential Query Language"
    ],
    "a": 0
  },
  {
    "topic": "database",
    "label": "Databases",
    "q": "Which constraint prevents duplicate values?",
    "o": [
      "DISTINCT",
      "UNIQUE",
      "PRIMARY ONLY",
      "NO-DUP"
    ],
    "a": 1
  },
  {
    "topic": "database",
    "label": "Databases",
    "q": "Which join returns matching rows from both tables?",
    "o": [
      "LEFT JOIN",
      "OUTER JOIN",
      "INNER JOIN",
      "CROSS JOIN"
    ],
    "a": 2
  }
];
const topics={all:"All Topics",html:"HTML",css:"CSS",javascript:"JavaScript",backend:"Backend & APIs",database:"Databases"};
let currentTopic="all", quizQuestions=[], current=0, answers=[], timerSeconds=600, timerId=null, startedAt=0;

const $=id=>document.getElementById(id);
document.querySelectorAll(".topic").forEach(b=>b.addEventListener("click",()=>openQuiz(b.dataset.topic)));
document.querySelectorAll("[data-open]").forEach(b=>b.addEventListener("click",()=>openQuiz(b.dataset.open)));
$("next").onclick=()=>{ if(current<quizQuestions.length-1){current++;render();}else finishQuiz(); };
$("prev").onclick=()=>{if(current>0){current--;render();}};
$("backHome").onclick=()=>{clearInterval(timerId);show("home");};
$("retake").onclick=()=>openQuiz(currentTopic);

function show(id){document.querySelectorAll(".screen").forEach(s=>s.classList.add("hidden"));$(id).classList.remove("hidden");window.scrollTo(0,0);}
function openQuiz(topic){
 currentTopic=topic; quizQuestions=topic==="all"?questions:questions.filter(x=>x.topic===topic);
 current=0; answers=new Array(quizQuestions.length).fill(null);
 timerSeconds=topic==="all"?600:300; startedAt=Date.now(); clearInterval(timerId);
 $("quizTopic").textContent=topics[topic]+` • ${quizQuestions.length} Questions`;
 show("quiz"); render(); buildPalette(); timerId=setInterval(tick,1000); tick();
}
function tick(){
 const m=Math.floor(timerSeconds/60).toString().padStart(2,"0"), s=(timerSeconds%60).toString().padStart(2,"0"); $("timer").textContent=`${m}:${s}`;
 if(timerSeconds<=0){clearInterval(timerId);finishQuiz();} else timerSeconds--;
}
function render(){
 const q=quizQuestions[current]; $("questionLabel").textContent=q.label; $("question").textContent=q.q;
 $("qCount").textContent=`Question ${current+1} of ${quizQuestions.length}`;
 $("answeredCount").textContent=`${answers.filter(x=>x!==null).length} answered`;
 $("progress").style.width=`${((current+1)/quizQuestions.length)*100}%`;
 const box=$("options"); box.innerHTML="";
 q.o.forEach((opt,i)=>{const b=document.createElement("button");b.className="option"+(answers[current]===i?" selected":"");b.textContent=String.fromCharCode(65+i)+". "+opt;b.onclick=()=>{answers[current]=i;render();};box.appendChild(b);});
 updatePalette();
}
function buildPalette(){
 const p=$("palette");p.className="palette-grid";p.innerHTML="";
 quizQuestions.forEach((_,i)=>{const b=document.createElement("button");b.className="num";b.textContent=i+1;b.onclick=()=>{current=i;render();};p.appendChild(b);});
}
function updatePalette(){
 [...$("palette").children].forEach((b,i)=>{b.className="num"+(i===current?" current":"")+(answers[i]!==null?" done":"");});
}
function finishQuiz(){
 clearInterval(timerId);
 const correct=answers.reduce((n,a,i)=>n+(a===quizQuestions[i].a?1:0),0);
 const total=quizQuestions.length, accuracy=Math.round(correct/total*100);
 const elapsed=Math.max(0,Math.floor((Date.now()-startedAt)/1000));
 $("correct").textContent=correct; $("total").textContent=total; $("donutText").textContent=accuracy+"%";
 $("timeUsed").textContent=`${Math.floor(elapsed/60)}:${(elapsed%60).toString().padStart(2,"0")}`;
 $("donut").style.background=`conic-gradient(#7c3aed ${accuracy*3.6}deg,#e8ebf2 ${accuracy*3.6}deg)`;
 const attempted={};
 quizQuestions.forEach((q,i)=>{if(!attempted[q.topic])attempted[q.topic]=[0,0];attempted[q.topic][1]++;if(answers[i]===q.a)attempted[q.topic][0]++;});
 const bars=$("topicBars");bars.innerHTML="";
 Object.entries(attempted).forEach(([key,[c,t]])=>{const pct=Math.round(c/t*100), row=document.createElement("div");row.className="bar-row";row.innerHTML=`<div class="bar-head"><span>${topics[key]}</span><span>${pct}%</span></div><div class="bar"><span style="width:${pct}%"></span></div>`;bars.appendChild(row);});
 const weak=Object.entries(attempted).sort((a,b)=>(a[1][0]/a[1][1])-(b[1][0]/b[1][1]))[0];
 $("recommendation").textContent=weak?`${topics[weak[0]]} is your next practice focus.`:"Keep practicing!";
 $("resultMode").textContent=`${total} questions • ${topics[currentTopic]}`;
 show("result");
}
