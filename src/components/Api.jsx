const fetchOpenRouterMessage = async (userPrompt) => {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer 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",
          "HTTP-Referer": "https://your-website.com",
          "X-Title": "MySiteTitle",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: userPrompt, 
                },
              ],
            },
          ],
        }),
      });
  
      const data = await response.json();
      const message =
        data.choices?.[0]?.message?.content?.[0]?.text ||
        data.choices?.[0]?.message?.content ||
        "No reply";
  
      return message;
    } catch (error) {
      console.error("❌ Network or JS Error:", error);
      return "Error fetching data";
    }
  };
  
  export { fetchOpenRouterMessage };
  
  
