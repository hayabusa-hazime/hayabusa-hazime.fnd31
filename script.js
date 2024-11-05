'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let submitEventButton = document.getElementById("submit-button");


//user,emotion,effect
const addTableView = () => {
    const random = randomHand()
    const valueArray = [
        document.getElementsByName("user")[0].value === "" ? "不明":document.getElementsByName("user")[0].value,
        document.getElementById("emotion").value-50,
        //document.getElementsByName("effect-type")[0].value,              <option value="money">お金(×100円)</option><option value="work">労力(分)</option>
        isNaN(document.getElementsByName("effect")[0].valueAsNumber) ? "嬉しい": document.getElementsByName("effect-type")[0].value === "money" ?document.getElementsByName("effect")[0].valueAsNumber * 100 + "円":document.getElementsByName("effect")[0].valueAsNumber + "分",
        {stone:"グー",scisoors:"チョキ",peper:"パー"}[random]
    ];
    const trTag = document.createElement("tr");
    valueArray.forEach(value => {
        const valueTag = document.createElement("td");
        valueTag.innerText = value;
        trTag.appendChild(valueTag);
    })
    //全部表示されて行ってしまう
    const hands = ["stone","scisoors","peper"];
    hands.forEach(hand=>document.getElementsByClassName(hand)[0].style.visibility = "hidden");
    document.getElementsByClassName(random)[0].style.visibility = "visible"
    return trTag
}

const victoryButton = document.getElementById("victory-button")
const looseButton = document.getElementById("loose-button")
const drawButton = document.getElementById("draw-button")


//victoryButton.addEventListener("click",() => {document.getElementsByClassName("dataTable")[0].appendChild(addTableView())})
submitEventButton.addEventListener("click",() => {document.getElementsByClassName("dataTable")[0].appendChild(addTableView())})

//document.getElementsByClassName("dataTable").appendChild(addTableView())

const randomHand = () =>{
    return ["stone","scisoors","peper"][Math.floor(Math.random()*3)];
} 

//document.getElementsByClassName(randomHand())[0].style.visibility = "visible"


//予想をとデータを記載するムーブ
const victoryEvent = () => {
    const tag = document.createElement("td");
    tag.innerText = "勝利"
    return tag;
}
victoryButton.addEventListener("click",()=>{
    document.getElementsByClassName("dataTable")[0].getElementsByTagName("tr")[document.getElementsByClassName("dataTable")[0].getElementsByTagName("tr").length-1].appendChild(victoryEvent());
    document.getElementsByName("draw-count")[0].innerText = 1;
    const hands = ["stone","scisoors","peper"];
    hands.forEach(hand=>document.getElementsByClassName(hand)[0].style.visibility = "hidden");
})


const looseEvent = () => {
    const tag = document.createElement("td");
    tag.innerText = "敗北"
    return tag;
}
looseButton.addEventListener("click",()=>{
    document.getElementsByClassName("dataTable")[0].getElementsByTagName("tr")[document.getElementsByClassName("dataTable")[0].getElementsByTagName("tr").length-1].appendChild(looseEvent());
    document.getElementsByName("draw-count")[0].innerText = 1;
    const hands = ["stone","scisoors","peper"];
    hands.forEach(hand=>document.getElementsByClassName(hand)[0].style.visibility = "hidden");
})


const drawEvent = () =>{
    const tag = document.createElement("td");
    tag.innerText = "引き分け"
    return tag;
}
drawButton.addEventListener("click",()=>{
    document.getElementsByClassName("dataTable")[0].getElementsByTagName("tr")[document.getElementsByClassName("dataTable")[0].getElementsByTagName("tr").length-1].appendChild(drawEvent());
    document.getElementsByClassName("dataTable")[0].appendChild(addTableView());
    document.getElementsByName("draw-count")[0].innerText = Number(document.getElementsByName("draw-count")[0].innerText)+1;
})
