let turn = true
let clickedCount = 0
function play(btn) {
    btn.innerText = turn ? 'x' : 'o'
    btn.classList.add(turn ? 'xbtn' : 'obtn')
    btn.setAttribute('disabled', 'disabled') // disabled la vo hieu hoa

    turn = !turn;
    clickedCount++;
    if (clickedCount === 9) {
        alert("Game over")
    }
    if()
}
function resetGame() {
    if (!confirm('do you want to reset the game?')) {
        return;
    }

    let btns = document.getElementsByClassName('btn');//lấy tất cả các thành phần của button trong game
//và dùng vòng lặp for of để duyệt qua các thành phần này
    for (const element of btns) {
        element.innerText = "";//gán bằng rỗng để clear các nhãn cảu button này
        element.classList.remove("xbtn");
        element.classList.remove("obtn");
        element.removeAttribute("disabled");
    }
    turn = true; //gán giá trị turn= true để quay về chơi lại từ đầu
    clickedCount = 0;//gán giá trị clickcount =0 để đếm số lần trở lại click của người dùng
}