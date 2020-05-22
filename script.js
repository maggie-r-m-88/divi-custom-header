function et_toggle_slide_menu(force_state) {
    var $slide_menu_container = jQuery('.et_header_style_slide .et_slide_in_menu_container'),
        $page_container = jQuery('.et_header_style_slide #page-container, .et_header_style_slide.et_fixed_nav #main-header'),
        $header_container = jQuery('.et_header_style_slide #main-header'),
        is_menu_opened = $slide_menu_container.hasClass('et_pb_slide_menu_opened'),
        set_to = typeof force_state !== 'undefined' ? force_state : 'auto',
        is_boxed_layout = jQuery('body').hasClass('et_boxed_layout'),
        page_container_margin = is_boxed_layout ? parseFloat(jQuery('#page-container').css('margin-left')) : 0,
        slide_container_width = $slide_menu_container.innerWidth(),
        is_rtl = jQuery('body').hasClass('rtl');

    if ('auto' !== set_to && (is_menu_opened && 'open' === set_to || !is_menu_opened && 'close' === set_to)) {
      return;
    }

    if (is_menu_opened) {
      if (is_rtl) {
        $slide_menu_container.css({
          left: '-' + slide_container_width + 'px'
        });
        $page_container.css({
          right: '0'
        });
      } else {
        $slide_menu_container.css({
          right: '-' + slide_container_width + 'px'
        });
        $page_container.css({
          left: '0'
        });
      }

      if (is_boxed_layout && et_is_fixed_nav) {
        if (is_rtl) {
          $header_container.css({
            right: page_container_margin + 'px'
          });
        } else {
          $header_container.css({
            left: page_container_margin + 'px'
          });
        }
      } // hide the menu after animation completed


      setTimeout(function () {
        $slide_menu_container.css({
          'display': 'none'
        });
      }, 700);
    } else {
      $slide_menu_container.css({
        'display': 'block'
      }); // add some delay to make sure css animation applied correctly

      setTimeout(function () {
        if (is_rtl) {
          $slide_menu_container.css({
            left: '0'
          });
          $page_container.css({
            right: '-' + (slide_container_width - page_container_margin) + 'px'
          });
        } else {
          $slide_menu_container.css({
            right: '0'
          });
          $page_container.css({
            left: '-' + (slide_container_width - page_container_margin) + 'px'
          });
        }

        if (is_boxed_layout && et_is_fixed_nav) {
          var left_position = 0 > slide_container_width - page_container_margin * 2 ? Math.abs(slide_container_width - page_container_margin * 2) : '-' + (slide_container_width - page_container_margin * 2);

          if (left_position < slide_container_width) {
            if (is_rtl) {
              $header_container.css({
                right: left_position + 'px'
              });
            } else {
              $header_container.css({
                left: left_position + 'px'
              });
            }
          }
        }
      }, 50);
    }

    jQuery('body').toggleClass('et_pb_slide_menu_active');
    $slide_menu_container.toggleClass('et_pb_slide_menu_opened');
  } // Scrolling to the correct place on page if Fixed Nav enabled

jQuery(document).on("click", "#toggler", et_toggle_slide_menu);
