//retreave API
function getDataAPI(search) {
  
    // retreave Nomics API
      $.ajax({
        type: "GET",
        url: "https://api.nomics.com/v1/dashboard",
        headers: {
          "key": API_KEY
        },
    
        success: function(search_data) {
          console.log(search_data);
          // sending AJAX retrved data to sort and get reqired fields
          STATE.searchResult = search_data;
          //processAPI_DATA();
          showSearchResult();
        },
        error: function(error) {
          console.log("some error");
        }
      });
    }
    