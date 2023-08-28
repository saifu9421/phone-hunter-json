const loadPhone = async (searchText) =>  {
        const res  =  await  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
           const  data = await res.json();
           const phones =  data.data;
            // console.log(phones);
            displayPhone(phones);
};
  
 const displayPhone = phones =>  {
        // console.log(phones);
        // 1 je div bsabo
            const phoneContainer = document.getElementById('phone-container');
            // clear  phone container cards before adding new cards
            phoneContainer.textContent='';
         phones.forEach(phone => {
               console.log(phone);

            //   2 create a div
             const  phoneCard =  document.createElement('div');
              phoneCard.classList = `card  bg-gray-100 p-4  shadow-xl

              `
            //    set inner html
              phoneCard.innerHTML = `
              <figure><img src="${phone.image} " /></figure>
              <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>     
              `
    //  4 .appendchild 
       phoneContainer.appendChild(phoneCard);
          });
 };


//  handle search button 
  const handleSearch  = ()=>{
       const searchField =  document.getElementById('search-field');
       const searchText = searchField.value;
       console.log(searchText);
       loadPhone(searchText);
  }

// loadPhone();