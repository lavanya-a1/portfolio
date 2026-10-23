# Lavanya's Portfolio

A plain HTML, CSS and JavaScript site. There is no build step and no React

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
