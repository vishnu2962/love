// Keerthi's name typing animation
function typeText(element, text, speed) {
  let i = 0;
  const interval = setInterval(function() {
    element.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(interval);
  }, speed);
}

// Message typing animation for proposal
function typeProposalMessage(element, text, speed) {
  let i = 0;
  const interval = setInterval(function() {
    element.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(interval);
  }, speed);
}

document.getElementById('next-button').addEventListener('click', function() {
  // Reveal message and start name typing after a delay
  document.getElementById('message').style.opacity = 1;
  document.getElementById('message').style.transform = "translateY(0)";
  document.getElementById('next-button').innerText = "The Proposal is Coming!";
  document.getElementById('next-button').disabled = true;

  // Start Keerthi's name typing animation after a 10-second delay
  setTimeout(function() {
    const nameElement = document.getElementById('name');
    typeText(nameElement, "VISHNU 💗", 100); // Speed of typing 100ms per character
  }, 10000);

  // Start hearts falling animation
  startHeartsFall();

  // Start countdown timer
  startCountdown();
});

let countdownValue = 6; // 3 minutes
const countdownElement = document.getElementById('countdown');

function startCountdown() {
  const interval = setInterval(function() {
    let minutes = Math.floor(countdownValue / 60);
    let seconds = countdownValue % 60;
    countdownElement.innerText = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    countdownValue--;

    if (countdownValue < 0) {
      clearInterval(interval);
      displayProposal();
    }
  }, 1000);
}

// function displayProposal() {
//   const proposalElement = document.createElement('h2');
//   proposalElement.style.color = '#f44336';
//   proposalElement.style.fontSize = '2rem';
//   proposalElement.style.fontWeight = 'bold';
//   proposalElement.style.animation = 'fadeIn 2s ease-out';
//   document.getElementById('card').appendChild(proposalElement);

//   // Start typing the proposal message after countdown ends
//   typeProposalMessage(proposalElement, "Will You Be Mine, Keerthi? 💍", 100); // Speed of typing 100ms per character

//   const imageElement = document.createElement('img');
//   imageElement.src = 'https://png.pngtree.com/png-vector/20240905/ourmid/pngtree-a-couple-proposing-with-red-rose-on-valentine-day-boy-knee-png-image_13751003.png'; // Replace with your image URL
//   imageElement.alt = 'Heart Image';
//   imageElement.style.width = '100px';
//   imageElement.style.height = '100px';
//   imageElement.style.marginTop = '20px';
//   imageElement.style.borderRadius = '50%'; // Optional: makes the image circular
//   imageElement.style.animation = 'fadeIn 2s ease-out'; // Optional: fade-in effect for the image

//   // Append the image after the proposal message
//   document.getElementById('card').appendChild(imageElement);

//   document.addEventListener("DOMContentLoaded", function () {
//   const messageContainer = document.getElementById("message"); // Target the correct parent container

//   // Create buttons container at the bottom of the card
//   const buttonsContainer = document.createElement("div");
//   buttonsContainer.id = "buttons-container";
//   buttonsContainer.style.marginTop = "20px"; // Space from the content
//   buttonsContainer.style.textAlign = "center"; // Center the buttons

//   // Create "Yes" button
//   const yesButton = document.createElement("button");
//   yesButton.id = "yes-button";
//   yesButton.className = "proposal-button";
//   yesButton.innerText = "Yes";

//   // Create "No" button
//   const noButton = document.createElement("button");
//   noButton.id = "no-button";
//   noButton.className = "proposal-button";
//   noButton.innerText = "No";

//   // Append buttons to the container
//   buttonsContainer.appendChild(yesButton);
//   buttonsContainer.appendChild(noButton);

//   // Append buttons container **below the heart image**
//   document.getElementById("proposal-image").insertAdjacentElement("afterend", buttonsContainer);

//   // Button click handlers
//   yesButton.addEventListener("click", function () {
//     document.getElementById("proposal-text").innerText = "Give me a hug and kiss ❤️";
//     document.getElementById("proposal-image").src = "hug-kiss.png"; // Replace with actual image
//   });

//   noButton.addEventListener("click", function () {
//     document.getElementById("proposal-text").innerText = "You are missing a golden-hearted person 😢";
//     document.getElementById("proposal-image").src = "sad-heart.png"; // Replace with actual image
//   });
// });

// const buttonsContainer = document.createElement("div");
//   buttonsContainer.id = "buttons-container";
//   buttonsContainer.style.marginTop = "20px"; // Space from the content
//   buttonsContainer.style.textAlign = "center"; // Center the buttons

//   const yesButton = document.createElement("button");
//   yesButton.id = "yes-button";
//   yesButton.className = "proposal-button";
//   yesButton.innerText = "Yes";

//   const noButton = document.createElement("button");
//   noButton.id = "no-button";
//   noButton.className = "proposal-button";
//   noButton.innerText = "No";

//   buttonsContainer.appendChild(yesButton);
//   buttonsContainer.appendChild(noButton);

//   // ✅ Append Buttons Below Image
//   imageElement.insertAdjacentElement("afterend", buttonsContainer);

//   // ✅ Add Button Click Events
//   yesButton.addEventListener("click", function () {
//     document.getElementById("proposal-text").innerText = "Give me a hug and kiss ❤️";
//     document.getElementById("proposal-image").src = "hug-kiss.png"; // Replace with actual image
//   });

//   noButton.addEventListener("click", function () {
//     document.getElementById("proposal-text").innerText = "You are missing a golden-hearted person 😢";
//     document.getElementById("proposal-image").src = "sad-heart.png"; // Replace with actual image
//   });

//   // Show the rose flower image after the proposal
//   setTimeout(function() {
//     document.getElementById('rose').classList.add('fade-in');
//   }, 3000); // Show rose after proposal

  
  
//}

// Add buttons to the bottom of the card after the countdown and proposal
function displayProposal() {
  const proposalElement = document.createElement('h2');
  proposalElement.style.color = '#f44336';
  proposalElement.style.fontSize = '2rem';
  proposalElement.style.fontWeight = 'bold';
  proposalElement.style.animation = 'fadeIn 2s ease-out';
  document.getElementById('card').appendChild(proposalElement);

  // Start typing the proposal message after countdown ends
  typeProposalMessage(proposalElement, "Will You Be Mine, Keerthi? 💍", 100); // Speed of typing 100ms per character

  const imageElement = document.createElement('img');
  imageElement.src = 'https://png.pngtree.com/png-vector/20240905/ourmid/pngtree-a-couple-proposing-with-red-rose-on-valentine-day-boy-knee-png-image_13751003.png'; // Replace with your image URL
  imageElement.alt = 'Heart Image';
  imageElement.style.width = '100px';
  imageElement.style.height = '100px';
  imageElement.style.marginTop = '20px';
  imageElement.style.borderRadius = '50%'; // Optional: makes the image circular
  imageElement.style.animation = 'fadeIn 2s ease-out'; // Optional: fade-in effect for the image

  // Append the image after the proposal message
  document.getElementById('card').appendChild(imageElement);

  // Create the buttons container at the bottom of the card
  const buttonsContainer = document.createElement('div');
  buttonsContainer.id = 'buttons-container';
  buttonsContainer.style.marginTop = '30px'; // Space from the content
  buttonsContainer.style.textAlign = 'center'; // Center the buttons
  buttonsContainer.style.position = 'absolute'; // Fixing buttons to bottom
  buttonsContainer.style.bottom = '30px'; // Distance from the bottom of the card
  buttonsContainer.style.left = '50%'; // Center horizontally
  buttonsContainer.style.transform = 'translateX(-50%)'; // Adjust for perfect centering

  // Create "Yes" button
  const yesButton = document.createElement('button');
  yesButton.id = 'yes-button';
  yesButton.className = 'proposal-button';
  yesButton.innerText = 'Yes';

  // Create "No" button
  const noButton = document.createElement('button');
  noButton.id = 'no-button';
  noButton.className = 'proposal-button';
  noButton.innerText = 'No';

  // Append buttons to the container
  buttonsContainer.appendChild(yesButton);
  buttonsContainer.appendChild(noButton);

  // Append buttons container below the proposal image
  document.getElementById('card').appendChild(buttonsContainer);

  // Button click handlers
  yesButton.addEventListener('click', function () {
    alert("You said Yes! 💍❤️");
    // Perform actions after "Yes" button click, like changing content
    document.getElementById('proposal-text').innerText = 'Give me a hug and kiss ❤️';
    document.getElementById('proposal-image').src = 'hug-kiss.png'; // Replace with actual image
  });

  noButton.addEventListener('click', function () {
    alert("You said No! 😢");
    // Perform actions after "No" button click
    document.getElementById('proposal-text').innerText = 'You are missing a golden-hearted person 😢';
    document.getElementById('proposal-image').src = 'sad-heart.png'; // Replace with actual image
  });

  // Show the rose flower image after the proposal
  setTimeout(function () {
    document.getElementById('rose').classList.add('fade-in');
  }, 3000); // Show rose after proposal
}


function startHeartsFall() {
  const heartCount = 20; // Number of hearts to fall
  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️'; // Emoji heart
    heart.style.left = `${Math.random() * 100}%`; // Random horizontal position
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall duration
    document.body.appendChild(heart);
  }

  
}
