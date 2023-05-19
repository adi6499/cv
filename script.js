let contents = document.querySelector('.contents')
let data = [
    {
        label: "NAME",
        content: "ADESH .GAJANAN. MAHATME",
    },

    {
        label: `AGE`,
        content: `${new Date().getFullYear() - 1999}`,
    },
    {
        label: `EDUCATION`,
        content: `1) BBI(BANKING AND INSURANCE)<br>2) MCOM PART-I`,
    },
    {
        label: `EXPERIENCE`,
        content: `${new Date().getFullYear() - 2022} year`,
    },
    {
        label: `DESIGNATION AT COMPANY`,
        content: `ASSISTANT MANAGER AT VIDARBHA VAIBHAV MANDIR`,
    },
    {
        label: `HOBBIES`,
        content: `1) PROGRAMMING <br>2) DEVELOP SITES FOR EDUCATIONAL PURPOSE`
    },
    {
        label: `EFFICIENT AT`,
        content: `1) ADVANCE EXCEL <br>2) WORD <br> 3) POWERPOINT <br>4) COMPUTER KNOWLEDGE`,

    },
    {
        label: `PREVIOUS COMPANY WORK EXPERIENCE`,
        content: `1) MANAGING CHEQUE TRANSACTIONS <br>2) PETTY CASH RECORDS <br>3) MAKE INCOME AND EXPENDITURE STATEMENTS <br>4) RECORD DATA IN EXCEL SHEET<br>5) MAKING LETTER`
    },
    {
        label: `LANGUAGES`,
        content: `1)MARATHI <br>2)HINDI <br>3)JAPANESE(HIRAGANA WRITING) <br>4)ENGLISH`
    },
    {
        label: `OTHERS`,
        content: `"CURIOUS AND EAGER TO LEARN NEW THINGS BENEFICIAL FOR ORGANISATION AND MY CAREER" `
    }


];

for (let i = 0; i < data.length; i++) {
    contents.innerHTML += `<div class="naming">
                            <div class="label">
                            <div class="sign">+</div>
                            ${data[i].label}</div><div class="content">${data[i].content}</div>
                           </div>`
}

let sign = document.querySelectorAll('.sign')
sign.forEach((l) => {
    l.addEventListener("click", (e) => {
        if (e.target.textContent == "+") {
            e.target.innerHTML = "-"
            e.target.parentElement.parentElement.classList.add("showNaming")
            e.target.parentElement.nextSibling.classList.add("showContent")
        } else if (e.target.textContent == "-") {
            e.target.innerHTML = "+"
            e.target.parentElement.parentElement.classList.remove("showNaming")
         e.target.parentElement.nextSibling.classList.remove("showContent")
        }

    })
})


