//retreave API
function getDataAPI(search) {
  
    // retreave Nomics API
      $.ajax({
        type: "GET",
        url: `https://api.nomics.com/v1/dashboard?key=${API_KEY}`,
       
    
        success: function(search_data) {
          //console.log(search_data);
          
          STATE.searchResult = search_data;
         // console.log(STATE.searchResult);
          //show API_DATA();
          findTheCurency();
        
        },
        error: function(error) {
          console.log(error);
        }
      });

    }
    