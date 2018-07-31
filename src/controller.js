// geting a search criteria from the user and calling the functuon to retreave API Data by passing search parameters 

function retreaveResults(){
    $("#submit-crypto-search").on("click", event =>{
        event.preventDefault();
        
        STATE.lookingFor = $("#crypto-search").val();
        console.log(STATE.lookingFor);
        getDataAPI($("#crypto-search").val());
        
    })
}

function findTheCurency(){
    
      (STATE.searchResult).forEach(data => {
      if(data.currency === STATE.lookingFor){
        STATE.currency = data.currency;
        STATE.dayOpen =data.dayOpen
        STATE.dayVolume = data.dayVolume;
        STATE.availableSupply = data.availableSupply;
        c
      }
      
  })

 
}