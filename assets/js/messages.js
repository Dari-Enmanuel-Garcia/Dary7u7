document.getElementById("contactForm").addEventListener("submit", async function(event) {
  event.preventDefault()
  const webhookURL = "https://discord.com/api/webhooks/1333578464623857694/YzlmXrJA6xlKTo5PEEs5HO9MbafeMbp0qpEaKd4KBaxBJAyoAq0JZ1Rs2meRGCyLpSsB"
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const discord = document.getElementById("discord").value
  const message = document.getElementById("message").value
  const loading = document.getElementById("loading")
  const messageText = {
    content: `**Name:** ${name}\n**Email:** ${email}\n**Discord Username:** ${discord}\n**Message:** ${message}`
  };

  //Ni intenten raidear ese webhook, esta de mas, aparte de tener el server silenciado ni lo reviso asi que full relleno

  try {
    loading.classList.remove("hidden")
    loading.classList.add("fixed")
    await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(messageText)
    });

    loading.classList.remove("fixed")
    loading.classList.add("hidden")
  } catch (error) {
    console.log(error)
  }
});