'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//let submitEventButton = document.getElementsByName("submit-button")[0]

const submitEvent = (event) => {
    let userValue = document.getElementsByName("user")[0].value;
    let emotionValue = document.getElementById("emotion").value;
    let effectTypeValue = document.getElementsByName("effect-type")[0].value
    let effectValue = document.getElementsByName("effect")[0].valueAsNumber

    // 値が空の時に別処理をしたい

    localStorage.setItem("user",userValue);
    localStorage.setItem("emotion",emotionValue);
    localStorage.setItem("effectType",effectTypeValue);
    localStorage.setItem("effect",effectValue);
    //window.location.href = "file:///C:/Users/1598069/OneDrive%20-%20%E3%83%88%E3%83%A8%E3%82%BF%E8%87%AA%E5%8B%95%E8%BB%8A%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE/dig_cloud/foundations/day20/%E7%99%BA%E8%A1%A8/index2.html";//移動先のurl
}
// submitEventButton.addEventListener("click",submitEvent)

//値が入力されていたらObjにする？

// const valueObject = {
//     user:userValue,
//     emotion:emotionValue,
//     effectType:effectTypeValue,
//     effect:effectValue,
// };

//上手くいかず
//ちゃんと値がない=>userだけおかしい
//ローカルストレージに値渡し

//user,emotion,effect
const addTableView = () => {
    const valueArray = [
        document.getElementsByName("user")[0].value,
        document.getElementById("emotion").value,
        //document.getElementsByName("effect-type")[0].value,
        document.getElementsByName("effect")[0].valueAsNumber
    ];
    const trTag = document.createElement("tr");
    valueArray.forEach(value => {
        const valueTag = document.createElement("td");
        valueTag.innerText = value;
        trTag.appendChild(valueTag);
    })
    return trTag
}

const victoryButton = document.getElementById("victory-button")
const looseButton = document.getElementById("loose-button")
const drawButton = document.getElementById("draw-button")


victoryButton.addEventListener("click",() => {document.getElementsByClassName("dataTable")[0].appendChild(addTableView())})
//submitEventButton.addEventListener("click",() => {document.getElementsByClassName("dataTable")[0].appendChild(addTableView())})

// document.getElementsByClassName("dataTable").appendChild(addTableView())

const randomHand = () =>{
    return ["stone","scisoors","peper"][Math.floor(Math.random()*3)];
} 

document.getElementsByClassName(randomHand())[0].style.visibility = "visible"
