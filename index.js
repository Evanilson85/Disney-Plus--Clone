window.addEventListener("scroll", (e) => {
  let scroll = window.scrollY;

  let header = document.querySelector("header");

  console.log(scroll);

  if (scroll >= 10) {
    header.style.opacity = "1";
  } else {
    header.style.opacity = "0";
  }
});

function filmes() {
  fetch("https://sujeitoprogramador.com/r-api/?api=filmes/")
    .then((res) => {
      res.json().then((json) => {
        Object.keys(json).forEach((filme) => {
          let foto = json[filme].foto;
          let nome = json[filme].nome;
          capa(foto, nome);
        });
      });
    })
    .catch((err) => console.error(err));
}

const capa = (capaFilmes, nomeFilme) => {
  let capa = document.querySelector(".filmes");

  let classFilme = document.createElement("div");
  classFilme.classList.add("filme");

  classFilme.innerHTML = `<img src="${capaFilmes}" alt="${nomeFilme}" title="${nomeFilme}" />`;

  capa.appendChild(classFilme);
};
filmes();
