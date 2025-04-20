function changeText() {
    document.getElementById("info-text").textContent = "Text content changed!";
  }
  
  function toggleStyle() {
    const title = document.getElementById("main-title");
    title.style.color = title.style.color === "crimson" ? "black" : "crimson";
    title.style.fontSize = title.style.fontSize === "2.5rem" ? "1.5rem" : "2.5rem";
  }
  
  function addElement() {
    const newPara = document.createElement("p");
    newPara.textContent = "A new paragraph was added!";
    newPara.id = "new-paragraph";
    document.getElementById("element-container").appendChild(newPara);
  }
  
  function removeElement() {
    const para = document.getElementById("new-paragraph");
    if (para) {
      para.remove();
    }
  }
  