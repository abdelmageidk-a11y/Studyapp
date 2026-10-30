document.addEventListener("DOMContentLoaded", () => {
  console.log("Renderer loaded ✅");

  const fileInput = document.getElementById("pdf-file-input");
  if (fileInput) {
    fileInput.addEventListener("change", (event) => {
      console.log("Selected file:", event.target.files[0]);
    });
  }
});
