const getSomething = () => {
  // randomly get a number or null
  return Math.random() > 0.5 ? { stuff: 42 } : null;
};

function component() {
  const element = document.createElement("div");
  const something = getSomething();
  // Qui dovrebbe dare errore perchè non è possibile che something sia null
  element.innerHTML = ["Hello", "webpack", something.stuff].join(" ");

  return element;
}

document.body.appendChild(component());
