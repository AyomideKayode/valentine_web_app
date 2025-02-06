'use strict';

// messages array
const messages = [
  'Heyyyyyy, Pretty Girl! 🥰',
  'Not to be dramatic, but meeting you might just be one of the best things to ever happen to me.',
  "Somehow, you've been on my mind ever since. And trust me, my mind has never had better taste. 😌",
  'Then we went on our first date… And I realized—yep, I want this girl. For life. No take-backs. No second thoughts.',
  "You're beautiful, you're smart, you're fun, and somehow, you make time move way too fast when we're together.",
  'I catch myself replaying old moments—your smile, your laugh, the way you look at me—and suddenly, I miss you even more.',
  "I can't wait for the next time I get to see you, hold your hands, and lose myself in those pretty eyes again.",
  "But until then… there's something I need to ask you, Mamita.",
  'Will you be my Valentine? ❤️',
];

// images array
const images = [
  './imgs/one.png',
  './imgs/two.png',
  './imgs/two.png',
  './imgs/three.png',
  './imgs/four.png',
  './imgs/five.png',
  './imgs/five.png',
  './imgs/six.png',
  './imgs/seven.png',
  './imgs/yayyyy.png', // final celebration image
];

let currentStep = 0; // tracks the current step in the messages/images sequence

// DOM elements
const teddyImage = document.createElement('img'); // image element for the teddy bear
const messageText = document.createElement('p'); // paragraph element for the message
const personalMessage = document.createElement('p'); // paragraph element for the personal message
const nextButton = document.getElementById('next-btn'); // button element for the "next" button
const backButton = document.getElementById('back-btn'); // button element for the "back" button
const container = document.querySelector('div'); // div element to hold the image and message

// function to update messages and images when the user clicks "next"
function updateContent() {
  // update image source and styling
  teddyImage.src = images[currentStep];
  teddyImage.className = 'w-48 h-48 mx-auto';

  // update message text and styling
  messageText.textContent = messages[currentStep];
  messageText.className =
    'text-center mx-auto text-4xl text-white font-bold mt-4';

  // clear previous content and append new content
  container.innerHTML = '';
  container.appendChild(teddyImage);
  container.appendChild(messageText);

  // show/hide back button based on the step index
  if (currentStep > 0) {
    backButton.style.display = 'inline-block';
  } else {
    backButton.style.display = 'none';
  }

  // if (currentStep === messages.length - 1) {
  //   nextButton.textContent = 'Yes';
  //   nextButton.addEventListener('click', showCelebration);
  // } else {
  //   nextButton.textContent = 'Next';
  //   nextButton.addEventListener('click', nextStep);
  // }

  // Update the "Next" button text and functionality
  if (currentStep === messages.length - 1) {
    nextButton.textContent = 'Yes';
    nextButton.removeEventListener('click', nextStep);
    nextButton.addEventListener('click', showCelebration);

    // Add a second "Yes" button for fun
    const secondYesButton = document.createElement('button');
    secondYesButton.textContent = 'Yes';
    secondYesButton.className =
      'mt-8 w-4/6 px-6 py-2 sm:px-10 sm:py-4 cursor-pointer bg-purple-500 text-white text-2xl rounded-lg hover:bg-purple-600 transition duration-300';
    secondYesButton.addEventListener('click', showCelebration);

    // container for the buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'mt-8 space-x-4';
    buttonContainer.appendChild(nextButton);
    buttonContainer.appendChild(secondYesButton);
    container.appendChild(buttonContainer);
  } else {
    // reguular "Next" button functionality
    nextButton.textContent = 'Next';
    nextButton.removeEventListener('click', showCelebration);
    nextButton.addEventListener('click', nextStep);

    // Append "Back" & "Next" buttons to the container
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'mt-8 space-x-4';
    buttonContainer.appendChild(backButton);
    buttonContainer.appendChild(nextButton);
    container.appendChild(buttonContainer);
  }
}

// function to move to the next step in the messages array
function nextStep() {
  if (currentStep < messages.length - 1) {
    currentStep++; // increment step index
    updateContent();
  }
}

// function to move back to the previous step in the messages array
function previousStep() {
  if (currentStep > 0) {
    currentStep--;
    updateContent();
  }
}

// function to show celebration message with confetti animation
function showCelebration() {
  // update image and message to the final celebration state
  teddyImage.src = images[9];
  teddyImage.className = 'w-48 h-48 mx-auto';
  messageText.textContent = 'Yayyyy! 🥳';
  personalMessage.textContent = 'Happy Valentine\'s Day, Mamita! ❤️';
  personalMessage.className = 'text-center mx-auto text-2xl italic text-white font-bold mt-4';

  // clear container and append celebration content
  container.innerHTML = '';
  container.appendChild(teddyImage);
  container.appendChild(messageText);
  container.appendChild(personalMessage);

  // confetti effect
  let duration = 15 * 1000; // 15 seconds
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  // helper function to generate a random number within a range
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  // interval to generate confetti particles over time
  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
}

// event listeners for the "next" and "back" buttons
backButton.addEventListener('click', previousStep);
nextButton.addEventListener('click', nextStep);

// initialize the content on page load
updateContent();
