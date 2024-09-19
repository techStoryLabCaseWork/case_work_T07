const urlParams = new URLSearchParams(window.location.search);
const ID = urlParams.get("ID");
const supaBase = 'https://nujysgxdnlnjfscecbcx.supabase.co/rest/v1';
const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51anlzZ3hkbmxuamZzY2VjYmN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTg2ODYsImV4cCI6MjA0MTUzNDY4Nn0.o9gQuqvhoyChidMneiD95X_h17VpoOwjz77yNjrwj9U';


function getProduct() {
  fetch(`${supaBase}/tech_story_lab_casework?ID=eq.${ID}`, {
    method: "GET",
    headers: {
        apikey: apikey
    }
})
    .then(res => res.json())
    .then(visProdukt)
    .catch(error => console.error("Error fetching data:", error));
}

function visProdukt(produkt) {
    produkt = produkt[0]

     // document.querySelector("img").src = ``;

    document.querySelector("h1").textContent = produkt["Produktnavn og model"];
    document.querySelector("p").textContent = produkt["Taksonomi"] + ' - ' + produkt["Taksonomi 3"];
}

getProduct();