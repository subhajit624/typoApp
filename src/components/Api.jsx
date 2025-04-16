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
  
  