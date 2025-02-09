const tvShowIds = [124364, 61889,62560]; 
const accordions = document.querySelectorAll(".accordion-item"); 
const table = document.querySelectorAll("tbody tr")
tvShowIds.forEach((tvShowId, index) => {
  const accordion = accordions[index]; 
  const tables = table[index]
  const secondTds = tables.querySelector(".third-td")
  const thirdTds = tables.querySelector(".second-td")
  const tds = tables.querySelector(".first-td")
  const accordionButton = accordion.querySelector(".accordion-button");
  const accordionBody = accordion.querySelector(".accordion-body");
  getTvShowDetails(tvShowId, accordionButton, accordionBody,tds,secondTds,thirdTds); 
});
async function getTvShowDetails(tvShowId, accordionButton, accordionBody,tds ,secondTds,thirdTds) {
  try {
    const apiKey = 'b0cc4f9bd4880968340686e1169ba9c3';
    const apiUrl = `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${apiKey}`;
    console.log(apiUrl);
    

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const tvShowData = await response.json();
    accordionButton.textContent = tvShowData.name;
    accordionBody.textContent = tvShowData.overview;
    tds.textContent = tvShowData.name;
    secondTds.textContent = tvShowData.vote_average
    thirdTds.textContent = tvShowData.number_of_seasons
    console.log(tvShowData);
    
  } catch (error) {
    console.error('Error:', error);
  }
}
