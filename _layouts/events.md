<!DOCTYPE html>
<html>
  <head>
    {% include head.md %}
  </head>

  <body>
  	{% include nav.md %}

    <header id="events">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3>Upcoming Events</h3>
            <h4>Find out about our upcoming events.</h4>
          </div>
        </div>
      </div>
    </header>

    <div class="wrap">
      <div class="container">
        <div class="row">
          <div class="col-md-12 events">
            <iframe src="https://calendar.google.com/calendar/embed?src=njit.akpsi%40gmail.com&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;ctz=America%2FNew_York" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
          </div>
        </div>
      </div>
    </div>

    {% include footer.md %}
  </body>

</html>
