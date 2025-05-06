# 🥠 Fortune Cookie Message Generator

A fun and lightweight JavaScript program that generates random fortune cookie messages. Great for practicing randomization, working with arrays, or just enjoying some daily positivity!

## 📜 Features

- Generates a single randomized fortune cookie message.
- Option to generate multiple unique fortunes.
- Simple, modular structure using helper functions.
- Easily reusable with `module.exports`.

## 🚀 Usage

### Run the script

```bash
node fortune.js
This will display:

One fortune message.

Three additional random fortune messages.

Output Example
python
Copy
Edit
Your Fortune Cookie Says:
Destiny reveals you'll unlock inner peace in the coming months. Be patient!

Three More Fortunes:
1. Soon you'll discover a pleasant surprise within the week. Share your happiness!
2. Tomorrow brings experience financial prosperity when you least expect it. Trust your instincts!
3. Your path leads to receive valuable knowledge before the next full moon. Follow your dreams!
🔧 File Structure
text
Copy
Edit
fortune.js       # Main script with message logic and exports
README.md        # This documentation
📦 Exported Functions
You can import and reuse these in other files:

js
Copy
Edit
const { generateFortune, generateMultipleFortunes } = require('./fortune');

console.log(generateFortune());
console.log(generateMultipleFortunes(5));
💡 Ideas for Expansion
Web interface using HTML/CSS/JS

Daily fortune CLI tool with scheduling

Fortune API using Node.js + Express

📄 License
MIT — feel free to use, share, and modify.

Made with 💬 and 🍪

yaml
Copy
Edit

---

Let me know if you'd like a web version with form input or styled terminal output too!