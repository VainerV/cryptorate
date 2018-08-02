// geting a search criteria from the user and calling the functuon to retreave API Data by passing search parameters 
// Update state and call render
function retreaveResults() {
    $("#submit-crypto-search").on("click", event => {
        event.preventDefault();

        STATE.lookingFor = $("#crypto-search").val();

        getDataAPI($("#crypto-search").val());

    })
}

function findTheCurency() {

    (STATE.searchResult).forEach(data => {
        if (data.currency === STATE.lookingFor) {
            STATE.currency = data;
            
        }

    })

    render();
}
// every time i change the state call render function to chage dysplay.
// every time I need to see changes I call render