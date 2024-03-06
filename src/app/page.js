export default function Home() {
  return (
    <>
      <nav className="navbar is-link is-size-5" role="navigation" aria-label="main navigation">
        <div className="container container-limit">
          <div className="navbar-brand">
            <div className="navbar-item">
              <img src="https://puravive.com/assets/images/logo.png" width="180" className="is-hidden-touch" />
              <img src="https://puravive.com/assets/images/logo.png" width="150" className="is-hidden-desktop" />
            </div>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasic" className="navbar-menu">
            <div className="navbar-start">
            </div>
            <div className="navbar-end">
              <a href="https://60897y7kp5sxxw3f8hh6weg77u.hop.clickbank.net" className="navbar-item px-5 topbar" rel="about">
                About Puravive</a>
              <a href="https://60897y7kp5sxxw3f8hh6weg77u.hop.clickbank.net" className="navbar-item px-5 topbar" rel="ingredients">
                Ingredients
              </a>
              <a href="https://60897y7kp5sxxw3f8hh6weg77u.hop.clickbank.net" className="navbar-item px-5 topbar" rel="faq">
                FAQ
              </a>
              <div className="navbar-item pr-3 pl-5">
                <div className="buttons">
                  <a href="https://60897y7kp5sxxw3f8hh6weg77u.hop.clickbank.net" className="button is-link is-size-5 is-size-6-touch topbar" rel="order">
                    <strong>Order Now</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="section green-solid-background">
        <div className="container container-limit has-text-white">
          <div className="columns is-variable is-1">
            <div className="column is-5-desktop is-5-tablet has-text-centered pb-0">
              <img src="https://puravive.com/assets/images/product-home.png" style={{ width: '460px' }} alt="" />
            </div>
            <div className="column pb-0">
              <p className="title block-headline is-capitalized mb-4">Healthy Weight Loss As <span className="greenHigh">Pure</span> As Nature Intended</p>
              <p className="is-size-4 is-size-5-touch">Support healthy weight loss with Puravive's proprietary blend of 8 powerful <span className="greenHigh"><strong>tropical nutrients</strong></span> and <span className="greenHigh"><strong>plants</strong></span> backed by clinical research.</p>
              <div className="has-text-centered mt-4 mb-0">
                <img src="https://puravive.com/assets/images/generic/icons-fda.png" className="fda-logosetc" />
              </div>
              <div className="is-size-6 m-0 pt-1 pb-0 lh1 has-text-white">
                <strong>Manufactured in the USA</strong> from the finest of foreign and domestic ingredients.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-paddingless">
        <div className="container container-limit px-2 py-5">
          <div className="columns is-mobile">
            <div className="column index-column index-column-2 mr-5 is-hidden-desktop"></div>
            <div className="column is-8-desktop is-9-touch">
              <p className="has-text-weight-bold has-text-left is-size-3 is-size-4-touch lh1 mb-3 pt-3" style={{ color: '#098974' }}>March 2024 - New Scientific Discovery</p>
              <p className="title is-size-1-desktop is-size-2-tablet is-size-3-mobile is-capitalized lh1 mb-5">German scientists have discovered a shocking <span className="yellowunder">New Cause</span> of belly fat, and it's <em>not what you think</em>...</p>
              <p className="is-size-4 mb-3">Are you struggling to lose weight no matter how much you diet or exercise? Turns out, <strong>it's not your fault</strong>.</p>
              <p className="is-size-4 mb-3">A 2024 study published in Nature Medicine of 52,000 women and men, the largest of its kind in humans, found just one common factor in every overweight man and woman. <strong>Low brown adipose tissue levels</strong>! They also found common in every skinny person were high brown adipose tissue levels.<sup>i</sup></p>
              <p className="notification is-size-4" style={{ border: '2px solid #136e73', font: '20px' }}>Brown adipose tissue (BAT) also know as brown fat, is not fat at all. Its not a fat storer but a <strong>fat shrinker</strong>. Its brown color comes from its densely packed mitochondria which work 24/7 to <strong>burn calories</strong> from your fat stores and the food you eat into pure, natural energy.</p>
              <p className="is-size-4">Even though BAT makes up a fraction of your weight, it can burn up to <strong>300 times</strong> more calories than any other cell in your body!<sup>ii</sup></p>
            </div>
            <div className="column index-column index-column-2 ml-5 is-hidden-touch"></div>
          </div>
          <div className="py-2 has-text-italic is-size-6 is-size-7-touch has-text-grey"><div>References:</div>
            <div className="lh1"><p>i. https://www.nature.com/articles/s41591-020-1126-7</p>
              <p>ii. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2768171/</p></div>
          </div>
        </div>
      </section>
      <section className="section is-paddingless">
        <div className="container container-limit px-2 py-5">
        <div className="buttons"><a href="https://60897y7kp5sxxw3f8hh6weg77u.hop.clickbank.net" className="button is-link is-size-5 is-size-6-touch topbar" rel="order"><strong>Let's Burn 300X Calories Now!</strong></a></div>
        <div className="lh1">
          <p>Note: Click on Burn 300X Calories button to show more details and know how it works naturally.</p>
          <p>Disclaimer: We are affiliate marketer of Respected Puravive Company and all the contents on this site is replicated from the respective site.</p>
        </div>
        </div>
      </section>
    </>
  );
}
