 //Author - Alexander Adu-Sarkodie

 $(window).load(function(){
  $(document).ready( function() {
      /* Caching objects */
      var $allTabs = $(".tab");
      var $allPages = $(".page");
      var $content = $(".content");

      $allTabs.click(function() {
          /* Cache both the clicked tab and the page
              associated with this tab. 
              Gets the index of the clicked '.tab' (aka $this), 
              assigns $associatedPage to the '.page' at that index */
          var $this = $(this);
          var $associatedPage = $($allPages.get($this.index()));

          /* Remove the '.selected' class from all tabs,
                  add it to the currently selected tab. */
          $allTabs.removeClass("selected");
          $this.addClass("selected");

          /* Animate the fade, with callback to select the
              correct '.page' */
          $content.fadeOut('slow', function() {
              $allPages.removeClass("selected");
              $associatedPage.addClass("selected");
          });
          $content.fadeIn('slow');
      });     
  });
  });