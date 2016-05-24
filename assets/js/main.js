$(function() {

    //Link comments event
    $('a.comments__label').on('click', function() {

      //config
      var disqus_config = function () {
        this.page.url = '{{ site.url }}';
        this.page.identifier ='migsalazar';
      };

      var d = document,
          s = d.createElement('script');
      s.src = '//migsalazar.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.header || d.body).appendChild(s);

      $('#disqus_thread').show();
      $(this).hide();

      return false;
    });

    //just for fun
    $('h1 i.fa').on('mouseenter', function(){
      var anim = 'hinge';
      $(this)
      .removeClass('animated ' + anim)
      .addClass('animated ' + anim)
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function(){
        $(this).removeClass('fa fa-child animated ' + anim);
      });
    });
});