(function(){
  var lines=["Ouch! Okay, that one counted as a bug report.","I’m not a bug, I’m an undocumented feature.","Lavanya fixed me in 3 minutes. Rude.","It works on my machine. And hers.","Say cheese! 📸 (that’s her other hobby)","Redis cached this joke, so you’ve heard it before.","Please hire her before I find a real bug.","Segfault? Never heard of her.","She catches bugs in code and beautiful moments behind the lens."];
  var i=0,el=document.getElementById('say'),b=document.getElementById('bug');
  b.addEventListener('click',function(){el.textContent=lines[i%lines.length];i++;});
})();


(() => {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");

  if (!toggle) return;

  const saved = localStorage.getItem("lavanya-theme");
  let theme = saved === "dark" || saved === "light"
    ? saved
    : "light";

  function setTheme(nextTheme) {
    theme = nextTheme;
    root.dataset.theme = theme;
    toggle.textContent = theme === "dark" ? "☀ Light" : "☾ Dark";
    toggle.setAttribute("aria-pressed", String(theme === "dark"));
    localStorage.setItem("lavanya-theme", theme);
  }

  toggle.addEventListener("click", () => {
    setTheme(theme === "dark" ? "light" : "dark");
  });

  setTheme(theme);
})();
