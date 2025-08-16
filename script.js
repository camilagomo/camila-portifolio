// Dados em memória
let cart = [];
let appliedCoupon = null;
let activePromotions = [];
let products = [
    { id: 1, name: "Smartphone Galaxy S21", price: 2999.99, icon: "📱" },
    { id: 2, name: "Notebook Dell Inspiron", price: 4599.99, icon: "💻" },
    { id: 3, name: "Fones de Ouvido Sony", price: 299.99, icon: "🎧" },
    { id: 4, name: "Smart TV Samsung 55\"", price: 3499.99, icon: "📺" },
    { id: 5, name: "Console PlayStation 5", price: 3999.99, icon: "🎮" },
    { id: 6, name: "Smartwatch Apple Watch", price: 2499.99, icon: "⌚" }
];

// Cupons válidos
const validCoupons = [
    { code: "DESCONTO10", discount: 10, type: "percentage", minValue: 100 },
    { code: "ECONOMIA50", discount: 50, type: "fixed", minValue: 200 },
    { code: "PROMO20", discount: 20, type: "percentage", minValue: 500 }
];

// Promoções padrão
const defaultPromotions = [
    {
        id: 1,
        name: "Desconto por Compra Alta",
        description: "Ganhe 15% de desconto em compras acima de R$ 1000",
        type: "percentage",
        value: 15,
        minCartValue: 1000,
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        active: true
    },
    {
        id: 2,
        name: "Desconto Fixo",
        description: "R$ 100 de desconto em compras acima de R$ 800",
        type: "fixed",
        value: 100,
        minCartValue: 800,
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        active: true
    }
];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderHome();
    renderCart();
    renderPromotions();
    renderCoupons();
    renderAdminPromotions();
});

function initializeApp() {
    // Carregar promoções padrão
    activePromotions = [...defaultPromotions];
    
    // Definir data atual para os campos de data
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('promo-start-date').value = today;
    
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    document.getElementById('promo-end-date').value = nextYear.toISOString().split('T')[0];
}

function setupEventListeners() {
    // Navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            showPage(targetPage);
        });
    });

    // Cupom
    document.getElementById('apply-coupon').addEventListener('click', applyCoupon);
    
    // Formulário de promoção
    document.getElementById('promotion-form').addEventListener('click', function(e) {
        if (e.target.type === 'submit') {
            e.preventDefault();
            createPromotion();
        }
    });

    // Checkout
    document.getElementById('checkout-btn').addEventListener('click', checkout);

    // Modal
    const modal = document.getElementById('products-modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Navegação entre páginas
function showPage(pageName) {
    // Esconder todas as páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Mostrar página selecionada
    document.getElementById(pageName + '-page').classList.add('active');
    
    // Atualizar navegação ativa
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-page="${pageName}"]`).classList.add('active');
}

// Função para navegação a partir dos botões da Home
function navigateToPage(pageName) {
    showPage(pageName);
    
    // Scroll suave para o topo da página
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Função da Página Home
function renderHome() {
    const marketplaceGrid = document.querySelector('.products-marketplace-grid');
    
    if (products.length === 0) {
        marketplaceGrid.innerHTML = '<p>Nenhum produto disponível no momento.</p>';
        return;
    }
    
    marketplaceGrid.innerHTML = products.map(product => `
        <div class="marketplace-product-card">
            <div class="product-icon">${product.icon}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">R$ ${product.price.toFixed(2)}</div>
            <button class="add-to-cart-marketplace" onclick="addToCartFromHome(${product.id})">
                <i class="fas fa-plus"></i> Adicionar ao Carrinho
            </button>
        </div>
    `).join('');
}

function addToCartFromHome(productId) {
    addToCart(productId);
    
    // Mostrar feedback visual
    const button = event.target.closest('.add-to-cart-marketplace');
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
    button.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }, 2000);
}

// Funções do Carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            icon: product.icon,
            quantity: 1
        });
    }
    
    renderCart();
    updateCartSummary();
    applyAutoPromotions();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    // BUG 3: Allows negative quantities - validation removed
    // This should prevent quantity from going below 1, but now allows 0 and negative values
    // if (item.quantity <= 0) {
    //     removeFromCart(productId);
    // } else {
        renderCart();
        updateCartSummary();
        applyAutoPromotions();
    // }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
    updateCartSummary();
    applyAutoPromotions();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.querySelector('.cart-total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Seu carrinho está vazio</p>
                <p>Adicione produtos para começar suas compras!</p>
                <button class="btn btn-primary" onclick="showProductsModal()">
                    <i class="fas fa-plus"></i> Adicionar Produtos
                </button>
            </div>
        `;
        cartCount.textContent = '0 itens';
        cartTotal.textContent = 'Total: R$ 0,00';
        document.getElementById('cart-summary').style.display = 'none';
        return;
    }
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`;
    cartTotal.textContent = `Total: R$ ${subtotal.toFixed(2)}`;
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="item-image">${item.icon}</div>
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-price">R$ ${item.price.toFixed(2)}</div>
            </div>
            <div class="item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)" ${item.quantity <= 1 ? 'disabled' : ''}>
                    <i class="fas fa-minus"></i>
                </button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="item-total">R$ ${(item.price * item.quantity).toFixed(2)}</div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    document.getElementById('cart-summary').style.display = 'block';
}

function updateCartSummary() {
    // BUG 2: Incorrect calculation when cart has multiple items
    // This should sum all items correctly, but uses wrong logic for multiple items
    let subtotal = 0;
    if (cart.length === 1) {
        // Works correctly for single item
        subtotal = cart[0].price * cart[0].quantity;
    } else {
        // BUG: Only calculates first item price for multiple items
        subtotal = cart.reduce((sum, item) => sum + cart[0].price * item.quantity, 0);
    }
    
    let couponDiscount = 0;
    let promoDiscount = 0;
    
    // Calcular desconto do cupom
    if (appliedCoupon) {
        if (appliedCoupon.type === 'percentage') {
            couponDiscount = subtotal * (appliedCoupon.discount / 100);
        } else {
            couponDiscount = appliedCoupon.discount;
        }
    }
    
    // Calcular desconto das promoções
    const activePromo = getActivePromotion();
    if (activePromo && subtotal >= activePromo.minCartValue) {
        if (activePromo.type === 'percentage') {
            promoDiscount = subtotal * (activePromo.value / 100);
        } else {
            promoDiscount = activePromo.value;
        }
    }
    
    const total = subtotal - couponDiscount - promoDiscount;
    
    document.getElementById('subtotal').textContent = `R$ ${subtotal.toFixed(2)}`;
    
    if (couponDiscount > 0) {
        document.getElementById('coupon-discount-row').style.display = 'flex';
        document.getElementById('coupon-discount').textContent = `-R$ ${couponDiscount.toFixed(2)}`;
    } else {
        document.getElementById('coupon-discount-row').style.display = 'none';
    }
    
    if (promoDiscount > 0) {
        document.getElementById('promo-discount-row').style.display = 'flex';
        document.getElementById('promo-discount').textContent = `-R$ ${promoDiscount.toFixed(2)}`;
    } else {
        document.getElementById('promo-discount-row').style.display = 'none';
    }
    
    document.getElementById('final-total').textContent = `R$ ${total.toFixed(2)}`;
}

// Funções de Cupom
function applyCoupon() {
    const couponCode = document.getElementById('coupon-code').value.trim().toUpperCase();
    const couponStatus = document.getElementById('coupon-status');
    
    if (!couponCode) {
        showCouponStatus('Digite um código de cupom', 'error');
        return;
    }
    
    const coupon = validCoupons.find(c => c.code === couponCode);
    if (!coupon) {
        showCouponStatus('Cupom inválido ou expirado', 'error');
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // BUG 1: Minimum value validation commented out intentionally
    // This allows coupons to be applied even when cart total is below minimum required
    // if (subtotal < coupon.minValue) {
    //     showCouponStatus(`Valor mínimo para este cupom: R$ ${coupon.minValue.toFixed(2)}`, 'error');
    //     return;
    // }
    
    appliedCoupon = coupon;
    showCouponStatus(`Cupom aplicado com sucesso! Desconto: ${coupon.discount}${coupon.type === 'percentage' ? '%' : 'R$'}`, 'success');
    document.getElementById('coupon-code').value = '';
    
    updateCartSummary();
}

function removeCoupon() {
    appliedCoupon = null;
    document.getElementById('coupon-status').innerHTML = '';
    updateCartSummary();
}

function showCouponStatus(message, type) {
    const couponStatus = document.getElementById('coupon-status');
    
    if (type === 'success') {
        couponStatus.innerHTML = `
            ${message}
            <button class="btn btn-danger" onclick="removeCoupon()" style="margin-left: 1rem; padding: 0.25rem 0.5rem; font-size: 0.8rem;">Remover</button>
        `;
    } else {
        couponStatus.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                ${message}
            </div>
            <div class="error-suggestion">
                <small>💡 Dica: Verifique as promoções e cupons disponíveis na página de Promoções!</small>
            </div>
        `;
    }
    
    couponStatus.className = `coupon-status ${type}`;
}

// Funções de Promoção
function getActivePromotion() {
    const now = new Date();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // BUG 2: Always returns first eligible promotion instead of best one
    // This should find the promotion with highest discount value, but returns first match
    return activePromotions.find(promo => {
        const startDate = new Date(promo.startDate);
        const endDate = new Date(promo.endDate);
        return promo.active && 
               now >= startDate && 
               now <= endDate && 
               subtotal >= promo.minCartValue;
    });
    
    // CORRECT LOGIC (commented out):
    // let bestPromotion = null;
    // let maxDiscount = 0;
    // 
    // activePromotions.forEach(promo => {
    //     const startDate = new Date(promo.startDate);
    //     const endDate = new Date(promo.endDate);
    //     if (promo.active && now >= startDate && now <= endDate && subtotal >= promo.minCartValue) {
    //         let discount = promo.type === 'percentage' ? subtotal * (promo.value / 100) : promo.value;
    //         if (discount > maxDiscount) {
    //             maxDiscount = discount;
    //             bestPromotion = promo;
    //         }
    //     }
    // });
    // return bestPromotion;
}

function applyAutoPromotions() {
    // As promoções são aplicadas automaticamente no updateCartSummary
    updateCartSummary();
}

function renderPromotions() {
    const promotionsList = document.getElementById('promotions-list');
    
    if (activePromotions.length === 0) {
        promotionsList.innerHTML = '<p>Nenhuma promoção disponível no momento.</p>';
        return;
    }
    
    promotionsList.innerHTML = activePromotions.map(promo => {
        const now = new Date();
        const startDate = new Date(promo.startDate);
        const endDate = new Date(promo.endDate);
        const isActive = promo.active && now >= startDate && now <= endDate;
        
        return `
            <div class="promotion-card">
                <h3>${promo.name}</h3>
                <p>${promo.description}</p>
                <div class="promotion-details">
                    <span><strong>Tipo:</strong> ${promo.type === 'percentage' ? 'Porcentagem' : 'Valor Fixo'}</span>
                    <span><strong>Desconto:</strong> ${promo.value}${promo.type === 'percentage' ? '%' : 'R$'}</span>
                </div>
                <div class="promotion-details">
                    <span><strong>Valor Mínimo:</strong> R$ ${promo.minCartValue.toFixed(2)}</span>
                    <span><strong>Status:</strong> 
                        <span class="promotion-status ${isActive ? 'active' : 'expired'}">
                            ${isActive ? 'Ativa' : 'Expirada'}
                        </span>
                    </span>
                </div>
                <div class="promotion-details">
                    <span><strong>Início:</strong> ${new Date(promo.startDate).toLocaleDateString('pt-BR')}</span>
                    <span><strong>Fim:</strong> ${new Date(promo.endDate).toLocaleDateString('pt-BR')}</span>
                </div>
            </div>
        `;
    }).join('');
}

function renderCoupons() {
    const couponsList = document.getElementById('coupons-list');
    
    if (validCoupons.length === 0) {
        couponsList.innerHTML = '<p>Nenhum cupom disponível no momento.</p>';
        return;
    }
    
    couponsList.innerHTML = validCoupons.map(coupon => {
        const discountText = coupon.type === 'percentage' 
            ? `${coupon.discount}% de desconto` 
            : `R$ ${coupon.discount.toFixed(2)} de desconto`;
        
        return `
            <div class="coupon-card">
                <div class="coupon-code">${coupon.code}</div>
                <div class="coupon-details">
                    <span><strong>Desconto:</strong></span>
                    <span>${discountText}</span>
                </div>
                <div class="coupon-details">
                    <span><strong>Valor Mínimo:</strong></span>
                    <span>R$ ${coupon.minValue.toFixed(2)}</span>
                </div>
                <div class="coupon-details">
                    <span><strong>Tipo:</strong></span>
                    <span>${coupon.type === 'percentage' ? 'Porcentagem' : 'Valor Fixo'}</span>
                </div>
                <div class="coupon-description">
                    Use este código no carrinho para obter seu desconto!
                </div>
                <div class="coupon-validity">
                    Cupom sempre válido
                </div>
            </div>
        `;
    }).join('');
}

function renderAdminPromotions() {
    const adminPromotionsList = document.getElementById('admin-promotions-list');
    
    if (activePromotions.length === 0) {
        adminPromotionsList.innerHTML = '<p>Nenhuma promoção criada ainda.</p>';
        return;
    }
    
    adminPromotionsList.innerHTML = activePromotions.map(promo => {
        const now = new Date();
        const startDate = new Date(promo.startDate);
        const endDate = new Date(promo.endDate);
        const isActive = promo.active && now >= startDate && now <= endDate;
        
        return `
            <div class="admin-promotion-item">
                <div class="admin-promotion-info">
                    <h4>${promo.name}</h4>
                    <p>${promo.description}</p>
                    <p><strong>Desconto:</strong> ${promo.value}${promo.type === 'percentage' ? '%' : 'R$'} | 
                       <strong>Status:</strong> 
                       <span class="promotion-status ${isActive ? 'active' : 'expired'}">
                           ${isActive ? 'Ativa' : 'Expirada'}
                       </span>
                    </p>
                </div>
                <button class="btn btn-danger" onclick="deletePromotion(${promo.id})">
                    <i class="fas fa-trash"></i> Excluir
                </button>
            </div>
        `;
    }).join('');
}

function createPromotion() {
    const name = document.getElementById('promo-name').value;
    const description = document.getElementById('promo-description').value;
    const type = document.getElementById('promo-type').value;
    const value = parseFloat(document.getElementById('promo-value').value);
    const minCartValue = parseFloat(document.getElementById('promo-min-value').value);
    const startDate = document.getElementById('promo-start-date').value;
    const endDate = document.getElementById('promo-end-date').value;
    
    if (!name || !description || !value || !minCartValue || !startDate || !endDate) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    if (startDate >= endDate) {
        alert('A data de fim deve ser posterior à data de início.');
        return;
    }
    
    const newPromotion = {
        id: Date.now(),
        name,
        description,
        type,
        value,
        minCartValue,
        startDate,
        endDate,
        active: true
    };
    
    activePromotions.push(newPromotion);
    
    // Limpar formulário
    document.getElementById('promotion-form').reset();
    document.getElementById('promo-start-date').value = new Date().toISOString().split('T')[0];
    
    // Atualizar visualizações
    renderPromotions();
    renderAdminPromotions();
    
    alert('Promoção criada com sucesso!');
}

function deletePromotion(promotionId) {
    if (confirm('Tem certeza que deseja excluir esta promoção?')) {
        activePromotions = activePromotions.filter(p => p.id !== promotionId);
        renderPromotions();
        renderAdminPromotions();
        updateCartSummary(); // Recalcular desconto se necessário
    }
}

// Modal de Produtos
function showProductsModal() {
    const modal = document.getElementById('products-modal');
    const productsList = document.getElementById('products-list');
    
    productsList.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-icon">${product.icon}</div>
            <h4 class="product-name">${product.name}</h4>
            <div class="product-price">R$ ${product.price.toFixed(2)}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id}); document.getElementById('products-modal').style.display='none';">
                <i class="fas fa-plus"></i> Adicionar
            </button>
        </div>
    `).join('');
    
    modal.style.display = 'block';
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Adicione produtos ao carrinho antes de finalizar a compra.');
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let couponDiscount = 0;
    let promoDiscount = 0;
    
    if (appliedCoupon) {
        if (appliedCoupon.type === 'percentage') {
            couponDiscount = subtotal * (appliedCoupon.discount / 100);
        } else {
            couponDiscount = appliedCoupon.discount;
        }
    }
    
    const activePromo = getActivePromotion();
    if (activePromo) {
        if (activePromo.type === 'percentage') {
            promoDiscount = subtotal * (activePromo.value / 100);
        } else {
            promoDiscount = activePromo.value;
        }
    }
    
    const total = subtotal - couponDiscount - promoDiscount;
    
    const checkoutMessage = `
        🎉 Compra Finalizada com Sucesso! 🎉
        
        📋 Resumo da Compra:
        - Subtotal: R$ ${subtotal.toFixed(2)}
        ${couponDiscount > 0 ? `- Desconto Cupom: -R$ ${couponDiscount.toFixed(2)}` : ''}
        ${promoDiscount > 0 ? `- Desconto Promoção: -R$ ${promoDiscount.toFixed(2)}` : ''}
        - Total: R$ ${total.toFixed(2)}
        
        🚀 Redirecionando para o pagamento...
    `;
    
    alert(checkoutMessage);
    
    // Simular checkout - limpar carrinho
    cart = [];
    appliedCoupon = null;
    renderCart();
    updateCartSummary();
    
    // Voltar para a página do carrinho
    showPage('cart');
} 