$(document).ready(function(){

    $('#searchForFood').click(function () {
        const searchString = $('#searchTerm').val();

        getFoodFromDB(searchString).then((result) => {
            //console.log(result);

            const dropdown = $('<select></select>').attr('id', 'foodDropDown');

            let parsedResult = JSON.parse(result);

            parsedResult.forEach(food => {
                let option = $('<option></option>').val(food.customid).text(food.name);
                dropdown.append(option);
            })

            $('#results').html(dropdown);

        })

    });

})


