<?php

wp_register_script('jquery',get_template_directory_uri().'/libs/jquery/jquery-1.11.2.min.js');
wp_enqueue_script('jquery');

remove_action ('wp_head','rsd_link');
remove_action ('wp_head','wlwmanifest_link');
remove_action ('wp_head','wp_generator');

add_filter('wpcf7_form_elements', function($content) {
    $content = preg_replace('/<(span).*?class="\s*(?:.*\s)?wpcf7-form-control-wrap(?:\s[^"]+)?\s*"[^\>]*>(.*)<\/\1>/i', '\2', $content);

    return $content;
});

show_admin_bar(false);

require_once ( get_stylesheet_directory() . '/theme-options.php');

add_theme_support('post-thumbnails');
 ?>