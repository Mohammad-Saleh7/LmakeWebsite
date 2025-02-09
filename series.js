const tvShowIds = [67178,80752,38472,1396,71446,1668,93405,40008]
const cards = document.querySelectorAll(".card")
tvShowIds.forEach((tvShowIds,index) =>{
    const card = cards[index]
    const cardBody = card.querySelector(".card-body p")
    getOverview(tvShowIds,cardBody) 
})
async function getOverview(tvShowIds,cardBody) {
    try{
        const apiKey ="b0cc4f9bd4880968340686e1169ba9c3"
        const apiUrl =`https://api.themoviedb.org/3/tv/${tvShowIds}?api_key=${apiKey}`;
        const response =await fetch(apiUrl)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const apiData = await response.json()
        console.log(apiData);
        cardBody.textContent = apiData.overview
    }catch(error){
        console.error("Error is:",error);
    }
}
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