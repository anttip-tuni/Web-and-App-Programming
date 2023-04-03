$(document).ready(function(){

    let parsedResult = '';

    $('#searchForFood').click(function () {
        const searchString = $('#searchTerm').val();

        getFoodFromDB(searchString).then((result) => {
            //console.log(result);

            const dropdown = $('<select></select>').attr('id', 'foodDropDown');

            parsedResult = JSON.parse(result);

            parsedResult.forEach(food => {
                let option = $('<option></option>').val(food.customid).text(food.name);
                dropdown.append(option);
            })

            $('#results').html(dropdown);

        })

    }); //end click



    $('body').on('change', '#foodDropDown', function(){

        let selectedFoodObject = parsedResult.filter(obj => {
            return obj.customid === this.value;
        })

        console.log(selectedFoodObject[0]);

        const nutrition = $('#nutrition');
        nutrition.html('');

        Object.entries(selectedFoodObject[0]).forEach(([key,value]) => {
            nutrition.append(`
                <div class="nutritionDetail">

                    <span class="key">${key}: </span>
                    <span class="value">${value} </span>

                </div>

            `);
        })

        sendPopularityPointToDB(this.value).then(result => {
            console.log('The result was: ' + result)
        })

    }) //end change

}) //end doc ready


