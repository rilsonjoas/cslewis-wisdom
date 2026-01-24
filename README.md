# 💭 C.S. Lewis Wisdom

> A multilingual CLI tool that brings timeless wisdom from C.S. Lewis directly to your terminal

[![npm version](https://img.shields.io/npm/v/cslewis-wisdom.svg)](https://www.npmjs.com/package/cslewis-wisdom)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🌍 **Multilingual Support**: Automatically detects your system language. Now supports Portuguese, English, Spanish, French, German, and Italian.
- 📚 **Rich Quote Collection**: Over 60 carefully selected quotes, now categorized.
- 🎨 **Enhanced Terminal UI**: Uses `boxen` for a professional and elegant display.
- 🎯 **Advanced CLI**: Filter quotes by category and manually specify languages via flags.
- 🔄 **Interactive**: Ask for more quotes or exit gracefully.

## 🚀 Installation

### Global Installation (Recommended)
```bash
npm install -g cslewis-wisdom
```

### Local Installation
```bash
npm install cslewis-wisdom
```

## 📖 Usage

Simply run:

```bash
cslewis-wisdom
```

### 🎯 Flags and Options

Customize your experience using flags:

| Flag | Description | Options |
| --- | --- | --- |
| `-l, --lang` | Specify language | `pt`, `en`, `es`, `fr`, `de`, `it` |
| `-c, --category` | Filter by category | `faith`, `friendship`, `love`, `education`, `literature`, `character`, `growth`, `learning`, `art`, `humility`, `courage` |
| `-v, --version` | Show version | |

**Examples:**

```bash
# Filter by faith in English
cslewis-wisdom --lang en --category faith

# Search for wisdom about love in Italian
cslewis-wisdom -l it -c love
```

## 🌐 Language Support

The application automatically detects your system locale and displays content in:

- **Portuguese** (`pt`)
- **English** (`en`) - Default & Fallback
- **Spanish** (`es`)
- **French** (`fr`)
- **German** (`de`)
- **Italian** (`it`)

## 🛠️ Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/rilsonjoas/cslewis-wisdom.git
cd cslewis-wisdom
npm install
```

Run locally (interactive dev mode):

```bash
npm run dev
```

Build and run final version:

```bash
npm run build
npm start
```

## 📝 Quote Categories

Quotes are organized into themes, including:

- **faith**: Christianity, spirituality, and belief.
- **friendship**: The nature and value of friends.
- **love**: Vulnerability, affection, and grace.
- **education**: Learning, teaching, and values.
- **literature**: Books, reading, and art.
- **character/growth**: Honor, courage, and personal development.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Add new quotes to `src/data/quotes.json`
- Improve strings in `src/data/ui.json`
- Add support for new languages
- Enhance the user interface
- Fix bugs or improve performance

## 📄 License

MIT © Rilson Joás

## 🙏 Acknowledgments

- **C.S. Lewis** - For the timeless wisdom
- **Chalk** - For beautiful terminal colors
- The Node.js community for excellent CLI tools

---

*"We read to know we're not alone." - C.S. Lewis*
