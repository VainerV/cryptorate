
//Will show search result on the page
function showSearchResult(){
   // console.log(STATE.searchResult);
   // loop  through the array, find disired object and display ir
   let showResault = findTheCurency();
    $(".show_results").html(showResault);
}
