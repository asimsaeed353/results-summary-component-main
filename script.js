
var details = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
]
  

function addDetails() {
    var clutter = "";
    details.forEach(detail => {
        clutter += `<div class="stat__info">
          <div class="category">
          <img src=${detail.icon} alt="${detail.category}-icon">
          <p>${detail.category}</p>
        </div>
          <p class="score"><strong>${detail.score}</strong><span> / 100</span></p>
        </div>`
    });

    document.querySelector('.summary__stats').innerHTML = clutter;
}
  
addDetails();