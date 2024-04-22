export default function ScroolToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// use case
// onClick={() => scrollToSection("id-name")}
