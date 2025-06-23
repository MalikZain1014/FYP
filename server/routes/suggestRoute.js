import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load intents once at startup
let allPatterns = [];

const loadPatterns = () => {
  try {
    const filePath = path.join(__dirname, "../config/intents.json");
    const data = fs.readFileSync(filePath, "utf8");
    const intents = JSON.parse(data);

    allPatterns = [];
    intents.forEach((intent) => {
      if (Array.isArray(intent.patterns)) {
        allPatterns.push(...intent.patterns);
      }
    });

    console.log("✅ Patterns loaded for suggestions.");
  } catch (err) {
    console.error("❌ Failed to load patterns:", err.message);
  }
};

loadPatterns();

// GET /api/chatbot/suggestions?query=...
router.get("/suggestions", (req, res) => {
  const query = req.query.query?.toLowerCase().trim();

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  const suggestions = allPatterns.filter((pattern) =>
    pattern.toLowerCase().includes(query)
  );

  res.json({ suggestions });
});

export default router;
