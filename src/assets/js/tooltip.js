// author maywzp by 2016-12-19

const Tooltip = () => {
    const config = {
      animation       : true,
      delay           : 0,
      title           : 'tooltip',
      placement       : 'top', //top、bottom、left、right
      trigger         : 'hover focus',
      template        : '<div class="m-tooltip m-tooltip--top">'
                      + '<div class="m-tooltip__inner"></div></div>'
    }

    const $tooltip = $('body').find('[data-toggle="tooltip"]')

    $tooltip.each(function(){
      console.log(this);

      let title = $(this).attr('title') || config.title
      let placement = $(this).data('placement') || config.placement

      let height = $(this).height()
      let width = $(this).width()

      $(this).append(config.template)
      $('.m-tooltip__inner').text(title)

      $('.m-tooltip').css({
        top: '-33px',
        left: '-10px'
      })

      $(this).hover(function(){
          $(this).find('.m-tooltip').addClass('in')
      }, function(){
          $(this).find('.m-tooltip').removeClass('in')
      })
    })
}

export default Tooltip
