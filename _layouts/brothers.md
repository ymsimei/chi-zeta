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
        <div class="row">
        	<div class="col-md-3 side-bar">
            <h2 id="brother-class">Spring 2017</h2>
            <div class="brother-class-select">
			        <input type="radio" name="class" value="founding" id="founding" checked>
              <label for="founding">Founding</label>
              <label class="unavalible">Alpha</label>
            </div>
          </div>
    		  <div class="col-md-9">
            <div class="row" id="headshots">
            </div>
          </div>
        </div>
      </div>
    </div>

    {% include footer.md %}
    <script src="{{site.baseurl}}/_scripts/loadBrothers.js"></script>
  </body>

</html>
