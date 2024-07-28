// document.addEventListener("DOMContentLoaded", () => {
//     // Add event listeners or any JavaScript functionality here if needed.
//     const searchButton = document.querySelector('.search-bar button');
//     searchButton.addEventListener('click', () => {
//         alert('Search functionality to be implemented!');
//     });

//     const signInButton = document.querySelector('.sign-in');
//     signInButton.addEventListener('click', () => {
//         openLoginModal(); // استبدلنا alert بـ openLoginModal
//     });

//     const cartButton = document.querySelector('.cart');
//     cartButton.addEventListener('click', () => {
//         alert('Cart functionality to be implemented!');
//     });

//     // Event listener for login button inside the modal
//     const loginButton = document.getElementById('loginButton');
//     loginButton.addEventListener('click', () => {
//         validateLoginForm();
//     });
// });

// function openLoginModal() {
//     document.getElementById("loginModal").style.display = "block";
// }

// function closeLoginModal() {
//     document.getElementById("loginModal").style.display = "none";
// }

// function validateLoginForm() {
//     const usernameField = document.getElementById('username');
//     const passwordField = document.getElementById('password');
//     const usernameError = document.getElementById('username-error');
//     const passwordError = document.getElementById('password-error');
//     const errorMessage = document.getElementById('loginError');

//     // Clear any existing error messages
//     usernameError.style.display = 'none';
//     passwordError.style.display = 'none';
//     errorMessage.textContent = '';

//     // Check if username or password fields are empty
//     let hasError = false;

//     if (usernameField.value.trim() === '') {
//         usernameError.textContent = 'يرجى إدخال اسم المستخدم.';
//         usernameError.style.display = 'block';
//         usernameField.focus();
//         hasError = true;
//     }

//     if (passwordField.value.trim() === '') {
//         passwordError.textContent = 'يرجى إدخال كلمة المرور.';
//         passwordError.style.display = 'block';
//         if (!hasError) {
//             passwordField.focus();
//         }
//         hasError = true;
//     }

//     // If there are no errors, proceed with login
//     if (!hasError) {
//         alert('تم تسجيل الدخول بنجاح!');
//         closeLoginModal(); // Close the modal on successful login (optional)
//     }
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const signInButton = document.querySelector('.sign-in');
//     signInButton.addEventListener('click', () => {
//         openLoginModal();
//     });

//     const loginButton = document.getElementById('loginButton');
//     loginButton.addEventListener('click', () => {
//         validateLoginForm();
//     });
// });

// function openLoginModal() {
//     document.getElementById("loginModal").style.display = "flex";
// }

// function closeLoginModal() {
//     document.getElementById("loginModal").style.display = "none";
// }

// function validateLoginForm() {
//     const usernameField = document.getElementById('username');
//     const passwordField = document.getElementById('password');
//     const errorMessage = document.querySelector('.error-message');

//     if (usernameField.value.trim() === '' || passwordField.value.trim() === '') {
//         errorMessage.textContent = 'Please fill out this field.';
//         errorMessage.style.display = 'block';
//     } else {
//         errorMessage.textContent = '';
//         errorMessage.style.display = 'none';
//         alert('Login functionality to be implemented!');
//     }
// }

document.addEventListener("DOMContentLoaded", () => {
    const signInButton = document.querySelector('.sign-in');
    const loginButton = document.getElementById('loginButton');

    if (signInButton) {
        signInButton.addEventListener('click', () => {
            openLoginModal();
        });
    }

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            validateLoginForm();
        });
    }
});

function openLoginModal() {
    const modal = document.getElementById("loginModal");
    if (modal) {
        modal.style.display = "flex";
    }
}

function closeLoginModal() {
    const modal = document.getElementById("loginModal");
    if (modal) {
        modal.style.display = "none";
    }
}

function validateLoginForm() {
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const errorMessage = document.querySelector('.error-message');

    if (usernameField && passwordField && errorMessage) {
        if (usernameField.value.trim() === '' || passwordField.value.trim() === '') {
            errorMessage.textContent = 'Please fill out this field.';
            errorMessage.style.display = 'block';
        } 
        else if(passwordField.value.trim() === '')
        {
            errorMessage.textContent = 'Please fill out this field.';
            errorMessage.style.display = 'block';
        }
        else {
            errorMessage.textContent = '';
            errorMessage.style.display = 'none';
            alert('Login functionality to be implemented!');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('input');

    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            input.setCustomValidity('');
        });

        input.addEventListener('invalid', function() {
            if (input.value === '') {
                input.setCustomValidity('Please fill out this field.');
            }
        });
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.querySelector('.product-image').addEventListener('click', () => {
            openModal(card);
        });
    });
});

function openModal(card) {
    const modal = document.getElementById('productModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const descriptionText = document.getElementById('productDescription');
    const priceBeforeText = document.getElementById('modalPriceBefore');
    const priceAfterText = document.getElementById('modalPriceAfter');

    modal.style.display = "block";
    modalImg.src = card.querySelector('img').src;
    captionText.innerHTML = card.querySelector('.product-name').innerHTML;
    descriptionText.innerHTML = "This is a description of " + captionText.innerHTML;
    priceBeforeText.innerHTML = "Before: " + card.querySelector('.price-before').innerHTML;
    priceAfterText.innerHTML = "After: " + card.querySelector('.price-after').innerHTML;
}

function closeModal() {
    document.getElementById('productModal').style.display = "none";
}

function addToCartFromModal() {
    alert("Added to Cart!");
}


  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2, // عرض صورتين في الوقت نفسه
    spaceBetween: 30, // المسافة بين الصور
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500, // تغيير تلقائي كل 2.5 ثانية
      disableOnInteraction: false,
    },
  });




  document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountElement = document.querySelector('.cart-count');
    const cartModal = document.getElementById('cartModal');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    const closeCartModalButton = document.querySelector('.close-cart-modal');
    const checkoutButton = document.createElement('button');

    let cartItems = [];
    let cartTotal = 0;

    function updateCartCount() {
        cartCountElement.textContent = cartItems.length;
    }

    function updateCartTotal() {
        cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
    }

    function addToCart(event) {
        const foodBox = event.target.closest('.food-box, .product-card');
        if (!foodBox) return;

        const foodTitle = foodBox.querySelector('.food-title, .product-name')?.textContent;
        const foodPrice = parseFloat(foodBox.querySelector('.food-price, .price-after')?.textContent.replace('$', ''));

        if (!foodTitle || isNaN(foodPrice)) return;

        const existingItem = cartItems.find(item => item.title === foodTitle);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            const cartItem = {
                title: foodTitle,
                price: foodPrice,
                quantity: 1,
                image: foodBox.querySelector('img')?.src
            };
            cartItems.push(cartItem);
        }

        updateCartCount();
        updateCartTotal();
        displayCartItems();

        const cartButton = document.querySelector('.cart');
        const cartButtonRect = cartButton.getBoundingClientRect();
        const clone = foodBox.cloneNode(true);
        clone.style.position = 'fixed';
        clone.style.left = `${foodBox.getBoundingClientRect().left}px`;
        clone.style.top = `${foodBox.getBoundingClientRect().top}px`;
        clone.style.width = `${foodBox.offsetWidth}px`;
        clone.style.height = `${foodBox.offsetHeight}px`;
        clone.style.transition = 'transform 0.5s, opacity 0.5s';
        clone.style.zIndex = 1000;
        document.body.appendChild(clone);

        requestAnimationFrame(() => {
            clone.style.transform = `translate(${cartButtonRect.left - foodBox.getBoundingClientRect().left}px, ${cartButtonRect.top - foodBox.getBoundingClientRect().top}px) scale(0.1)`;
            clone.style.opacity = 0;
        });

        clone.addEventListener('transitionend', () => {
            document.body.removeChild(clone);
        });
    }

    // function displayCartItems() {
    //     cartItemsContainer.innerHTML = '';
    //     cartItems.forEach(item => {
    //         const cartItemElement = document.createElement('div');
    //         cartItemElement.classList.add('cart-item');
    //         cartItemElement.innerHTML = `
    //             <img src="${item.image}" alt="${item.title}" class="cart-item-image">
    //             <div class="cart-item-details">
    //                 <span>${item.title}</span>
    //                 <span>
    //                     <input type="number" value="${item.quantity}" class="quantity-input" min="1">
    //                     x $${item.price.toFixed(2)}
    //                 </span>
    //                 <span>$${(item.price * item.quantity).toFixed(2)}</span>
    //                 <button class="remove-item" data-title="${item.title}">Remove</button>
    //             </div>
    //         `;
    //         cartItemsContainer.appendChild(cartItemElement);
    //     });

    //     // Add checkout button
    //     checkoutButton.classList.add('checkout-button');
    //     checkoutButton.textContent = 'Checkout';
    //     cartModal.appendChild(checkoutButton);
    // }

    function displayCartItems() {
        cartItemsContainer.innerHTML = '';
        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-details">
                    <div>
                        <span>${item.title}</span><br>
                        <span>
                            <input type="number" value="${item.quantity}" class="quantity-input" min="1">
                            x $${item.price.toFixed(2)}
                        </span>
                    </div>
                    <div>
                        <span>$${(item.price * item.quantity).toFixed(2)}</span>
                        <button class="remove-item" data-title="${item.title}">Remove</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
    
        // Add checkout button
        // checkoutButton.classList.add('checkout-button');
        // checkoutButton.textContent = 'Checkout';
        // if (!document.querySelector('.checkout-button')) {
        //     cartModal.appendChild(checkoutButton);
        // }
    }
    

    cartItemsContainer.addEventListener('click', event => {
        if (event.target.classList.contains('remove-item')) {
            const title = event.target.dataset.title;
            cartItems = cartItems.filter(item => item.title !== title);
            updateCartCount();
            updateCartTotal();
            displayCartItems();
        } else if (event.target.classList.contains('quantity-input')) {
            const title = event.target.closest('.cart-item').querySelector('.remove-item').dataset.title;
            const newQuantity = parseInt(event.target.value, 10);
            const item = cartItems.find(item => item.title === title);
            item.quantity = newQuantity;
            updateCartTotal();
            displayCartItems();
        }
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    document.querySelector('.cart').addEventListener('click', () => {
        if (cartItems.length === 0) {
            alert('Cart is empty!');
            return;
        }
        cartModal.style.display = 'block';
    });

    // Close cart modal functionality
    closeCartModalButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('nav ul li a.active').classList.remove('active');
        this.classList.add('active');
    });
});