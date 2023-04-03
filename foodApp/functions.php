<?php

function theme_scripts(){
    wp_enqueue_script('jqueryNew', get_template_directory_uri() . '/js/jquery-3.6.3.js', '', false, false); 
    /* arguments are: name, path, dependencies, version, load in footer  */

    wp_enqueue_script('handleEvents', get_template_directory_uri() . '/js/handleEvents.js', 'jqueryNew', false, false); 

    wp_enqueue_script('getFoodFromDB', get_template_directory_uri() . '/js/getFoodFromDB.js', 'jqueryNew', false, false);

     wp_enqueue_script('sendPopularityPointToDB', get_template_directory_uri() . '/js/sendPopularityPointToDB.js', 'jqueryNew', false, false); 
}

function search_food(){
    $search_text = ($_POST["search_text"]);
    $sanitized_search_text = sanitize_text_field($search_text);

    global $wpdb;

    $foods = $wpdb->get_results($wpdb->prepare("SELECT * FROM foodsenglish WHERE name like %s ORDER BY popularity DESC", "%$search_text%"), ARRAY_A);

    $jsonEncodedFoods = json_encode($foods, JSON_UNESCAPED_UNICODE);

    echo $jsonEncodedFoods;

    exit();
}

function send_popularity(){
    $foodCustomIdToSendThePointFor = ($_POST["custom_food_id"]);

    $sanitizedFoodCustomIdToSendThePointFor = sanitize_text_field($foodCustomIdToSendThePointFor);

    global $wpdb;

    $results = $wpdb->query($wpdb->prepare("UPDATE foodsenglish SET popularity = popularity + 1 WHERE customid = %d", $sanitizedFoodCustomIdToSendThePointFor),ARRAY_A);

    exit();

}

add_action('wp_enqueue_scripts', 'theme_scripts');

add_action('wp_ajax_search_food', 'search_food');

add_action('wp_ajax_send_popularity_point', 'send_popularity');


?>