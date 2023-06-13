<script setup>
import { RouterLink, RouterView } from 'vue-router';


</script>
<template>
    <nav class="nav">
        <div class="contentNav">
            <div class="logo"><img style="height: 70px;width: 70px;" src="./icons/Miproyect.png" alt=""></div>
            <div class="links">
                <div class="link">
                    <RouterLink class="router" to="/">Home</RouterLink>
                </div>
                <div class="link">
                    <RouterLink class="router" to="">Contacto</RouterLink>
                </div>
                <div class="link"> <a class="router" href="src/assets/ERICKCV4.1.2.pdf" download>Descargar archivo</a></div>

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
    background: rgba(255, 255, 255, 0.14);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.1px);
    -webkit-backdrop-filter: blur(6.1px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    position: fixed;
    z-index: 3;
    min-width: 100%;

}

.contentNav{
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
    margin-left: 30px;
    font-size: 20px;
    transition: 1s ease;
}

.router {
    text-decoration: none;
    color: black;

}

.link:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 1s ease;
}
</style>