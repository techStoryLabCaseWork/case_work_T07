const supaBase = 'https://nujysgxdnlnjfscecbcx.supabase.co/rest/v1';
const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51anlzZ3hkbmxuamZzY2VjYmN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTg2ODYsImV4cCI6MjA0MTUzNDY4Nn0.o9gQuqvhoyChidMneiD95X_h17VpoOwjz77yNjrwj9U';

fetch(`${supaBase}/tech_story_lab_casework?select=Type,brand,Taksonomi,ID`, {
    method: "GET",
    headers: {
        apikey: apikey
    }
})
    .then(res => res.json())
    .then(showData)
    .catch(error => console.error("Error fetching data:", error));

function showData(items) {
    console.log(items);

    const container = document.querySelector('#produkt-liste-container');
    const template = document.querySelector('#produkt-skabelon');
    const filteredItems = items.filter(item => item.Type === "Camera with Lens");
    const brandCount = {};

    filteredItems.forEach(item => {
        if (!brandCount[item.brand]) {
            brandCount[item.brand] = 0;
        }

        if (brandCount[item.brand] < 2) {
            const clone = template.content.cloneNode(true);

            clone.querySelector('.produkt-overskrift').textContent = item.brand || "No brand available";
            clone.querySelector('.produkt-beskrivelse').textContent = item.Taksonomi || "No description available";
            clone.querySelector('a').href = `produkt_side.html?ID=${item.ID}`
            
            // Optionally, set an image src (if your data includes images)
            // clone.querySelector('.produkt-billede').src = item.image || "default-image.jpg";

            container.appendChild(clone);

            brandCount[item.brand]++;
        }
    });
}

//**********/ BURGERMENU **********/

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
  });
});