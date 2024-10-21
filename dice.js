document.getElementById("rollButton").addEventListener("click", function() {
    let diceImage = document.getElementById("diceImage");

    // ใช้อนิเมชันให้ลูกเต๋าหมุน
    diceImage.classList.add("roll-animation");

    setTimeout(function() {
        // เลขสุ่มจาก 1 ถึง 6
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        diceImage.src = `images/dice-${diceRoll}.png`;
        
        // ลบอนิเมชันเมื่อเสร็จ
        diceImage.classList.remove("roll-animation");
    }, 1000);
});
