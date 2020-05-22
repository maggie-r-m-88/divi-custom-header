<?php

function divi_vertical_widgets(){
register_sidebar( array(
	'name' => 'Vertical Nav Contact Widget',
	'id' => 'ver-nav-widget',
	'description' => __('Add bottom widgets to Vertical Menu'),
	'before_widget' => '<div id="custom-bottom-nav">',
	'after_widget' => '</div>',
	'before_title' => false,
	'after_title' => false
) );

register_sidebar( array(
  'name' => 'Vertical Nav Toggle Widget',
  'id' => 'top-nav-widget',
  'description' => __('Toggle Button for Vertical Menu'),
  'before_widget' => '<div id="custom-menu-nav">',
  'after_widget' => '</div>',
  'before_title' => false,
  'after_title' => false
) );


}


add_filter( 'widgets_init', 'divi_vertical_widgets', 10 );
