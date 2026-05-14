document.addEventListener("DOMContentLoaded", function () {
  const toc = document.getElementById("toc");
  const content = document.getElementById("content");

  if (!toc || !content) return;

  const headings = content.querySelectorAll("h1, h2, h3");

  headings.forEach(function (heading) {
    if (!heading.id) {
      heading.id = heading.textContent
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ł/g, "l")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
    }

    const li = document.createElement("li");
    li.className = "toc-" + heading.tagName.toLowerCase();

    const a = document.createElement("a");
    a.href = "#" + heading.id;
    a.textContent = heading.textContent;

    li.appendChild(a);
    toc.appendChild(li);
  });
});
