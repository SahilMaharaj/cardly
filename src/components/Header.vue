<template>
    <div class="header-wrapper">
        <div class="navigation">
            <header>
                <div class="logo">
                    <a @click.prevent="$scrollTo('#hero')"> 
                        <g-image width="140" src="~/assets/images/cardly-logo.svg"></g-image>
                    </a>
                </div>
                <input type="checkbox" id="nav-toggle" class="nav-toggle" />
                    <nav>
                        <ul class="menu">
                            <li><a @click.prevent="$scrollTo('#expenses')">Features</a></li>
                            <li><a @click.prevent="$scrollTo('#choose-plan')">Pricing</a></li>
                            <li><a @click.prevent="$scrollTo('#faqs')">FAQ</a></li>
                            <li><a @click.prevent="$scrollTo('#cta-section')">Contact</a></li>
                        </ul>
                    </nav>
                <label for="nav-toggle" class="nav-toggle-label">
                    <span>&#9776;</span>
                </label>
                <div class="header-cta-btn">
                    <a class="header-cta" href="#">Contact Us</a>
                </div>
            </header>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
/*----- DESKTOP -----*/
.header-wrapper {
    position: sticky;
    top: 0;
    z-index: 9999;
}

.logo a {
    margin-right: 40px;
    cursor: pointer;
}
    
.navigation {
    padding: 25px 3%;
    background-color: #fff;
    width: 100%;
    z-index: 9999;
    border-bottom: 1px solid #f8f9fd;
}

header {
    max-width: 1200px;
    margin:0 auto;
    display: flex;
    align-items: center;
}

.hamburger {
    margin: 0;
    order: 3;
    display: none;
}

.nav-toggle {
    display: none;
}

.nav-toggle-label {
    margin: 0;
    display: none;
    background-color: rgba(126, 130, 143, 0.1);
    border-radius: 4px;
    padding: 16px 21px;
    cursor: pointer;
}

.nav-toggle-label span {
    font-weight: bold;
}

.nav-toggle:checked ~ nav {
    transform: scale(1, 1);
}

.nav-toggle:checked ~ .nav-toggle-label {
    background-color: #19ceaf;
}

.nav-toggle:checked ~ .nav-toggle-label span {
    color: #fff;
}

nav {
    flex: 1;
}

.menu {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
}

.menu li a {
    color: #353448;
    padding-right: 16px;
    padding-left: 16px;
    opacity: 0.8;
    transition: opacity 200ms ease;
    font-size: 15px;
    font-weight: 500;
    text-transform: none;
    text-decoration: none;
    cursor: pointer;
}

.menu li a:hover {
    color: #28224b;
    opacity: 1;
    text-decoration: none;
}

.header-cta {
    padding: 12px 25px;
    border-radius: 4px;
    background-color: #757ae9;
    text-align: center;
    color: #fff;
    display: inline-block;
    text-decoration: none;
}

.header-cta:hover {
    text-decoration: none;
}
/*----- MEDIA QUERIES -----*/
@media all and (max-width : 991px) {
    .header-wrapper {
        position: relative !important;
    }
    
    .header-cta {
        display: none;
    }

    .menu li {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .menu li a {
        opacity: 0;
    }

    .nav-toggle:checked ~ nav .menu li a {
        opacity: .8;
    }

    .menu li a:hover {
        opacity: 1 !important;
    }

    .logo {
        flex: 1;
    }

    .nav-toggle-label {
        display: block;
    }

    nav {
        position: absolute;
        text-align: left;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #fff;
        z-index: 9999;
        box-shadow: 0 50px 80px -30px rgba(53, 52, 72, 0.2);
        transform: scale(1, 0);
        transform-origin: top;
        transition: transform 400ms ease 0s;
    }

    .menu {
        flex-direction: column;
    }
}
@media all and (max-width : 767px) {
    .logo a {
        padding-left: 10px;
    }
}
</style>