import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let intentsCache = [];

const loadIntents = () => {
  try {
    const filePath = path.join(__dirname, "../config/intents.json");
    const data = fs.readFileSync(filePath, "utf8");
    intentsCache = JSON.parse(data);
    console.log("✅ Intents loaded successfully.");
  } catch (err) {
    console.error("❌ Failed to load intents:", err.message);
  }
};

loadIntents();

// POST /api/chatbot/chat
router.post("/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const userMessage = message
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, ""); // removes all punctuation

  let matchedIntent = null;

  for (const intent of intentsCache) {
    if (!Array.isArray(intent.patterns)) continue;

    for (const pattern of intent.patterns) {
      const patternWords = pattern
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .split(/\s+/);
      const isMatch = patternWords.every((word) => {
        const wordRegex = new RegExp(`\\b${word}\\b`, "i");
        return wordRegex.test(userMessage);
      });

      if (isMatch) {
        matchedIntent = intent;
        break;
      }
    }

    if (matchedIntent) break;
  }

  if (matchedIntent) {
    const response =
      matchedIntent.responses[
        Math.floor(Math.random() * matchedIntent.responses.length)
      ];
    return res.json({ response });
  }

  return res.json({
    response:
      "I'm sorry, I didn't understand that. Could you rephrase your question?",
  });
});

// POST /api/chatbot/reload-intents
router.post("/reload-intents", (req, res) => {
  try {
    loadIntents();
    res.json({ success: true, message: "Intents reloaded successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to reload intents" });
  }
});

export default router;
