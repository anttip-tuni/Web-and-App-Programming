async function sendPopularityPointToDB(foodcustomid) {


    let myAjax = await $.ajax({
        type: "POST",
        url: myAdminAjaxURL,
        data: {
            action: 'send_popularity_point',
            custom_food_id: foodcustomid
        },
        success: function (theResponse) {

            myResponse = theResponse;

            return ('success');

        },
        error: function () {
            return ('ajax error!')
        }
    })

    return (myAjax);
}