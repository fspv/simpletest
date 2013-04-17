if(Drupal.jsEnabled) {
  $(document).ready(function() {
    $('img[id=mimetex]').each(
        function () {
            // http://www.forkosh.com/mimetex.html#4
            // Realization of written in chapter 4.2 in the article
            var req = new XMLHttpRequest();
            // Get image with 'src'+\depth
            req.open('GET', $(this).attr('src') + '\\depth', false);
            req.send(null);
            // Read header Vertical-align
            var header = req.getResponseHeader('Vertical-align');
            // Setting style for the image
            $(this).attr('style', "Vertical-Align:" + header + "px");
        }
    );
  });
}
