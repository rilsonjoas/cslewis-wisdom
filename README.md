# C.S. Lewis Wisdom

> A multilingual CLI tool that brings quotes from C.S. Lewis to your terminal

[![npm version](https://img.shields.io/npm/v/cslewis-wisdom.svg)](https://www.npmjs.com/package/cslewis-wisdom)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="center">
  <img src="docs/screenshots/preview.png" alt="C.S. Lewis Wisdom CLI Preview" width="800" />
</p>

## Features

- **Multilingual**: detects your system language automatically. Supports Portuguese, English, Spanish, French, German, and Italian.
- **Quote collection**: over 90 quotes in Portuguese, English, and Spanish (plus a smaller starter set in French, German, and Italian), organized by category, all cross-checked against their original sources.
- **Terminal UI**: uses `boxen` for a clean, boxed display.
- **CLI flags**: filter by category, or force a specific language.
- Prompts for another quote instead of just quitting after one.

## Installation

### Global (recommended)
```bash
npm install -g cslewis-wisdom
```

### Local
```bash
npm install cslewis-wisdom
```

## Usage

```bash
cslewis-wisdom
```

### Flags

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

## Language support

The CLI detects your system locale and falls back to English if it can't:

- Portuguese (`pt`)
- English (`en`) — default and fallback
- Spanish (`es`)
- French (`fr`)
- German (`de`)
- Italian (`it`)

## Development

```bash
git clone https://github.com/rilsonjoas/cslewis-wisdom.git
cd cslewis-wisdom
npm install
```

Run locally in dev mode:

```bash
npm run dev
```

Build and run the compiled version:

```bash
npm run build
npm start
```

## Quote categories

- **faith** — Christianity, spirituality, belief
- **friendship** — the nature and value of friends
- **love** — vulnerability, affection, grace
- **education** — learning, teaching, values
- **literature** — books, reading, art
- **character / growth** — honor, courage, personal development

## Contributing

- Add quotes to `src/data/quotes.json` — please keep the source verifiable; C.S. Lewis has a long history of misattributed quotes circulating online, so anything added should trace back to an actual book or letter, not just a quote-of-the-day site.
- Improve the UI strings in `src/data/ui.json`
- Add a new language
- Fix bugs, improve the terminal UI, whatever you find

## License

MIT © Rilson Joás

## Acknowledgments

- C.S. Lewis, for the source material
- Chalk and boxen, for making a terminal app look decent
- The Node.js CLI ecosystem generally

---

*"There are no ordinary people. You have never talked to a mere mortal." — C.S. Lewis, The Weight of Glory*
