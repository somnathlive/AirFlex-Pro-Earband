document.addEventListener("DOMContentLoaded", () => {
    const mainProductImage = document.getElementById("mainProductImage");  
    const thumbnails = document.querySelectorAll(".thumb");

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            const image = thumbnail.querySelector("img");
            if (!image) return;
            mainProductImage.src = image.src;
            thumbnails.forEach((item) => {
                item.classList.remove("active");
            });
             thumbnail.classList.add("active");
        });
    });

    /*..................COLOR SELECTION............*/
    const colors = document.querySelectorAll(".color");
    const selectedColor = document.getElementById("selectedColor");

    colors.forEach((color) => {
        color.addEventListener("click", () => {
            colors.forEach((item) => {
                item.classList.remove("selected");
            });
            color.classList.add("selected");
            selectedColor.textContent = color.dataset.color;
            showNotification(
                `Color selected: ${color.dataset.color}`
            );
        });
    });

    /*................... SIZE SELECTION......... */
    const sizes = document.querySelectorAll(".size");
    const selectedSize = document.getElementById("selectedSize");

    sizes.forEach((size) => {
        size.addEventListener("click", () => {
            sizes.forEach((item) => {
                item.classList.remove("selected");
            });
            size.classList.add("selected");
            selectedSize.textContent = size.textContent;
            showNotification(
                `Size selected: ${size.textContent}`
            );
        });
    });


    /* ............... QUANTITY.......... */
    const quantityDisplay = document.getElementById("quantity");
    const plusBtn = document.getElementById("plus");
    const minusBtn = document.getElementById("minus");

    let quantity = 1;
    plusBtn.addEventListener("click", () => {
        if (quantity < 10) {
            quantity++;
            quantityDisplay.textContent = quantity;
        }
    });
    
    minusBtn.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });


    /* .................. WISHLIST.......... */
    const wishlistBtn = document.querySelector(".wishlist-btn");
    let isWishlisted = false;
    wishlistBtn.addEventListener("click", () => {
        isWishlisted = !isWishlisted;
        wishlistBtn.classList.toggle(
            "liked",
             isWishlisted
        );
        if (isWishlisted) {
            showNotification(
                "Added to wishlist"
            );
        } else {
            showNotification(
                "Removed from wishlist"
            );
        }
    });


    /*................ADD TO CART...........*/
    const addToCart = document.getElementById("addToCart");
    addToCart.addEventListener("click", () => {
        const color = selectedColor.textContent;
        const size = selectedSize.textContent;
        addToCart.classList.add("added");
        addToCart.innerHTML ="ADDED TO CART";
        showNotification(
            `Added ${quantity} item(s) • ${color} • Size ${size}`
        );

        /* Change button back after 2 seconds */
        setTimeout(() => {
            addToCart.classList.remove("added");
            addToCart.innerHTML = "<span>🛒</span> ADD TO CART";
        }, 2000);
    });

    /*......... NOTIFICATION FUNCTION......... */

    const notification = document.getElementById("notification");
    function showNotification(message) {
        notification.textContent = message;
        notification.classList.add("show");
        clearTimeout(notification.timer);
        notification.timer = setTimeout(() => {notification.classList.remove("show");}, 2200);
    }

    /*..........INITIAL PRODUCT STATE...... */

    selectedColor.textContent = "Black";
    selectedSize.textContent = "42";
    quantityDisplay.textContent = "1";
});