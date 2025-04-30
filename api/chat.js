export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { message } = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        process.env.sk -
        proj -
        LpYeFW6JypQtOG6xwaZIKT8riL48cT -
        lSlCwxBJUnCFY25GzNS4tedcEUCvfpWULy6gbh1JpcAT3BlbkFJRE26tyP_rWGBn2_FQjm51NWe8uWnBjgP -
        vwxnLIyR4yLC0ZAyg2r9WHQSFJ7lVcg7rT9EA0boA
      }`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    }),
  });

  const data = await response.json();
  res.status(200).json(data);
}
