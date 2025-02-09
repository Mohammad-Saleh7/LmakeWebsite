const note = () =>{
    const bodyNote = document.querySelector(".body-note p");
    const btnNote = document.querySelector(".btn-note");
    const deleteNote = document.querySelector(".delete-note");
    if (bodyNote) {
        btnNote.addEventListener("click",(e)=>{
            e.preventDefault()
            const inputNote = document.querySelector(".inputNote").value;
            bodyNote.textContent =inputNote
        })
    }
    if (bodyNote) {
        deleteNote.addEventListener("click",(e)=>{
            e.preventDefault()
            bodyNote.textContent =""
        })
    }
}
note()