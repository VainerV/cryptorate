//retreave API
function getDataAPI(search) {
  
    // retreave Nomics API
      $.ajax({
        type: "GET",
        url: `https://api.nomics.com/v1/dashboard`,
        data: {
            key: API_KEY,

        },
    
        success: function(search_data) {
         
          
          STATE.searchResult = search_data;
          
          findTheCurency();
          render();
        },
        error: function(error) {
          console.log(error);
        }
      });

    }
    