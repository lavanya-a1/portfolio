# Lavanya's Portfolio

A plain HTML, CSS and JavaScript site. There is no build step and no React, so it is easy to edit.

## Project structure

```
portfolio/
├── index.html          page content (projects, skills, achievements)
├── css/style.css       all styling and colors (see :root at the top)
├── js/main.js          the bug mascot's jokes (edit the `lines` array)
├── assets/favicon.svg  browser tab icon
├── package.json        scripts for the local dev server
└── .vscode/            recommended VS Code settings
```

## Option A: easiest (no installs)

1. Unzip the folder.
2. Double-click `index.html`. It opens in your browser.

## Option B: VS Code with Live Server (auto-reload)

1. Install VS Code from https://code.visualstudio.com
2. Open VS Code, choose **File > Open Folder** and select the `portfolio` folder.
3. When prompted, install the recommended extension **Live Server** (or install it from the Extensions tab).
4. Right-click `index.html` and choose **Open with Live Server**.
5. Edit and save any file and the browser refreshes automatically.

## Option C: npm dev server

1. Install Node.js (LTS) from https://nodejs.org
2. Open a terminal in the project folder (in VS Code: **Terminal > New Terminal**).
3. Install dependencies and start:

```powershell
npm install
npm start
```

4. Your browser opens at http://localhost:5500 and reloads on every save. Press `Ctrl + C` in the terminal to stop.

If PowerShell blocks `npm` with a script-execution error, run `npm.cmd install` and `npm.cmd start`, or use Command Prompt instead.

## Things to edit

- **Text, projects, links:** `index.html`. Search for `<article class="pol">` to find the project cards.
- **Colors:** the `--pink`, `--lav`, `--mint`, `--sun` variables at the top of `css/style.css`.
- **Mascot jokes:** the `lines` array in `js/main.js`.
- **Project links:** add `<a class="gh" href="YOUR_URL">GitHub</a>` inside each project card.

## Deploying

Upload the folder to any static host (GitHub Pages, Netlify, Vercel). No build command is needed, and the publish directory is the project root.

Fonts (Fredoka, Patrick Hand) load from Google Fonts, so you need an internet connection to see them.
