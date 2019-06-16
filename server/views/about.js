module.exports = (path) => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
      <title>e | town</title>
      <link rel="canonical" href="https://etowncolorado.com">
      <style>
        body {
          margin: 0;
        }

        .container {
          display: flex;
          background: blue;
          justify-content: center;
        }
      </style>
    </head>
    <body>
      <header>
        <a href="/">
          <img src="https://etowncolorado-content.web.app/images/logo.svg" width="90" />
        </a>

        <nav>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Shop</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <header>
          <h1>A relaxing environment with great food, great drinks and great people.</h1>
          <p>For over 10 years e|town has been providing a warm and inviting place where delicious meals are prepared, and friends and family gather. With a passion for pure flavor, we create a menu of diverse, approachable, ingredient-driven plates prepared from scratch.</p>
          <figure>
            <img src="http://placekitten.com/400/300" />
          </figure>
        </header>

        <section>
          <figure>
            <img src="http://placekitten.com/400/300" />
          </figure>
          <h2>A Colorado favorite located in the heart of Edwards, Colorado.</h2>
          <p>With a passion for consistently delicious cuisine, prepared with love by amazing people,served in an environment that makes our guests feel welcome dressed up or winding down.<p>
          <a href="/">Learn more</a>
        </section>

        <section>
          <figure>
            <blockquote cite="http://google.com">
              <p>Atmosphere is always lively, happy hour is on point, and I've always had an amazing meal with wonderful service.</p>
            </blockquote>

            <figcaption>
              <address>
                <a href="/">Taylor P.</a> Avon, Colorado
              </address>
            </figcaption>
          </figure>
        </section>

        <section class="container">
          <figure>
            <img src="http://placekitten.com/400/300" />
          </figure>
          
          <h2>Seared Sesame Tuna</h2>
          <p>A beautifully seared tuna with wasabi potato cake, crab guacamole, tempura battered asparagus in an orange ginger sauce.<p>
          <a href="/">See full menu</a>
        </section>

        <section>
          <article>
            <time datetime="2008-02-14 20:00">November 21, 2017</time>
            <h3>We have a new website!</h3>
            <p>It has a been a labor of love but we have a new website!</p>
            <a href="/">Read more</a>
          </article>

          <article>
            <time datetime="2008-02-14 20:00">November 21, 2017</time>
            <h3>We have a new website!</h3>
            <p>It has a been a labor of love but we have a new website!</p>
            <a href="/">Read more</a>
          </article>
        </section>
      </main>

      <aside>
        <h4>Learn more about what's new at e|town.</h4>
        <a href="/">Our blog</a>
      </aside>

      <footer>
        <section>
          <form>
            <label>Sign up for our newsletter</label>
            <input placeholder="name@email.com" />
            <input type="submit" value="Sign up">
          </form>

          <nav>
            <ul>
              <li><a href="/">About</a></li>
              <li><a href="/">Menu</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">Shop</a></li>
            </ul>
          </nav>
        </section>

        <section>
          <ul>
            <li><a href="/">Facebook</a></li>
          </ul>

          <address>
            <a href="/">info@etowncolorado.com</a>
            <a href="/">970.926.4080</a>
            <a href="/">295 Main St, Edwards, CO</a>
            <a href="/">11am - 10pm Daily</a>
          </address>
        </section>
      </footer>
    </body>
  </html>
`;