const loadPhone = async (searchText) =>  {
        const res  =  await  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
           const  data = await res.json();
           const phones =  data.data;
            // console.log(phones);
            displayPhone(phones);
};
  
 const displayPhone = phones =>  {
        console.log(phones);
        // 1 je div bsabo oi div er id name
            const phoneContainer = document.getElementById('phone-container');
            // clear  phone container cards before adding new cards

                 phoneContainer.textContent = ``;
                //    display show all button if there are more than 20 phone
                     const showAllContainer  =  document.getElementById('show-all-container')
                   if(phones.length > 12){
                        showAllContainer.classList.remove('hidden');
                   }else{
                       showAllContainer.classList.add('hidden');
                   }
                     
                //  display only first 10  phone 
                 phones  = phones.slice(0,12);

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


   const handleSearch2 =  () =>{
          
        const searchField =  document.getElementById('search-field2');
        const searchText =  searchField.value;
        loadPhone(searchText);
           
   };

// loadPhone();