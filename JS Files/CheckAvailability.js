 async function callAPI() {
    let response = await fetch("API.json");
    let data = await response.json();

    document.querySelector(".room__container").innerHTML = data.map((item, i) => {
      let flexClass = i % 2 === 0 ? "flex-reverse" : ""; 
      return `<div class="room__grid"> 
                <div class="room__card ${flexClass}">
                <img src="${item.image}" alt="Hotel Room">
                <div class="room__details">
                  <h3>${item.name}</h3>
                  <br> 
                  <b style="color: rgb(217, 95, 42);">Room size -> </b> ${item.size}
                  <p>
                    <br>
                    ${item.description}
                  </p>
                  <b style="color: rgb(217, 95, 42);">Best Available Rate -> </b>    
                  <p> ${item.extra} </p>
                  <p class="end">INR ${item.price} per night</p>
                  <button class="btn end" onclick='bookRoom(${JSON.stringify(item)})'>Book Now</button>
                </div>
              </div>
             </div>`;
    }).join("");
  }
  function bookRoom(detail){
    const loggedInUser= localStorage.getItem("loggedinuser");
    if(loggedInUser){
        saveDetail(detail)
    }else{
      window.location.href="LoginPage.html"
    }
  }

  function saveDetail(detail){
      localStorage.setItem('roomDetail', JSON.stringify(detail) );
    window.location.href="Checkout.html";
  }

  callAPI();


  // Function to populate date and guest fields from local storage
    function populateFieldsFromLocalStorage() {
        const checkinDate = localStorage.getItem("checkinDate");
        const checkoutDate = localStorage.getItem("checkoutDate");
        const Adult = localStorage.getItem("Adult");
        const Child = localStorage.getItem("Child");

        // Populate fields if data exists in local storage
        if (checkinDate && checkoutDate && Adult && Child) {
            document.getElementById("checkinDate").value = checkinDate;
            document.getElementById("checkoutDate").value = checkoutDate;
            document.getElementById("Adult").value = Adult;
            document.getElementById("Child").value = Child;
        }
    }

    populateFieldsFromLocalStorage();


    // Function to update local storage on changes
    function updateLocalStorage(e) {
        e.preventDefault(); // it is use to prevent from redirecting to listing directory
        const checkinDate = document.getElementById("checkinDate").value;
        const checkoutDate = document.getElementById("checkoutDate").value;
        const Adult = document.getElementById("Adult").value;
        const Child = document.getElementById("Child").value;

        localStorage.setItem("checkinDate", checkinDate);
        localStorage.setItem("checkoutDate", checkoutDate);
        localStorage.setItem("Adult", Adult);
        localStorage.setItem("Child", Child);
    }

    // Event listener to update local storage when fields change
    // document.getElementById("checkinDate").addEventListener("change", updateLocalStorage);
    // document.getElementById("checkoutDate").addEventListener("change", updateLocalStorage);
    // document.getElementById("Adult").addEventListener("change", updateLocalStorage);
    // document.getElementById("Child").addEventListener("change", updateLocalStorage);
