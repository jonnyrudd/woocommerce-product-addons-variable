jQuery(document).ready(function($){
    $(document).on('change','.variations input, .variations select',function(){
        $variation_id = $('input[name=variation_id]').val();
        $.post(
            wc_add_to_cart_params.ajax_url,
            {
                'action': 'change_product_variation',
                'data':   $variation_id
            },
            function(response){
                style_add_ons(response);
            });
    });
    function style_add_ons(bool)
    {
        if ( bool == 'yes' )
        {
            $('.product-addon').css('display', 'block')
        }
        else
        {
            $('.product-addon').css('display', 'none');
        }
    }
});