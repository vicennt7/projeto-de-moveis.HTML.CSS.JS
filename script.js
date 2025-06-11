function mostrarAlerta() {
    alert("Obrigado por entrar em contato! Em breve retornaremos.");
}

  function logout() {
    localStorage.removeItem("logado"); // Salvando o objeto no localStorage
    alert("Você saiu da conta.");
    window.location.reload(); // recarrega a página
  }
    
let carrinho = [];
let total = 0;

// Elementos do DOM
const carrinhoIcon = document.getElementById('carrinho-icon');
const carrinhoSidebar = document.getElementById('carrinho-sidebar');
const fecharCarrinho = document.getElementById('fechar-carrinho');
const carrinhoItems = document.getElementById('carrinho-items');
const carrinhoContador = document.getElementById('carrinho-contador');
const carrinhoValorTotal = document.getElementById('carrinho-valor-total');
const finalizarCompra = document.getElementById('finalizar-compra');

// Abrir carrinho
carrinhoIcon.addEventListener('click', (e) => {
    e.preventDefault();
    carrinhoSidebar.classList.add('ativo');
});

// Fechar carrinho
fecharCarrinho.addEventListener('click', () => {
    carrinhoSidebar.classList.remove('ativo');
});

// Adicionar ao carrinho
document.querySelectorAll('.adicionar-carrinho').forEach(button => {
    button.addEventListener('click', () => {
        const nome = button.dataset.nome;
        const preco = parseFloat(button.dataset.preco);
        
        carrinho.push({ nome, preco });
        total += preco;
        
        atualizarCarrinho();
        carrinhoSidebar.classList.add('ativo');
    });
});

// Atualizar carrinho
function atualizarCarrinho() {
    carrinhoItems.innerHTML = '';
    carrinho.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'carrinho-item';
        div.innerHTML = `
            <span>${item.nome}</span>
            <span>R$ ${item.preco.toFixed(2)}</span>
            <button onclick="removerItem(${index})" style="background: none; border: none; color: #ff4444; cursor: pointer;">×</button>
        `;
        carrinhoItems.appendChild(div);
    });
    
    carrinhoContador.textContent = carrinho.length;
    carrinhoValorTotal.textContent = total.toFixed(2);
}

// Remover item do carrinho
function removerItem(index) {
    total -= carrinho[index].preco;
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Finalizar compra
finalizarCompra.addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    alert('Compra finalizada com sucesso!');
    carrinho = [];
    total = 0;
    atualizarCarrinho();
    carrinhoSidebar.classList.remove('ativo');
});
    
