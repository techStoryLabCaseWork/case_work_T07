// Constants for Supabase API
const supaBase = 'https://nujysgxdnlnjfscecbcx.supabase.co/rest/v1';
const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51anlzZ3hkbmxuamZzY2VjYmN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTg2ODYsImV4cCI6MjA0MTUzNDY4Nn0.o9gQuqvhoyChidMneiD95X_h17VpoOwjz77yNjrwj9U';

// Fetch data from Supabase
fetch(`${supaBase}/tech_story_lab_casework?select=Type,brand,Taksonomi`, {
    method: "GET",
    headers: {
        apikey: apikey
    }
})
    .then(res => res.json())
    .then(showData)
    .catch(error => console.error("Error fetching data:", error));

// Function to handle the data and populate the template
function showData(items) {
    // Log the items for debugging
    console.log(items);

    // Select the container where you want to append the articles
    const container = document.querySelector('#produkt-liste-container');

    // Get the template
    const template = document.querySelector('#produkt-skabelon');

    // Filter items to show only those with "Camera with Lens"
    const filteredItems = items.filter(item => item.Type === "Camera with Lens");

    // Create a map to keep track of how many products per brand have been shown
    const brandCount = {};

    // Loop through each filtered item
    filteredItems.forEach(item => {
        // If we have shown less than 2 products for this brand, proceed
        if (!brandCount[item.brand]) {
            brandCount[item.brand] = 0;  // Initialize count for this brand
        }

        if (brandCount[item.brand] < 2) {
            // Clone the template content
            const clone = template.content.cloneNode(true);

            // Populate the template with data from the item
            clone.querySelector('.produkt-overskrift').textContent = item.brand || "No brand available";
            clone.querySelector('.produkt-beskrivelse').textContent = item.Taksonomi || "No description available";
            
            // Optionally, set an image src (if your data includes images)
            // clone.querySelector('.produkt-billede').src = item.image || "default-image.jpg";

            // Append the cloned template to the container
            container.appendChild(clone);

            // Increment the count for this brand
            brandCount[item.brand]++;
        }
    });
}


const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active"); // Brug 'menu' i stedet for 'nav'
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active"); // Luk også 'menu' når link er klikket
  });
});