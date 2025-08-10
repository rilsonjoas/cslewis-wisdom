# 💭 C.S. Lewis Wisdom

> A multilingual CLI tool that brings timeless wisdom from C.S. Lewis directly to your terminal

[![npm version](https://img.shields.io/npm/v/cslewis-wisdom.svg)](https://www.npmjs.com/package/cslewis-wisdom)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🌍 **Multilingual Support**: Automatically detects your system language and displays quotes in Portuguese, English, or Spanish
- 📚 **Rich Quote Collection**: Over 40 carefully selected quotes from C.S. Lewis
- 🎨 **Beautiful Terminal Display**: Clean, colorful formatting that's easy on the eyes
- ⚡ **Lightweight**: Minimal dependencies for fast installation and execution
- 🔄 **Interactive**: Ask for more quotes or exit gracefully

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

After global installation, simply run:

```bash
cslewis-wisdom
```

Or if installed locally:

```bash
npx cslewis-wisdom
```

The application will:
1. Display a random C.S. Lewis quote in your system language
2. Ask if you'd like another quote
3. Continue until you choose to exit

## 🌐 Language Support

The application automatically detects your system locale and displays content in:

- **Portuguese** (`pt`) - Default for `pt_*` locales
- **English** (`en`) - Default for `en_*` locales and fallback
- **Spanish** (`es`) - Default for `es_*` locales

Language detection is based on environment variables: `LANG`, `LANGUAGE`, or `LC_ALL`.

## 🎯 Examples

### Portuguese Interface
```
💭 Sabedoria de C.S. Lewis

"A amizade nasce no momento em que uma pessoa diz para outra: 
'O quê! Você também? Pensei que eu era o único.'"

— C.S. Lewis

Deseja outra pérola de sabedoria? (s/n)
```

### English Interface
```
💭 C.S. Lewis Wisdom

"Friendship is born at that moment when one person says to another, 
'What! You too? I thought I was the only one.'"

— C.S. Lewis

Would you like another pearl of wisdom? (y/n)
```

## 🛠️ Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/seu-usuario/cslewis-wisdom.git
cd cslewis-wisdom
npm install
```

Run locally:

```bash
node index.js
```

## 📝 Quote Collection

This tool features over 40 inspirational quotes from C.S. Lewis, covering themes like:

- Faith and Christianity
- Friendship and Love
- Education and Learning
- Courage and Character
- Humility and Growth
- Art and Literature

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Add new quotes in any of the supported languages
- Improve translations
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
