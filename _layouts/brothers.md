<!DOCTYPE html>
<html>
  <head>
    {% include head.md %}
  </head>

  <body>
  	{% include nav.md %}

    <header id="brothers">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3>Meet Our Brothers</h3>
            <h4>We are a second family made up from the diverse students at NJIT.</h4>
          </div>
        </div>
      </div>
    </header>

    <div class="wrap">
      <div class="container">
        <div class="row" id="headshots">
        </div>
      </div>
    </div>

    {% include footer.md %}
    <script src="{{site.baseurl}}/_scripts/loadBrothers.js"></script>
  </body>

</html>
