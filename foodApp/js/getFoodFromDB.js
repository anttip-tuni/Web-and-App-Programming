async function getFoodFromDB(stringToSearchWith){
    let myResponse = '';

    let myAjax = await $.ajax({
        type: "POST",
        url: myAdminAjaxURL,
        data: {
            action: 'search_food',
            search_text: stringToSearchWith
        },
        success: function(theResponse){

            myResponse = theResponse;

            return('success');

        },
        error: function(){
            return('ajax error!')
        }
    })

    return(myResponse);
}