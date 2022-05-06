const sections = document.getElementsByClassName("section");
const liens = document.getElementsByClassName("liens-section");
const tip = document.getElementById('tip');
const tipCssText = "font-style:italic;padding:2px 4px;margin:2px 0 0 2px;font-size: 0.7rem;background-color: rgb(216, 216, 216);border-radius: 1px;"
const tipCssTextNonVisible = "visibility:hidden;" + tipCssText;

tip.style.cssText = tipCssText;

const changerClassesLiens = (e) => {
  for (let i = 0; i < liens.length; i++) {
    const lien = liens[i];
    lien.classList.remove("active", "bg-secondary");
  }
  e.classList.add("active", "bg-secondary");
};

const afficherUneSection = (element) => {
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    section.style.cssText = "display:none";
  }
  element.style.cssText = "display:block";
};

const changerAffichage = () => {
  for (let i = 0; i < liens.length; i++) {
    const lien = liens[i];
    if (lien.classList.contains("active") && i != 0) {
      afficherUneSection(sections[i - 1]);
    } else if(lien.classList.contains("active") && i==0) {
      for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    section.style.cssText = "display:block";
  }
    }
  }
};

for (let i = 0; i < liens.length; i++) {
  const lien = liens[i];
  lien.classList.add('font-weight-bold');
}

for (let i = 0; i < liens.length; i++) {
  const lien = liens[i];
  lien.addEventListener("click", () => {
    event.preventDefault();
    if(lien.classList.contains("afficher-tip")){
      tip.style.cssText = tipCssText;
    }else{
      tip.style.cssText = tipCssTextNonVisible;
    }
    changerClassesLiens(lien);
    changerAffichage();
  });
}