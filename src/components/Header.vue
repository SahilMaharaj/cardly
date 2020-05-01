<template>
    <div class="header-border">
        <header class="layout">
            <b-navbar toggleable="lg" type="dark">
                <b-navbar-brand>
                    <a @click.prevent="$scrollTo('#hero')"> <g-image width="140" src="~/assets/images/cardly-logo.svg"></g-image></a>
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse" class="hamburger">&#9776;</b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <li><a @click.prevent="$scrollTo('#expenses')" >Features</a></li>
                    <li><a @click.prevent="$scrollTo('#choose-plan')">Pricing</a></li>
                    <li><g-link to="">FAQ</g-link></li>
                    <li><g-link to="">Contact</g-link></li>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto contact-btn">
                    <li><g-link class="desktop-contact" to="">Contact Us</g-link></li>             
                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
         </header>
    </div>
</template>

<style scoped>
    .layout {
        max-width: 1200px;
        margin: 0 auto;
     }

     .header-border {
        border-bottom: 1px solid #f8f9fd;
        position: sticky;
        top: 0px;
        background-color: #fff;
        z-index: 99999;
     }
    
    header {
        padding: 25px 0;
    }

    .navbar-brand {
        margin-right: 2.5rem;
        cursor: pointer;
    }

    .navbar {
        padding: 0;
    }

    .navbar-nav a {
        padding: 15px;
        opacity: 0.8;
        -webkit-transition: opacity 200ms ease;
        transition: opacity 200ms ease;
        color: #353448;
        font-size: 15px;
        font-weight: 500;
        cursor: pointer;
    }

    .navbar-nav a:hover {
        text-decoration: none;
        opacity: 1;
        color: #28224b;
    }

    .desktop-contact {
        padding: 13px 25px !important;
        border-radius: 4px;
        background-color: #757ae9;
        text-align: center;
        color: #fff !important;
        opacity: 1 !important;
        font-size: 16px !important;
    }

    .navbar-toggler {
        background-color: rgba(126, 130, 143, 0.1);
        padding: 16px;
    }

    .hamburger {
        color: #353448 !important;
        font-weight: bold;
    }
    /*----- MEDIA QUERIES -----*/
    @media only screen and (max-width: 991px) {
        .navbar-dark .navbar-toggler {
            margin-right: 20px;
        }
        
        .navbar-nav li {
            padding: 20px 0;
        }

        .contact-btn {
            display: none;
        }

        #nav-collapse {
            background-color: #fff;
            box-shadow: 0 50px 80px -30px rgba(53, 52, 72, 0.2);
        }

       .navbar-toggler[aria-expanded="true"] {
            background-color: #19ceaf !important;
            color: #fff !important;
            font-weight: bold;
        }

        .header-border {
            position: relative;
        }
    }

    @media only screen and (max-width: 1200px) {
        .navbar-brand {
            margin-left: 3%;
        }

        .contact-btn {
            margin-right: 3%;
        }
    }
</style>