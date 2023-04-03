<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php wp_head(); ?>
</head>
<body>

    <p>Search for a food:</p>
    <input type="text" name="searchTerm" id="searchTerm">
    <button id="searchForFood">Search</button>
    <div id="results"></div>

    <script>

        let myAdminAjaxURL = '<?php echo admin_url('admin-ajax.php') ?>';

    </script>

    <?php wp_footer(); ?>
    
</body>
</html>