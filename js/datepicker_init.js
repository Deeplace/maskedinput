Drupal.behaviors.datepicker_init = {
  attach:function (context) {
    jQuery('input.datepicker', context).datepicker({
      "dateFormat":"dd/mm/yy"
    });
  }
}

