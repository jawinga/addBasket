let addBtns = document.querySelectorAll(".addBtn");
let purchaseBtn = document.querySelector("#purchaseBtn");
let carrito = document.querySelector("#carrito");
let emptyBasket = document.querySelector("#emptyBasket");
let tarjetasCarrito = document.querySelector("#tarjetasCarrito");

addBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.closest("#card1")) {
      let card1 = document.createElement("div");
      card1.innerHTML = `
              <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="images/1.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Nécessaire</h5>
                      <hr>
                      
                      <p class="card-text">Size: 100ml</p>
                      <p class="card-text">Quantity: 1</p>
                      <p class="card-text">
                        <small class="text-body-secondary">Price: 29,99€</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          `;
      tarjetasCarrito.append(card1);
    } else if (e.target.closest("#card2")) {
      let card2 = document.createElement("div");
      card2.innerHTML = `
              <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="images/2.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Erbology Pack</h5>
                                            <hr>

                      <p class="card-text">Size: 150ml</p>
                      <p class="card-text">Quantity: 1</p>
                      <p class="card-text">
                        <small class="text-body-secondary">Price: 59,99€</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          `;
      tarjetasCarrito.append(card2);
    } else if (e.target.closest("#card3")) {
      let card3 = document.createElement("div");
      card3.innerHTML = `
              <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="images/3.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">The Natural Oil</h5>
                                            <hr>

                      <p class="card-text">Size: 110ml</p>
                      <p class="card-text">Quantity: 1</p>
                      <p class="card-text">
                        <small class="text-body-secondary">Price: 10,99€</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          `;
      tarjetasCarrito.append(card3);
    } else if (e.target.closest("#card4")) {
      let card4 = document.createElement("div");
      card4.innerHTML = `
              <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="images/4.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Curology X3</h5>
                                            <hr>

                      <p class="card-text">Size: 300ml</p>
                      <p class="card-text">Quantity: 1</p>
                      <p class="card-text">
                        <small class="text-body-secondary">Price: 50,99€</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          `;
      tarjetasCarrito.append(card4);
    } else if (e.target.closest("#card5")) {
      let card5 = document.createElement("div");
      card5.innerHTML = `
              <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="images/5.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">The Daily Grind</h5>
                                            <hr>

                      <p class="card-text">Size: 60ml</p>
                      <p class="card-text">Quantity: 1</p>
                      <p class="card-text">
                        <small class="text-body-secondary">Price: 20,00€</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          `;
      tarjetasCarrito.append(card5);
    } else if (e.target.closest("#card6")) {
      let card6 = document.createElement("div");
      card6.innerHTML = `
              <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="images/6.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Premium CBD Oil</h5>
                                            <hr>

                      <p class="card-text">Size: 80ml</p>
                      <p class="card-text">Quantity: 1</p>
                      <p class="card-text">
                        <small class="text-body-secondary">Price: 23,99€</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          `;
      tarjetasCarrito.append(card6);
    }

    purchaseBtn.hidden = false;
    emptyBasket.hidden = true;

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Added to your basket!",
    });
  });
});

purchaseBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Good job!",
    text: "Purchase complete!",
    icon: "success",
  });

  tarjetasCarrito.innerHTML = "";

  purchaseBtn.hidden = true;
  emptyBasket.hidden = false;
});
