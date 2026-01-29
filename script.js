// Versículos embutidos diretamente no código (funciona mesmo sem servidor)
let verses = [
  {
    "text": "O Senhor é o meu pastor; nada me faltará.",
    "book": "Salmos",
    "chapter": 23,
    "verse": 1
  },
  {
    "text": "Tudo posso naquele que me fortalece.",
    "book": "Filipenses",
    "chapter": 4,
    "verse": 13
  },
  {
    "text": "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    "book": "João",
    "chapter": 3,
    "verse": 16
  },
  {
    "text": "Entrega o teu caminho ao Senhor; confia nele, e ele o fará.",
    "book": "Salmos",
    "chapter": 37,
    "verse": 5
  },
  {
    "text": "Lança sobre o Senhor o teu cuidado, e ele te susterá; jamais permitirá que o justo seja abalado.",
    "book": "Salmos",
    "chapter": 55,
    "verse": 22
  },
  {
    "text": "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais.",
    "book": "Jeremias",
    "chapter": 29,
    "verse": 11
  },
  {
    "text": "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.",
    "book": "Isaías",
    "chapter": 41,
    "verse": 10
  },
  {
    "text": "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento.",
    "book": "Provérbios",
    "chapter": 3,
    "verse": 5
  },
  {
    "text": "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias; correrão, e não se cansarão; andarão, e não se fatigarão.",
    "book": "Isaías",
    "chapter": 40,
    "verse": 31
  },
  {
    "text": "Porque para Deus nada é impossível.",
    "book": "Lucas",
    "chapter": 1,
    "verse": 37
  },
  {
    "text": "O Senhor é a minha luz e a minha salvação; a quem temerei? O Senhor é a força da minha vida; de quem me recearei?",
    "book": "Salmos",
    "chapter": 27,
    "verse": 1
  },
  {
    "text": "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto.",
    "book": "Isaías",
    "chapter": 55,
    "verse": 6
  },
  {
    "text": "Porque a palavra de Deus é viva e eficaz, e mais penetrante do que espada alguma de dois gumes.",
    "book": "Hebreus",
    "chapter": 4,
    "verse": 12
  },
  {
    "text": "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus.",
    "book": "Romanos",
    "chapter": 8,
    "verse": 28
  },
  {
    "text": "Lembrai-vos de que não fostes vós que me escolhestes a mim; pelo contrário, eu vos escolhi a vós outros.",
    "book": "João",
    "chapter": 15,
    "verse": 16
  },
  {
    "text": "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti, e tenha misericórdia de ti.",
    "book": "Números",
    "chapter": 6,
    "verse": 24
  },
  {
    "text": "Porque onde estiver o teu tesouro, aí estará também o teu coração.",
    "book": "Mateus",
    "chapter": 6,
    "verse": 21
  },
  {
    "text": "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
    "book": "Mateus",
    "chapter": 11,
    "verse": 28
  },
  {
    "text": "O Senhor é o meu auxílio, não temerei; que me poderá fazer o homem?",
    "book": "Salmos",
    "chapter": 118,
    "verse": 6
  },
  {
    "text": "Porque não nos deu Deus espírito de temor, mas de fortaleza, e de amor, e de moderação.",
    "book": "2 Timóteo",
    "chapter": 1,
    "verse": 7
  },
  {
    "text": "Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração.",
    "book": "Romanos",
    "chapter": 12,
    "verse": 12
  },
  {
    "text": "Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção, para a educação na justiça.",
    "book": "2 Timóteo",
    "chapter": 3,
    "verse": 16
  },
  {
    "text": "O Senhor é bom, um refúgio em tempos de angústia. Ele protege os que nele confiam.",
    "book": "Naum",
    "chapter": 1,
    "verse": 7
  },
  {
    "text": "Porque o Senhor não desampara o seu povo, nem abandona a sua herança.",
    "book": "Salmos",
    "chapter": 94,
    "verse": 14
  },
  {
    "text": "Lança o teu pão sobre as águas, porque depois de muitos dias o acharás.",
    "book": "Eclesiastes",
    "chapter": 11,
    "verse": 1
  },
  {
    "text": "O coração alegre é como o bom remédio, mas o espírito abatido seca até os ossos.",
    "book": "Provérbios",
    "chapter": 17,
    "verse": 22
  },
  {
    "text": "Porque os meus pensamentos não são os vossos pensamentos, nem os vossos caminhos os meus caminhos, diz o Senhor.",
    "book": "Isaías",
    "chapter": 55,
    "verse": 8
  },
  {
    "text": "O Senhor é a minha força e o meu escudo; nele o meu coração confia, e nele fui socorrido; por isso, o meu coração exulta, e com o meu cântico o louvarei.",
    "book": "Salmos",
    "chapter": 28,
    "verse": 7
  },
  {
    "text": "Não se turbe o vosso coração; credes em Deus, crede também em mim.",
    "book": "João",
    "chapter": 14,
    "verse": 1
  },
  {
    "text": "Porque a nossa leve e momentânea tribulação produz para nós um peso eterno de glória mui excelente.",
    "book": "2 Coríntios",
    "chapter": 4,
    "verse": 17
  },
  {
    "text": "O Senhor é o meu rochedo, e o meu lugar forte, e o meu libertador; o meu Deus, a minha fortaleza, em quem confio.",
    "book": "Salmos",
    "chapter": 18,
    "verse": 2
  },
  {
    "text": "Bem-aventurado o homem que confia no Senhor, e cuja esperança é o Senhor.",
    "book": "Jeremias",
    "chapter": 17,
    "verse": 7
  },
  {
    "text": "Porque eu sou o Senhor, teu Deus, que te seguro pela tua mão direita e te digo: Não temas, que eu te ajudo.",
    "book": "Isaías",
    "chapter": 41,
    "verse": 13
  },
  {
    "text": "Porque a graça de Deus se manifestou salvadora a todos os homens.",
    "book": "Tito",
    "chapter": 2,
    "verse": 11
  },
  {
    "text": "O Senhor é a minha porção, diz a minha alma; portanto, esperarei nele.",
    "book": "Lamentações",
    "chapter": 3,
    "verse": 24
  },
  {
    "text": "Porque o Senhor corrige o que ama, e açoita a qualquer que recebe por filho.",
    "book": "Hebreus",
    "chapter": 12,
    "verse": 6
  },
  {
    "text": "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.",
    "book": "Salmos",
    "chapter": 91,
    "verse": 1
  },
  {
    "text": "Porque o Senhor teu Deus está contigo, por onde quer que andares.",
    "book": "Josué",
    "chapter": 1,
    "verse": 9
  },
  {
    "text": "Bem-aventurados os que têm fome e sede de justiça, porque serão fartos.",
    "book": "Mateus",
    "chapter": 5,
    "verse": 6
  },
  {
    "text": "Porque o Senhor teu Deus te abençoará em toda a tua colheita, e em todo o trabalho das tuas mãos.",
    "book": "Deuteronômio",
    "chapter": 16,
    "verse": 15
  },
  {
    "text": "O Senhor é a minha força e o meu cântico; ele se tornou a minha salvação.",
    "book": "Salmos",
    "chapter": 118,
    "verse": 14
  },
  {
    "text": "Porque o Senhor é bom; a sua misericórdia dura para sempre, e a sua fidelidade de geração em geração.",
    "book": "Salmos",
    "chapter": 100,
    "verse": 5
  },
  {
    "text": "Porque o Senhor teu Deus está no meio de ti, poderoso para salvar; ele se deleitará em ti com alegria.",
    "book": "Sofonias",
    "chapter": 3,
    "verse": 17
  },
  {
    "text": "Bem-aventurados os pacificadores, porque eles serão chamados filhos de Deus.",
    "book": "Mateus",
    "chapter": 5,
    "verse": 9
  }
];

let favorites = [];

// Carregar favoritos do localStorage
function loadFavorites() {
  const saved = localStorage.getItem("favorites");
  if (saved) {
    favorites = JSON.parse(saved);
    updateFavoritesDisplay();
  }
}

// Salvar favoritos no localStorage
function saveFavorites() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Exibir versículo aleatório com animação
function showRandomVerse(animate = true) {
  if (verses.length === 0) {
    document.getElementById("verse").textContent = "Carregando versículos...";
    return;
  }

  const verseElement = document.getElementById("verse");
  const referenceElement = document.getElementById("reference");

  const updateVerse = () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    const verse = verses[randomIndex];

    verseElement.textContent = `"${verse.text}"`;
    referenceElement.textContent = `${verse.book} ${verse.chapter}:${verse.verse}`;

    // Atualizar estado do botão de favoritar
    updateFavoriteButton(verse);
  };

  if (animate && verseElement.textContent && verseElement.textContent !== "Carregando versículos...") {
    // Fade out apenas se já houver conteúdo
    verseElement.classList.add("fade-out");
    referenceElement.classList.add("fade-out");

    // Após fade out, atualizar conteúdo e fazer fade in
    setTimeout(() => {
      updateVerse();

      // Remover classes de fade out e adicionar fade in
      verseElement.classList.remove("fade-out");
      referenceElement.classList.remove("fade-out");
      verseElement.classList.add("fade-in");
      referenceElement.classList.add("fade-in");

      // Remover fade-in após animação para permitir próxima animação
      setTimeout(() => {
        verseElement.classList.remove("fade-in");
        referenceElement.classList.remove("fade-in");
      }, 400);
    }, 200);
  } else {
    // Primeira carga: fade in suave
    updateVerse();
    verseElement.classList.add("fade");
    referenceElement.classList.add("fade");
    setTimeout(() => {
      verseElement.classList.remove("fade");
      referenceElement.classList.remove("fade");
    }, 400);
  }
}

// Atualizar estado do botão de favoritar
function updateFavoriteButton(verse) {
  const favoriteBtn = document.getElementById("favoriteBtn");
  const isFavorited = favorites.some(
    fav => fav.book === verse.book && 
           fav.chapter === verse.chapter && 
           fav.verse === verse.verse
  );

  if (isFavorited) {
    favoriteBtn.classList.add("favorited");
    favoriteBtn.title = "Remover dos favoritos";
  } else {
    favoriteBtn.classList.remove("favorited");
    favoriteBtn.title = "Salvar versículo";
  }
}

// Adicionar/remover favorito
function toggleFavorite() {
  const verseElement = document.getElementById("verse");
  const referenceElement = document.getElementById("reference");
  
  if (!verseElement.textContent || verseElement.textContent === "Carregando versículos...") {
    return;
  }

  const currentVerse = {
    text: verseElement.textContent.replace(/"/g, ""),
    book: referenceElement.textContent.split(" ")[0],
    chapter: parseInt(referenceElement.textContent.split(" ")[1].split(":")[0]),
    verse: parseInt(referenceElement.textContent.split(":")[1])
  };

  const index = favorites.findIndex(
    fav => fav.book === currentVerse.book && 
           fav.chapter === currentVerse.chapter && 
           fav.verse === currentVerse.verse
  );

  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(currentVerse);
  }

  saveFavorites();
  updateFavoriteButton(currentVerse);
  updateFavoritesDisplay();
}

// Atualizar exibição de favoritos
function updateFavoritesDisplay() {
  const favoritesList = document.getElementById("favoritesList");
  
  if (favorites.length === 0) {
    favoritesList.classList.remove("show");
    return;
  }

  favoritesList.classList.add("show");
  favoritesList.innerHTML = "<h3>❤️ Seus favoritos</h3>";

  favorites.forEach(fav => {
    const item = document.createElement("div");
    item.className = "favorite-item";
    item.innerHTML = `
      <div class="favorite-text">"${fav.text}"</div>
      <div class="favorite-ref">${fav.book} ${fav.chapter}:${fav.verse}</div>
    `;
    favoritesList.appendChild(item);
  });
}

// Compartilhar versículo
function shareVerse() {
  const verseElement = document.getElementById("verse");
  const referenceElement = document.getElementById("reference");
  
  const text = `${verseElement.textContent}\n${referenceElement.textContent}`;
  const url = window.location.href;

  if (navigator.share) {
    navigator.share({
      title: "Mensagem de Fé",
      text: text,
      url: url
    }).catch(err => console.log("Erro ao compartilhar:", err));
  } else {
    // Fallback: copiar para área de transferência
    navigator.clipboard.writeText(`${text}\n\n${url}`).then(() => {
      alert("Versículo copiado para a área de transferência!");
    }).catch(err => {
      // Fallback mais antigo
      const textArea = document.createElement("textarea");
      textArea.value = `${text}\n\n${url}`;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Versículo copiado para a área de transferência!");
    });
  }
}

// Saudação do dia
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = "BOA NOITE";
  
  if (hour >= 5 && hour < 12) {
    greeting = "BOM DIA";
  } else if (hour >= 12 && hour < 18) {
    greeting = "BOA TARDE";
  }
  
  document.getElementById("greeting").textContent = greeting;
}

// Atualizar data
function updateDate() {
  const date = new Date();
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const formattedDate = date.toLocaleDateString('pt-BR', options);
  document.getElementById("date").textContent = formattedDate;
}

// Copiar versículo
function copyVerse() {
  const verseElement = document.getElementById("verse");
  const referenceElement = document.getElementById("reference");
  
  // Formatar texto para compartilhamento
  const text = `${verseElement.textContent}\n\n${referenceElement.textContent}`;
  
  navigator.clipboard.writeText(text).then(() => {
    // Feedback visual
    const copyBtn = document.getElementById("copyBtn");
    const actionText = copyBtn.querySelector(".action-text");
    const originalText = actionText.textContent;
    
    // Mudar texto e adicionar classe de sucesso
    actionText.textContent = "Copiado!";
    copyBtn.classList.add("copied");
    
    setTimeout(() => {
      actionText.textContent = originalText;
      copyBtn.classList.remove("copied");
    }, 2000);
  }).catch(err => {
    // Fallback mais antigo
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    
    // Feedback visual
    const copyBtn = document.getElementById("copyBtn");
    const actionText = copyBtn.querySelector(".action-text");
    const originalText = actionText.textContent;
    
    actionText.textContent = "Copiado!";
    copyBtn.classList.add("copied");
    
    setTimeout(() => {
      actionText.textContent = originalText;
      copyBtn.classList.remove("copied");
    }, 2000);
  });
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  updateGreeting();
  updateDate();
  loadFavorites();
  showRandomVerse(false); // Mostrar versículo ao carregar (sem fade out)
  
  document.getElementById("newVerseBtn").addEventListener("click", () => showRandomVerse(true));
  document.getElementById("shareBtn").addEventListener("click", shareVerse);
  document.getElementById("favoriteBtn").addEventListener("click", toggleFavorite);
  document.getElementById("copyBtn").addEventListener("click", copyVerse);
});

