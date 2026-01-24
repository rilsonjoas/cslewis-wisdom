#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import { Command } from "commander";
import readline from "readline";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// --- Load Package Info ---
const pkg = JSON.parse(readFileSync(join(__dirname, "package.json"), "utf8"));
const VERSION = pkg.version || "0.0.0";

// --- Types ---
interface Quote {
  text: string;
  category: string;
}

interface UIStrings {
  title: string;
  author: string;
  askAnother: string;
  goodbye: string;
}

interface Data {
  [key: string]: Quote[];
}

interface UIData {
  [key: string]: UIStrings;
}

// --- Load Data ---
const quotesData: Data = JSON.parse(readFileSync(join(__dirname, "src/data/quotes.json"), "utf8"));
const uiData: UIData = JSON.parse(readFileSync(join(__dirname, "src/data/ui.json"), "utf8"));

// --- Detection & Config ---
function getSystemLanguage(): string {
  const envLang = process.env["LANG"] || process.env["LANGUAGE"] || process.env["LC_ALL"] || "en_US";
  const code = envLang.split(/[._-]/)[0]?.toLowerCase() || "en";
  
  const supported = ["pt", "en", "es", "fr", "de", "it"];
  return supported.includes(code) ? code : "en";
}

const program = new Command();

program
  .name("cslewis-wisdom")
  .description("CLI tool that displays multilingual C.S. Lewis wisdom quotes")
  .version(VERSION)
  .option("-l, --lang <code\>", "Specify language (pt, en, es, fr, de, it)")
  .option("-c, --category <name\>", "Filter by category (faith, friendship, love, education, etc.)")
  .action((options) => {
    run(options);
  });

program.parse(process.argv);

function run(options: { lang?: string; category?: string }) {
  const lang = options.lang || getSystemLanguage();
  const category = options.category ? options.category.toLowerCase() : null;
  
  const currentQuotes = quotesData[lang] || quotesData["en"] || [];
  const currentUIStrings = uiData[lang] || uiData["en"];

  if (!currentUIStrings) {
    console.error(chalk.red("Error: UI strings not found."));
    process.exit(1);
  }
  
  const currentUI = currentUIStrings; // Helps narrowing

  // Filter quotes
  let filteredQuotes = currentQuotes;
  if (category) {
    filteredQuotes = currentQuotes.filter(q => q.category.toLowerCase() === category);
    if (filteredQuotes.length === 0) {
      console.log(chalk.red(`\nNo quotes found for category "${category}" in ${lang}.`));
      process.exit(1);
    }
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function displayQuote() {
    process.stdout.write("\x1Bc"); // Clear console

    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    const quote = filteredQuotes[randomIndex];

    if (!quote) return;

    // FIX: Using fixed width and wrapping logic for Boxen to avoid UI issues
    const boxWidth = 60;
    const content = `\n${chalk.yellow.italic(`"${quote.text}"`)}\n\n${chalk.green.bold(currentUI.author)}\n`;

    console.log(
      boxen(content, {
        title: chalk.cyan.bold(currentUI.title),
        titleAlignment: "center",
        padding: 1,
        margin: 1,
        borderStyle: "round",
        borderColor: "cyan",
        width: boxWidth,
        textAlignment: "center",
      })
    );
  }

  function askForAnother() {
    rl.question(chalk.white(`\n${currentUI.askAnother}`), (answer: string) => {
      const positiveAnswers = ["s", "y", "si", "sí", "o", "j"];
      if (positiveAnswers.includes(answer.toLowerCase())) {
        displayQuote();
        askForAnother();
      } else {
        console.log(chalk.cyan(currentUI.goodbye));
        rl.close();
      }
    });
  }

  displayQuote();
  askForAnother();
}
