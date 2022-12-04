function geta() {
  return document.querySelector("section.CardsItem.current.showing.showing-first").innerText.split("\n")
}
function getc() {
  return Number(document.querySelector("#LiveGameStudentTarget > div.StudentLayout > section > div > div.UIDiv.StudyWhileWaitingView-card > div > div > div > div > div > div > div > div.CardsList-navControl.progressIndex > span").innerText.split("/")[1])
}
let Cycle = {}

Cycle.next = function(){
  document.querySelector("#LiveGameStudentTarget > div.StudentLayout > section > div > div.UIDiv.StudyWhileWaitingView-card > div > div > div > div > div > div > div > div.CardsList-navControl.nextButton > span > button")?.click()
}

let dict = {}

function current() {
  let o = geta();
  dict[o[0]] = o[1]
  Cycle.next()
}

tt = {}
dd = {}
function gtd() {
  for (let i = 1; i <= getc(); i++) {current()}
  tt = dict;
  dd = Object.fromEntries(Object.entries(dict).map(n => n.reverse()))
}

for (let i = 0; i < getc(); i++) {
  gtd()
}

let getWord = () => document.querySelector(".StudentPrompt-text").innerText;

function answer(t,d) {
  const term = getWord();
  Array.from(document.querySelector(".StudentAnswerOptions").children).forEach(child => {
    if (child.innerText == tt[term] || child.innerText == dd[term]) {
      child.firstChild.firstChild.click();
    }
  })
}

setInterval(() => {
      answer(tt,dd)
  }, 200)


let ii = setInterval(() => {
  if (document.querySelector("#LiveGameStudentTarget > div > div.UIDiv.StudentEndView-content > div.StudentEndView-ranking.should-show > div.UIDiv.StudentEndView-winnerHeader")?.innerText == "You win!") {
    location.reload();
    clearInterval(ii)
  }
}, 1000)
