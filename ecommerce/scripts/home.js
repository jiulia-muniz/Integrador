// Importação da base de dados e das funçoes

import { getProdId, loadProducts} from "./functions.js";

// -------- Variaveis do projeto ------------------------
const sectionNovidades = document.querySelector("#section-1 .carrousel")
const sectionMaisVendidos = document.querySelector("#section-2 .carrousel")
const sectionPromocoes = document.querySelector("#section-3 .carrousel")


// //Fitros
// let filtroCategoriaNovidades = database.filter(produto => produto.classificacaoProduto === "Novidades" && produto.exibirHome == true )
// let filtroMaisVendidos = database.filter(produto => produto.classificacaoProduto === "Mais_Vendidos" && produto.exibirHome == true )
// let filtroPromocoes = database.filter(produto => produto.classificacaoProduto === "Promocoes" && produto.exibirHome == true )


async function fetchProductsByCategory(category, section) {
  try {
      const response = await fetch(`http://127.0.0.1:8000/api/produtos?classificacao=${category}&exibirHome=true`);
      if (!response.ok) throw new Error("Erro ao carregar produtos");
      const produtos = await response.json();
      console.log(produtos)
      loadProducts(produtos, section);
  } catch (error) {
      console.error("Erro:", error);
  }
}

//Funçoes com parametros
fetchProductsByCategory("Lançamentos", sectionNovidades);
fetchProductsByCategory("Mais_Vendidos", sectionMaisVendidos);
fetchProductsByCategory("Promocoes", sectionPromocoes);

getProdId();

// // Importação da base de dados e das funçoes

// import { database } from "./database.js";
// import { getProdId, loadProducts} from "./functions.js";

// // -------- Variaveis do projeto ------------------------
// const sectionNovidades = document.querySelector("#section-1 .carrousel")
// const sectionMaisVendidos = document.querySelector("#section-2 .carrousel")
// const sectionPromocoes = document.querySelector("#section-3 .carrousel")


// //Fitros
// let filtroCategoriaNovidades = database.filter(produto => produto.classificacaoProduto === "Novidades" && produto.exibirHome == true )
// let filtroMaisVendidos = database.filter(produto => produto.classificacaoProduto === "Mais_Vendidos" && produto.exibirHome == true )
// let filtroPromocoes = database.filter(produto => produto.classificacaoProduto === "Promocoes" && produto.exibirHome == true )


// //Funçoes com parametros
// loadProducts(filtroCategoriaNovidades,sectionNovidades);
// loadProducts(filtroMaisVendidos,sectionMaisVendidos);
// loadProducts(filtroPromocoes,sectionPromocoes);
// getProdId()








// ------- Carrossel de imagens corrigido para passar um produto por vez -------------------
document.querySelectorAll('.section-product-carrousel').forEach(carrousel => {
  const productCarousel = carrousel.querySelector('.carrousel');
  const prevBtn = carrousel.querySelector('.prev');
  const nextBtn = carrousel.querySelector('.next');

  // Determina a largura do produto considerando margem
  const productWidth = 300; // Ajuste para a largura + margem do produto
  let scrollAmount = 0;

  nextBtn.addEventListener('click', () => {
      const maxScroll = 2400
      scrollAmount += productWidth; // Avança um produto por vez

      if (scrollAmount > maxScroll) {
          scrollAmount = maxScroll; // Limita para não passar o final
      }

      productCarousel.style.transform = `translateX(-${scrollAmount}px)`;
  });

  prevBtn.addEventListener('click', () => {
      scrollAmount -= productWidth; // Retrocede um produto por vez

      if (scrollAmount < 0) {
          scrollAmount = 0; // Limita para não ultrapassar o início
      }

      productCarousel.style.transform = `translateX(-${scrollAmount}px)`;
  });
});
