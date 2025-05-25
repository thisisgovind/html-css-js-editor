const htmlEditor = document.getElementById("html-code");
const cssEditor = document.getElementById("css-code");
const jsEditor = document.getElementById("js-code");
const outputFrame = document.getElementById("output");

function runCode() {
  const html = htmlEditor.value;
  const css = `<style>${cssEditor.value}</style>`;
  const js = `<script>${jsEditor.value}<\/script>`;
  const code = `${html}\n${css}\n${js}`;
  outputFrame.srcdoc = code;

  // Save code to localStorage
  localStorage.setItem("html", html);
  localStorage.setItem("css", cssEditor.value);
  localStorage.setItem("js", jsEditor.value);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const mode = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("mode", mode);
}

function autoRun() {
  runCode();
}

window.onload = () => {
  // Restore saved code
  htmlEditor.value = localStorage.getItem("html") || "<h1>Hello 👋</h1>";
  cssEditor.value = localStorage.getItem("css") || "body { font-family: sans-serif; }";
  jsEditor.value = localStorage.getItem("js") || "console.log('Hello from JS');";

  // Set theme
  if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
  }

  runCode();

  // Enable auto-run
  htmlEditor.addEventListener("input", autoRun);
  cssEditor.addEventListener("input", autoRun);
  jsEditor.addEventListener("input", autoRun);
};
