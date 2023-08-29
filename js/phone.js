const loadPhone = async (searchText ,isShowAll) =>  {
        const res  =  await  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
           const  data = await res.json();
           const phones =  data.data;
            // console.log(phones);
            displayPhone(phones ,isShowAll);
};
  
 const displayPhone = (phones ,isShowAll) =>  {
        console.log(phones);
        // 1 je div bsabo oi div er id name
            const phoneContainer = document.getElementById('phone-container');
            // clear  phone container cards before adding new cards

                 phoneContainer.textContent = ``;
                //    display show all button if there are more than 20 phone
                     const showAllContainer  =  document.getElementById('show-all-container')
                   if(phones.length > 12 && !isShowAll){
                        showAllContainer.classList.remove('hidden');
                   }else{
                       showAllContainer.classList.add('hidden');
                   }
                     console.log('isShowAll', isShowAll);
                //  display only first 12  phone  if not show All
                 if(!isShowAll){
                    phones  = phones.slice(0,12);
                 }

         phones.forEach(phone => {
               console.log(phone);
                   
            //   2 create a div
             const  phoneCard =  document.createElement('div');
              phoneCard.classList = `card  bg-gray-100 p-4  shadow-xl

              `
            //    set inner html
              phoneCard.innerHTML = `
              <figure><img src="${phone.image}" /></figure>
              <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-center">
                  <button onclick="handelShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
                </div>
              </div>     
              `
    //  4 .appendchild 
       phoneContainer.appendChild(phoneCard);
          });

        //   hide loading spinner
       
        toggleLoadingSpinner(false);
 };

//  
const handelShowDetail = async (id) =>{
 
  console.log("click show details" , id);
  // load  single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/apple_{id}`);

       const data  =  await res.json();
       console.log(data);


}

//  handle search button 
  const handleSearch  = (isShowAll) =>{
     toggleLoadingSpinner(true)
       const searchField =  document.getElementById('search-field');
       const searchText = searchField.value;
       console.log(searchText);
       loadPhone(searchText ,isShowAll);
  }

//    handel search  recap 
   const handleSearch2 =  () =>{
    toggleLoadingSpinner(true);
        const searchField =  document.getElementById('search-field2');
        const searchText =  searchField.value;
        loadPhone(searchText);
           
   };

   const  toggleLoadingSpinner = (isLoading) => {
          const loadingSpinner = document.getElementById('loading-spinner');
            if(isLoading){
                loadingSpinner.classList.remove('hidden');
            }else{
                loadingSpinner.classList.add('hidden');
            }
   };
     
    //  handle show All

    const handleShowAll = () =>{
              handleSearch(true);
           
            
    };


// loadPhone();