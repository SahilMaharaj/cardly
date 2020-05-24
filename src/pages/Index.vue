<template>
  <Layout>
    <section class="spacing" id="hero">
      <div class="hero-content">
        <div class="hero-left">
          <h2>Powering Secure Payments and Global Finance.</h2>
          <p>Cardly is the best software platform to make secure and fast payments to just about anyone that has a smartphone.</p>
          <div class="hero-btn">
            <a @click.prevent="$scrollTo('#expenses')"><button>Discover Features</button></a>
            <p>* No credit card required</p>
          </div>
        </div>
        <div class="hero-right">
          <g-image src="~/assets/images/hero-animated.png"></g-image>
        </div>
      </div>
      <g-image class="hero-design" src="~/assets/images/hero-design.svg"></g-image>
    </section>
    <section id="company-logos">
      <div class="company-tagline">
        <p>Join the 20,000+ companies using the our platform</p>
      </div>
      <div class="all-logos">
          <ul class="logo-list">
            <li><g-image width="131" src="~/assets/images/logo1.png"></g-image></li>
            <li><g-image width="131" src="~/assets/images/logo2.png"></g-image></li>
            <li><g-image width="131" src="~/assets/images/logo3.png"></g-image></li>
            <li><g-image width="131" src="~/assets/images/logo4.png"></g-image></li>
            <li><g-image width="131" src="~/assets/images/logo5.png"></g-image></li>
          </ul>
        </div>
    </section>
    <section id="expenses">
      <div class="expenses-wrapper">
        <div class="expenses-text">
          <h3>Take control of your expenses</h3>
          <p>Grow sales and increase conversions by offering more payment options</p>
        </div>
        <div class="usps">
          <ul class="usp-list">
            <li>
              <div class="icon-bkg"><g-image width="57" src="~/assets/images/take-control.png"></g-image></div>
              <h4>Take Control</h4>
              <p>Grow sales and increase conversions by offering more payment options</p>
            </li>
            <li>
              <div class="icon-bkg"><g-image width="57" src="~/assets/images/easy-payments.png"></g-image></div>
              <h4>Easy Payments</h4>
              <p>Use our amazing credit system to mange easy payments to all countries</p>
            </li>
            <li>
              <div class="icon-bkg"><g-image width="57" src="~/assets/images/track-expenses.png"></g-image></div>
              <h4>Track Expenses</h4>
              <p>Grow sales and increase conversions by offering more payment options</p>
            </li>
            <li>
              <div class="icon-bkg"><g-image width="57" src="~/assets/images/get-report.png"></g-image></div>
              <h4>Get Report</h4>
              <p>Advanced analytics help you understand your data and spending habits</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="platform">
      <div class="platform-wrapper">
        <div class="platform-left">
          <g-image src="~/assets/images/platform-benefits.svg"></g-image>
        </div>
        <div class="platform-right">
          <h3>Multiple payments easier on one platform.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare</p>
          <div class="platform-feature">
            <div class="platform-icon">
              <g-image src="~/assets/images/secure-payments-shield.svg"></g-image>
            </div>
            <div class="platform-feat-text">
              <h5>Secure Payments</h5>
              <p>Virtual and physical cards, invoices and more</p>
            </div>
          </div>
          <div class="platform-feature">
            <div class="platform-icon">
              <g-image src="~/assets/images/google-maps-pin.svg"></g-image>
            </div>
            <div class="platform-feat-text">
              <h5>Everywhere</h5>
              <p>Seamless approvals. Automated reporting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="smarter">
      <div class="platform-wrapper">
        <div class="smarter-left">
          <h3>Smarter cards keep you in full control.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare</p>
          <div class="platform-feature">
            <div class="platform-icon">
              <g-image src="~/assets/images/cog-icon.svg"></g-image>
            </div>
            <div class="platform-feat-text">
              <h5>Total Control Over Spending</h5>
              <p>Real-time insights, team-based spending policies</p>
            </div>
          </div>
          <div class="platform-feature">
            <div class="platform-icon">
              <g-image src="~/assets/images/magnifying-glass.svg"></g-image>
            </div>
            <div class="platform-feat-text">
              <h5>Accounts Payable</h5>
              <p>Track all your invoices in one place</p>
            </div>
          </div>
        </div>
        <div class="smarter-right">
          <g-image src="~/assets/images/woman-with-graph.svg"></g-image>
        </div>
      </div>
    </section>
    <section id="dashboard">
      <div class="platform-wrapper">
        <div class="platform-left">
          <g-image src="~/assets/images/woman-with-card.svg"></g-image>
        </div>
        <div class="platform-right">
          <h3>Complete dashboard for finance control.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare</p>
          <div class="hero-btn dashboard-btn">
            <a @click.prevent="$scrollTo('#cta-section')"><button>Sign up for a Free Trial</button></a>
          </div>
        </div>
      </div>
    </section>
    <section id="choose-plan">
      <div class="title-wrap">
        <h3>Choose a plan</h3>
        <p class="caption">This is the right choice. No credit card required for trial</p>
      </div>
      <div class="pricing-blocks">
        <div class="pricing-card">
          <div class="price-option">
            <div class="type-wrap">
              <div class="option-type"><h4>Regular</h4></div>
              <div class="pricing-icon"><g-image src="~/assets/images/regular-pricing.svg"></g-image></div>
            </div>
            <div class="price-wrap">
              <h4>$25.99<span class="per-month">/month</span></h4>
              <div class="was-price">$50.99</div>
            </div>
            <p class="option-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse varius.</p>
            <div class="option-perks">
              <div class="perk"><g-image src="~/assets/images/check-icon.png"></g-image> 1 Account</div>
              <div class="perk"><g-image src="~/assets/images/check-icon.png"></g-image> Global Usage</div>
              <div class="perk"><g-image src="~/assets/images/check-icon.png"></g-image> Analytics Dashboard</div>
              <div class="perk"><g-image src="~/assets/images/check-icon.png"></g-image> Accounts Payable</div>
            </div>
            <div class="hero-btn card-btn">
              <a @click.prevent="$scrollTo('#cta-section')"><button>Sign up for a Free Trial</button></a>
            </div>  
          </div>
        </div>

        <div class="pricing-card pricing-shadow">
          <div class="price-option">
            <div class="type-wrap">
              <div class="option-type"><h4>Popular</h4></div>
              <div class="pricing-icon"><g-image src="~/assets/images/popular-pricing.png"></g-image></div>
            </div>
            <div class="price-wrap">
              <h4>$44.99<span class="per-month">/month</span></h4>
              <div class="was-price">$50.99</div>
            </div>
            <p class="option-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse varius.</p>
          </div>
          <div class="option-perks">
              <div class="perk"><g-image src="~/assets/images/check-icon.png"></g-image> 3 Accounts</div>
              <div class="perk"><g-image src="~/assets/images/check-icon.png"></g-image> Global Usage</div>
              <div class="perk"><g-image src="~/assets/images/check-icon.png"></g-image> Analytics Dashboard</div>
              <div class="perk"><g-image src="~/assets/images/check-icon.png"></g-image> Accounts Payable</div>
            </div>
            <div class="hero-btn card-btn">
              <a @click.prevent="$scrollTo('#cta-section')"><button>Sign up for a Free Trial</button></a>
            </div>
        </div>

        <div class="pricing-card mobile-shadow">
          <div class="price-option">
            <div class="type-wrap">
              <div class="option-type"><h4>Enterprise</h4></div>
              <div class="pricing-icon"><g-image src="~/assets/images/enterprise-pricing.png"></g-image></div>
            </div>
            <div class="price-wrap">
              <h4>$125.99<span class="per-month">/month</span></h4>
              <div class="was-price">$50.99</div>
            </div>
            <p class="option-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse varius.</p>
            <div class="option-perks">
              <div class="perk"><g-image src="~/assets/images/check-icon.png"></g-image> Unlimited Accounts</div>
              <div class="perk"><g-image src="~/assets/images/check-icon.png"></g-image> Global Usage</div>
              <div class="perk"><g-image src="~/assets/images/check-icon.png"></g-image> Analytics Dashboard</div>
              <div class="perk"><g-image src="~/assets/images/check-icon.png"></g-image> Accounts Payable</div>
            </div>
            <div class="hero-btn card-btn">
              <a @click.prevent="$scrollTo('#cta-section')"><button>Sign up for a Free Trial</button></a>
            </div>
          </div>
        </div>
      </div>
   </section>
   <section id="testimonial">
     <div class="platform-wrapper">
        <div class="platform-left">
          <g-image src="~/assets/images/testimonial-guy.png"></g-image>
        </div>
        <div class="platform-right">
          <h3>"Cardly has helped reduce our fees by over 17%"</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          <div class="hero-btn dashboard-btn">
            <a @click.prevent="$scrollTo('#cta-section')"><button>Request a demo</button></a>
          </div>
        </div>
      </div>
   </section>
   <section id="faqs">
     <div class="faqs-wrapper">
      <h3>Frequently Asked Questions</h3>
        <div class="faqs-halves">
           <div class="faqs-left"> 
            <Faqs question="How can we get funding for our startup?">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</Faqs>
            <Faqs question="Can I make extra payments on my car loan?">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</Faqs>
            <Faqs question="I am looking for a particular form, where can I find it?">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</Faqs>
            <Faqs question="What documentation is required when applying?">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</Faqs>
          </div>
          <div class="faqs-right">
            <Faqs question="What do I do if my financial situation changes?">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</Faqs>
            <Faqs question="Are you based in Australia?">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</Faqs>
            <Faqs question="Who founded the company?">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</Faqs>
            <Faqs question="I'm self-employed and am unable to provide pay slips?">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</Faqs>
          </div>
        </div>
     </div>
     
     
   </section>
   <section id="cta-section">
     <div class="cta-wrapper">
       <div class="cta-content">
         <div class="cta-title-wrap">
            <h2>Now it's time to switch old ways to track expenses smarter</h2>
            <div class="cta-caption">What are you waiting for? It's time to get started.</div>
            <div class="hero-btn dashboard-btn">
              <button>Request a demo</button>
          </div>
         </div>
       </div>
       <g-image src="~/assets/images/cta-bkg.svg"></g-image>
     </div>
   </section>
  </Layout>
</template>

<script>
import Faqs from '~/components/Faqs.vue'

export default {
  metaInfo: {
    title: 'Cardly | Gridsome',
    titleTemplate: '%s'
  },
  components: {
    Faqs
  }
}
</script>

<style scoped>
/*----- GENERAL -----*/
h3 {
  font-size: 49px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.4px;
  margin-bottom: 10px;
  color: #28224b;
}

h4 {
  margin-top: 10px;
  margin-bottom: 4px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
}

h5 {
  margin-top: 10px;
  margin-bottom: 4px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
}
/*----- HERO -----*/
#hero {
  position: relative;
  padding: 100px 3%;
}

.hero-content {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-left, .hero-right {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.hero-right img {
  width: 100%;
}

.hero-left h2 {
  font-size: 3.75rem;
  color: #28224b;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 20px;
}

.hero-left p {
  max-width: 420px;
  color: #7e828f;
}

.hero-btn {
  margin-top: 25px;
  display: flex;
  align-items: center;
}

.hero-btn button {
  display: flex;
}

.hero-btn p {
  display: flex;
  margin-bottom: 0;
}

.hero-btn button {
  padding: 16px 30px;
  border-radius: 4px;
  background-color: #19ceaf;
  -webkit-transition: background-color 250ms ease;
  transition: background-color 250ms ease;
  text-align: center;
  border: none;
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  cursor: pointer;
}

.hero-btn button:hover {
  background-color: #16c2a4;
}

.hero-btn p {
  margin-left: 12px;
  font-size: 16px;
  color: #28224b;
}

.hero-design {
  position: absolute;
  left: 0%;
  right: auto;
  top: auto;
  bottom: -25px;
  z-index: -1;
}
/*----- COMPANY LOGOS -----*/
#company-logos {
  padding: 60px 3%;
}

.company-tagline {
  margin-bottom: 20px;
  font-weight: 500;
}

.company-tagline p {
  display: block;
  text-align: center;
  color: #353448;
  line-height: 1.4;
  font-size: 19px;
}

.all-logos ul {
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
}

.logo-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.logo-list li {
  margin-right: 16px;
  padding: 20px;
  min-height: 100px;
  display: flex;
  align-items: center;
}

.logo-list li:last-child {
  margin-right: 0;
}
/*----- USPS -----*/
#expenses {
  padding: 100px 3%;
  background: #f5f7ff;
}

.expenses-text {
  text-align: center;
  margin-bottom: 80px;
}

.expenses-text p {
  text-align: center;
  color: #7e828f;
}

.usps {
  display: flex;
  justify-content: center;
  text-align: center;
}

.usp-list {
  list-style: none;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  padding: 0;
}

.usp-list li {
  padding: 0 16px;
  max-width: 288px;
}

.usp-list li:last-child {
  margin-right: none;
}

.usp-list li p {
  color: #7e828f;
}

.icon-bkg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  margin: 0 auto 30px auto;
  border-radius: 15px;
  background-color: #f7f8ff;
  box-shadow: inset 4px 4px 3px 0 #fff, 0 12px 50px 12px rgba(156, 181, 247, 0.19);
}
/*----- PLATFORM -----*/
#platform {
  padding: 100px 3%;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f5f7ff), to(#fff));
  background-image: linear-gradient(180deg, #f5f7ff, #fff);
}

.platform-wrapper {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

.platform-left {
  padding: 15px;
  flex: 1;
  margin-right: 16px;
}

.platform-right {
  flex: 1;
  padding: 0 35px;
}

.platform-left img {
   width: 100%;
}

.platform-right h3 {
  margin-bottom: 24px;
  line-height: 1.1;
}

.platform-right p {
  color: #7e828f;
}

.platform-feature {
  display: flex;
  align-items: center;
  margin-top: 25px;
}

.platform-icon img {
  width: 35px;
  margin-right: 16px;
}

.platform-feat-text p {
  color:#7e828f;
  margin-bottom: 10px;
}
/*----- SMARTER -----*/
#smarter {
  padding: 100px 3%;
  background: #fff;
}

.smarter-left {
  flex: 1;
  padding: 0 35px;
  margin-right: 16px;
}

.smarter-left h3 {
  margin-bottom: 24px;
  line-height: 1.1;
}

.smarter-left p {
  color: #7e828f;
}

.smarter-right {
  padding: 15px;
  flex: 1;
}

.smarter-right img {
  width: 100%;
}
/*----- DASHBOARD -----*/
#dashboard {
  padding: 100px 3%;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#f5f7ff));
  background-image: linear-gradient(180deg, #fff, #f5f7ff);
}
/*----- CHOOSE A PLAN -----*/
#choose-plan {
  padding: 100px 3% 140px;
  background-color: #f5f7ff;
}

#choose-plan h3 {
  text-align: center;
}

#choose-plan .caption {
  color: #7e828f;
  text-align: center;
}

.title-wrap {
  margin-bottom: 60px;
}

.pricing-blocks {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-card {
  min-height: 500px;
  padding: 34px;
  border-radius: 15px;
  background-color: #fff;
  flex: 1;
  margin-right: 16px;
}

.pricing-card:last-child {
  margin-right: 0;
}

.pricing-card.pricing-shadow {
  box-shadow: 3px 50px 50px -30px rgba(53, 52, 72, 0.21);
}

.type-wrap {
  display: flex;
  margin-bottom: 40px;
}

.option-type {
  display: flex;
  align-items: center;
  flex: 1;
}

.pricing-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 15px;
  background-color: #f7f8ff;
  box-shadow: inset 4px 4px 3px 0 #fff, 0 12px 50px 12px rgba(156, 181, 247, 0.19);
}

.price-wrap {
  display: flex;
  margin-bottom: 20px;
}

.per-month {
  color: #7e828f;
  font-size: 18px;
}

.price-wrap .was-price {
  justify-content: flex-end;
  color: #7e828f;
  text-decoration: line-through;
}

.price-wrap h4 {
  margin: 0;
  font-size: 28px;
  flex: 1;
}

.option-des {
  color: #7e828f;
  margin-bottom: 10px;
}

.option-perks {
  margin: 40px 0 60px 0;
}

.perk {
  font-weight: 500;
  margin-bottom: 16px;
}

.perk img {
  margin-right: 20px;
}

.card-btn a {
  width: 100%;
}

.card-btn button {
  width: 100%;
  justify-content: center;
}
/*----- TESTIMONIAL -----*/
#testimonial {
  padding: 100px 3%;
}
/*----- FAQS -----*/
#faqs {
  padding: 100px 3%;
}

.faqs-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.faqs-wrapper h3 {
  margin-bottom: 60px;
}

.faqs-halves {
  display: flex;
}

.faqs-left, .faqs-right {
  flex: 1;
}

.faqs-left {
  margin-right: 50px;
}

.acc-btn[aria-expanded="true"] .plus-toggle img{
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  -o-transition-property: -o-transform;
  transition-property: transform;
}

.acc-btn[aria-expanded="false"] .plus-toggle img {
-webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  -o-transition-property: -o-transform;
  transition-property: transform;
}
/*----- CTA SECTION -----*/
#cta-section {
  align-items: center;
  justify-content: center;
  min-height: 640px;
  background-color: #4c50b1;
}

.cta-wrapper img {
  max-width: 100%;
  height: 640px;
  object-fit: cover;
  background-size: cover;
  width: 100%;
}

.cta-wrapper {
  position: relative;
}

.cta-content {
  position: absolute;
  margin: 0 auto;
  width: 100%;
  padding: 60px 3%;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-title-wrap {
  max-width: 720px;
}

.cta-title-wrap h2 {
  margin-top: 0px;
  color: #fff;
  margin-bottom: 10px;
  font-size: 49px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.4px;
}

.cta-caption {
  margin-top: 30px;
  color: #fff;
  margin-bottom: 40px;
  font-size: 18px;
  line-height: 1.3;
}

.cta-title-wrap .hero-btn {
  justify-content: center !important;
}
/*----- MEDIA QUERIES -----*/
@media only screen and (max-width: 991px) {
  .spacing {
    padding: 100px 20px !important;
  }

  .hero-design {
    display: none;
  }

  .hero-content {
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .hero-left h2 {
    max-width: 580px;
  }

  .hero-left p {
    margin: 0 auto;
  }

  .hero-btn {
    justify-content: center;
  }

  .hero-btn p {
    margin: 0 0 0 12px;
  }

  .usp-list {
    flex-wrap: wrap;
  }

  .platform-wrapper {
    flex-direction: column;
  }

  .hero-btn.dashboard-btn {
    flex-direction: row;
    justify-content: left;
  }

  .platform-left, .smarter-left, .smarter-right {
    padding: 0;
    margin-right: 0;
    margin-bottom: 36px;
  }
  
  #expenses, #platform, #smarter, #dashboard, #faqs  {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .faqs-wrapper h3 {
    margin-top: 0;
  }

  .smarter-left {
    order: 2;
  }

  .pricing-blocks {
    flex-direction: column;
  }

  .pricing-card {
    margin-right: 0;
    margin-bottom: 41px;
  }

  .pricing-card.pricing-shadow {
    box-shadow: none;
  }

  .pricing-card:last-child {
    margin-bottom: 0;
  }

  .pricing-card.mobile-shadow {
    box-shadow: 3px 50px 50px -30px rgba(53, 52, 72, 0.21);
  }

  .faqs-halves {
    flex-direction: column;
  }

  .faqs-left {
    margin-right: 0px;
  }
}

@media only screen and (max-width: 767px) {
  .hero-btn {
    flex-direction: column;
  }

  .hero-btn p {
    margin: 20px 0 0 0 !important;
  }

  #expenses, #platform, #smarter, #dashboard, #testimonial {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .platform-right {
    padding: 0;
  }

  .platform-left, .smarter-left {
    padding: 0;
    margin-right: 0;
  }
}

@media only screen and (max-width: 479px) {
  .pricing-card {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
