<?php

function divi_vertical_widgets(){
register_sidebar( array(
	'name' => 'Vertical Nav Widgets',
	'id' => 'ver-nav',
	'description' => __('Add widgets to Vertical Menu'),
	'before_widget' => '<div id="ver-nav">',
	'after_widget' => '</div>',
	'before_title' => false,
	'after_title' => false
) );
}
function call_widgets_ver_menu() {
	
	$ver_nav = et_get_option( 'vertical_nav');
	if ($ver_nav == true){
	$output = dynamic_sidebar('ver-nav');
	return $output;
}
}
add_filter( 'widgets_init', 'divi_vertical_widgets', 10 );
