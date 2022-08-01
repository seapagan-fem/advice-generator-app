console.log("JavaScript loaded.")

// get a nugget of advice from the API
const getAdvice = async () => {
  const data = await fetch("https://api.adviceslip.com/advice",{cache: 'no-store'})
    .then(res => res.json())
  const { id, advice } = data.slip

  document.getElementById("advice-id").innerText = id
  document.getElementById("advice").innerText = `“${advice}”`
  }

// trigger on the button
document.getElementById("advice-button").addEventListener("click", () => {
  getAdvice()
})


// get a new advice on load/reload
getAdvice()
