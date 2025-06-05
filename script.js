// message on page load
function message() {
  alert("Welcome to the JavaScript Events Demo!")
  console.log("Page loaded successfully!")
}

// Handle dropdown change
function handleSelectChange() {
  const select = document.getElementById("color-select")
  const display = document.getElementById("selected-color-display")

  if (select.value) {
    display.className = `p-3 rounded-3 text-white bg-${select.value}`
    display.textContent = `Selected: ${select.options[select.selectedIndex].text}`
  } else {
    display.className = "p-3 rounded-3 text-white bg-secondary"
    display.textContent = "No color selected"
  }
}

// Calculator functions
function calculate(operation) {
  const num1 = Number.parseFloat(document.getElementById("num1").value)
  const num2 = Number.parseFloat(document.getElementById("num2").value)
  const resultDisplay = document.getElementById("result")

  if (isNaN(num1) || isNaN(num2)) {
    resultDisplay.textContent = "Please enter valid numbers"
    return
  }

  let result
  switch (operation) {
    case "add":
      result = num1 + num2
      break
    case "subtract":
      result = num1 - num2
      break
    case "multiply":
      result = num1 * num2
      break
    case "divide":
      if (num2 === 0) {
        resultDisplay.textContent = "Cannot divide by zero"
        return
      }
      result = num1 / num2
      break
  }

  resultDisplay.textContent = `Result: ${result}`
}

// Color box mouse events
function changeBoxColor() {
  const box = document.getElementById("color-box")
  box.classList.remove("bg-primary")
  box.classList.add("bg-danger")
  box.textContent = "Mouse is over me!"
}

function resetBoxColor() {
  const box = document.getElementById("color-box")
  box.classList.remove("bg-danger")
  box.classList.add("bg-primary")
  box.textContent = "Hover over me!"
}

// Keyboard events
function handleKeyDown(event) {
  const keyDisplay = document.getElementById("key-display")
  keyDisplay.textContent = `Key pressed: ${event.key} (Code: ${event.code})`
}

// Theme toggle functionality
document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode")
  const container = document.getElementById("main-container")

  if (document.body.classList.contains("dark-mode")) {
    this.textContent = "Light Mode"
    this.classList.remove("btn-outline-primary")
    this.classList.add("btn-outline-light")
  } else {
    this.textContent = "Dark Mode"
    this.classList.remove("btn-outline-light")
    this.classList.add("btn-outline-primary")
  }
})

// Form submission handler
function handleFormSubmit(event) {
  event.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value
  const formMessage = document.getElementById("form-message")

  // Display success message
  formMessage.textContent = `Thank you, ${name}! Your message has been received.`
  formMessage.classList.remove("d-none", "alert-danger")
  formMessage.classList.add("alert", "alert-success")

  // alert(`Thank you, ${name}! Your message has been received.`)

  // Reset the form
  document.getElementById("user-form").reset()

  // Hide the message after 5 seconds
  setTimeout(() => {
    formMessage.classList.add("d-none")
  }, 5000)
}

// Text manipulation functions
function transformText(operation) {
  const input = document.getElementById("text-input").value
  const resultDisplay = document.getElementById("text-result")

  if (!input) {
    resultDisplay.textContent = "Please enter some text first"
    return
  }

  switch (operation) {
    case "uppercase":
      resultDisplay.textContent = input.toUpperCase()
      break
    case "lowercase":
      resultDisplay.textContent = input.toLowerCase()
      break
    case "reverse":
      resultDisplay.textContent = input.split("").reverse().join("")
      break
    case "count":
      resultDisplay.textContent = `Your text contains ${input.length} characters`
      break
  }
}

// Counter variables and functions
let count = 0
let timerInterval = null
let seconds = 0
let minutes = 0
let timerRunning = false

function incrementCounter() {
  count++
  updateCounterDisplay()
}

function decrementCounter() {
  if (count > 0) {
    count--
  }
  updateCounterDisplay()
}

function resetCounter() {
  count = 0
  updateCounterDisplay()
}

function updateCounterDisplay() {
  document.getElementById("counter-display").textContent = count
}

function toggleTimer() {
  const timerButton = document.getElementById("timer-button")

  if (timerRunning) {
    // Stop the timer
    clearInterval(timerInterval)
    timerButton.textContent = "Start Timer"
    timerRunning = false
  } else {
    // Start the timer
    timerInterval = setInterval(updateTimer, 1000)
    timerButton.textContent = "Stop Timer"
    timerRunning = true
  }
}

function updateTimer() {
  seconds++
  if (seconds >= 60) {
    seconds = 0
    minutes++
  }

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  document.getElementById("timer-display").textContent = formattedTime
}
