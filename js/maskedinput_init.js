jQuery.mask.definitions['8']='[0-9]';

Drupal.behaviors.maskedinput = {
  attach:function (context) {
    jQuery('input.maskedinput', context).each(function(){
      var input = jQuery(this);
      var conf_key = input.attr('alt');

      if (!conf_key) {
        return;
      }
      if (!Drupal.settings.maskedinput) {
        return;
      }
      var settings = Drupal.settings.maskedinput[conf_key];
      if (!settings) {
        return;
      }
      input.mask(settings,
        {
          placeholder:jQuery(this).attr('placeholder')
        }
      );
    });
  }
}