<nav class="navbar fixed-top navbar-expand-md nav-transparent" id="nav">
  <div class="container">
    <a class="navbar-brand" href="./">
      <img src="./_assets/svg/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="">
      Alpha Kappa Psi<span style="color:orange;font-size:12px;position:relative;left:3px;bottom:5px">beta</span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <p class="navbar-toggler-icon">Menu</p>
    </button>
    <div class="collapse justify-content-end navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link {% if page.url == '/about' %}active{% endif %}" href="{{site.baseurl}}/about">About</a>
        <a class="nav-item nav-link {% if page.url == '/brothers' %}active{% endif %}" href="{{site.baseurl}}/brothers">Brothers</a>
        <a class="nav-item nav-link {% if page.url == '/events' %}active{% endif %}" href="{{site.baseurl}}/events">Events</a>
        <a class="nav-item nav-link {% if page.url == '/contact' %}active{% endif %}" href="{{site.baseurl}}/contact">Contact</a>
      </div>
    </div>
  </div>
</nav>
