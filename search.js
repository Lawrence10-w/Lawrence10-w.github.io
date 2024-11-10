// search.js

function performSearch(event) {
    event.preventDefault(); // Prevent form from submitting

    const query = document.getElementById("searchQuery").value.toLowerCase();
    const elements = document.querySelectorAll(".searchable-content");
    const resultsContainer = document.getElementById("resultsContainer");

    resultsContainer.innerHTML = ""; // Clear previous results

    let foundResults = false;

    elements.forEach(element => {
        if (element.textContent.toLowerCase().includes(query)) {
            const resultItem = document.createElement("div");
            resultItem.className = "result-item";
            resultItem.textContent = element.textContent;
            resultsContainer.appendChild(resultItem);
            foundResults = true;
        }
    });

    if (!foundResults) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    }
}
