<template>
    <div class="footer">
        <div class="footer-wrapper">
            <div class="footer-left">
                <g-image class="footer-logo" width="140" src="~/assets/images/cardly-logo.svg"></g-image>
                <p>Simple. Stressfree. Payments</p>
                <ul class="footer-social">
                    <li><a class="social-bkg" href="#"><g-image src="~/assets/images/slack-icon.png"></g-image></a></li>
                    <li><a class="social-bkg" href="#"><g-image src="~/assets/images/twitter-social.png"></g-image></a></li>
                    <li><a class="social-bkg" href="#"><g-image src="~/assets/images/youtube-social-icon.png"></g-image></a></li>
                </ul>
            </div>
            <div class="footer-right">
                <div class="footer-right-one">
                    <div class="footer-col-title">Company</div>
                    <ul class="footer-col-items">
                        <li>Home</li>
                        <li><a @click.prevent="$scrollTo('#expenses')">Features</a></li>
                        <li><a @click.prevent="$scrollTo('#choose-plan')">Pricing</a></li>
                        <li><a @click.prevent="$scrollTo('#cta-section')">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-right-two">
                    <div class="footer-col-title">Template</div>
                    <ul class="footer-col-items">
                        <li>Style Guide</li>
                        <li>License</li>
                        <li>Changelog</li>
                    </ul>
                </div>
               <div class="footer-right-three">
                    <div class="footer-col-title">Contact</div>
                    <ul class="footer-col-items">
                        <li>info@yourwebsite.com</li>
                        <li>(+61) 0000 0000</li>
                    </ul>
                </div>
            </div>
        </div>
        <back-to-top class="btt-btn" visibleoffset="200"><g-image src="~/assets/images/chevron.png"></g-image></back-to-top>
        <div class="footer-legal">
            Copyright &copy; Flowbase | Powered by Gridsome
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .footer {
        padding: 100px 3% 60px;
    }

    .footer-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
    }

    .footer-left, .footer-right {
        flex: 1;
    }

    .footer-logo {
        margin-bottom: 25px;
    }

    .footer-left p {
        margin-bottom: 10px;
    }

    .footer-social {
        padding: 0;
        list-style: none;
        display: flex;
        margin-top: 20px;
    }

    .footer-social li {
        margin-right: 12px;
    }

    .footer-social li:last-child {
        margin-right: 0;
    }

    .footer-social li a img {
        width: 100%;
    }

    .social-bkg {
        width: 34px;
        border-radius: 100px;
        background-color: #757ae9;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer-right {
        display: flex;
    }

    .footer-right-one, .footer-right-two {
        margin-right: 16px;
    }

    .footer-right-one, .footer-right-two, .footer-right-three {
        flex: 1;
    }

    .footer-col-title {
        margin-bottom: 20px;
        color: #28224b;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 1.5px;
        text-transform: uppercase;
    }

    .footer-col-items {
        padding: 0;
        list-style: none;
    }

    .footer-col-items li {
        margin-bottom: 12px;
        padding: 8px 6px 8px 0;
        line-height: 1;
    }

    .footer-col-items li a {
        color: #353448;
        text-decoration: none;
        cursor: pointer;
    }

    .footer-col-items li a:hover {
        text-decoration: none;
    }

    .footer-legal {
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 100px;
        padding-top: 55px;
        border-top: 1px solid rgba(0, 0, 0, 0.07);
        font-size: 15px;
    }
    /*----- MEDIA QUERIES -----*/
    @media only screen and (max-width: 767px) {
        .footer-wrapper {
            flex-direction: column;
        }

        .footer-right {
            margin-top: 20px;
        }
    }

    @media only screen and (max-width: 500px) {
        .footer-right {
            flex-direction: column;
        }

        .footer-right-two {
            margin: 20px 0;
        }
    }
</style>