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
      console.error("Network or JS Error:", error);
      return "Error fetching data";
    }
  };
  
  export { fetchOpenRouterMessage };
  
  
