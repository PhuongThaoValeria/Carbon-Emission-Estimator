async function callAgent() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  output.textContent = "Calculating...";

  try {
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: `Estimate carbon emission for: ${input}` }] }]
      })
    });

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
    output.textContent = text;
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
}
