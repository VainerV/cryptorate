// geting a search criteria from the user and calling the functuon to retreave API Data by passing search parameters 

function retreaveResults(){
    $("#submit-crypto-search").on("click", event =>{
        event.preventDefault();
        console.log("vadim");

        getDataAPI($(".crypto-search").val());
    })
}

