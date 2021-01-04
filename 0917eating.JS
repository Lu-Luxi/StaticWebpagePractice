function luckyResult() {
    var myResult = document.querySelector("#store");
    //第二次抽籤判斷清空
    if (myResult.classList.contains("bee")) {
        myResult.classList.toggle("bee");
    }
    myResult.innerText = "";
    //轉動轉盤
    var element = document.getElementById("cycle");
    element.classList.add("mystyle");
    //跑抽籤結果值
    var eatwhat = ["雞肉飯", "沐森麵店", "太初麵食", "有春茶館", "噪咖鴨肉飯", "麥當勞", "糊塗麵", "鬍鬚張", "咖哩飯", "再抽一次"];
    var a = Math.floor(Math.random() * 10);
    var temp = eatwhat[a];
    //顯示抽籤結果並延遲
    setTimeout(function() { myResult.innerText = temp; }, 3000);
    //加入結果背景樣式
    setTimeout(function() { myResult.classList.add("bee"); }, 3000);
}