<script setup>


</script>
<template>
    <nav class="nav">
        <div class="contentNav">
            <div class="logo"><img style="height: 70px;width: 70px;" src="./icons/Miproyect.png" alt=""></div>
            <div class="links">
                <div class="link">
                    <router-link class="router" to="/">Home</router-link>
                </div>
                <div class="link">
                    <router-link class="router" to="/contat">Contacto</router-link>
                </div>
                <div class="link"> <a class="router" href="../../src/assets/23CVERICK.pdf" download="23CVERICK">Descargar CV</a></div>

            </div>
        </div>
    </nav>
</template>
<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    border: none;
    outline: none;
}

.nav {
    position: fixed;
    z-index: 3;
    min-width: 100%;
    background: rgba(255, 255, 255, 0.09);
    border-radius: 0 0 16px 0;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.3px);
    -webkit-backdrop-filter: blur(10.3px);
    
}

.contentNav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
}

.links {
    display: flex;
    justify-content: space-around;
}

.link {
    margin-left: 80px;
    font-size: 25px;
    transition: 1s ease;
}

.link:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 1s ease;
}
.router {
    text-decoration: none;
    color: white;
    Font-family: monospace;
}


</style>