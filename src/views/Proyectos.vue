<script></script>
<template>
  <div class="proyects">
    <div class="container" data-aos="flip-right">
      <div class="carousel-frame">
        <input
          type="radio"
          name="slider"
          class="carousel-radio"
          id="item-1"
          checked
        />
        <label for="item-1" class="carousel-item" style="">
          <img class="imgScroll" src="../assets/Gentis.png" />
          <div class="description">
            <div class="descripConte">
              <h1 class="titul">Proyecto Gentis</h1>
              <p class="paragraft">
                Un proyecto de aproximadamente un mes que se realizo para cubrir
                las nesececidades básicas de la fundación, que era él ser mas
                accesibles para las personas en cuanto a las busqueda de cursos.
              </p>
              <a class="button" href="https://github.com/Gentis-Team/Gentis-formacion-client">Ver en Github</a>
            </div>
          </div>
        </label>
        <input type="radio" name="slider" class="carousel-radio" id="item-2" />
        <label for="item-2" class="carousel-item" style="">
          <img class="imgScroll" src="../assets/Reloj.gif" />
          <div class="description">
            <div class="descripConte">
              <h1 class="titul">Reloj-Js</h1>
              <p class="paragraft">
                Proyecto realizado con js con el fin de practicar y crear un
                    reloj que funcione correctamente.
              </p>
              <a class="button" href="https://github.com/ecp12/RelojJs">Ver en Github</a>
            </div>
          </div>
        </label>
        <input type="radio" name="slider" class="carousel-radio" id="item-3" />
        <label for="item-3" class="carousel-item" style="">
          <img class="imgScroll" src="../assets/dillons.png" />
          <div class="description">
            <div class="descripConte">
              <h1 class="titul">eCommerce Dillons</h1>
              <p class="paragraft">
                El Proyecto eCommerce Dillons pretendia crear una web de
                    supermercado la cual tubiera como objetivo ser accesible a las
                    personas desde cualquier dispositivo.
              </p>
              <a class="button" href="https://github.com/ecp12/ecommerce">Ver en Github</a>
            </div>
          </div>
        </label>
        <input type="radio" name="slider" class="carousel-radio" id="item-4" />
        <label for="item-4" class="carousel-item" style="">
          <img class="imgScroll" src="../assets/Music.gif" />
          <div class="description">
            <div class="descripConte">
              <h1 class="titul">toquem el Dom</h1>
              <p class="paragraft">
               En este proyecto, se desarolló una página web con el objetivo de aprender a tocar instumentos y practicar. Diseñamos la página para el isntrumento de piano a través de un teclado digital.
              </p>
              <a class="button" href="https://github.com/ecp12/Tocar-El-Dom">Ver en Github</a>
            </div>
          </div>
        </label>
        <input type="radio" name="slider" class="carousel-radio" id="item-5" />
        <label for="item-5" class="carousel-item" style="">
          <img class="imgScroll" src="../assets/Sky.png" />
          <div class="description">
            <div class="descripConte">
              <h1 class="titul">AboveTheSky</h1>
              <p class="paragraft">
                Proyecto que se realizó en la hackathon organizada por
                    caixabank-tech, la cual tenia como objetivo realizar una
                    eCommerce.
              </p>
              <a class="button" href="https://github.com/ecp12/AboveTheSky">Ver en Github</a>
            </div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --width: 60%;
  --scale: 60%;
}

.proyects {
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url(../assets/purple.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.container {
  margin-top: 60px;
  width: 80%;
  height: 90%;
}

.carousel-frame {
  margin-top: 120px;
  width: 100%;
  height: 70%;
  transition: background 0.4s ease-in;
  overflow: hidden;
  position: absolute;
  font-size: 0;
}

.imgScroll {
  width: 90%;
  height: 100%;
  object-fit: unset;
  border-radius: 20px;
}

.description {
  width: 90%;
  height: 40.5%;
  color: rgb(0, 0, 0);
  margin-top: -250px;
  background: rgba(255, 255, 255, 0.592);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  object-fit: unset;
  text-decoration: none;
  font-family: monospace;
}

.descripConte {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 20px;
}
.titul {
  font-size: 35px;
}

.paragraft {
  font-size: 20px;
  font-weight: 900;
  margin-top: 20px;
}

.button{
  margin-top: 30px;
  background-color: rgb(255, 255, 255) ;
  padding: 10px;
  font-size: 20px;
  font-weight: 900;
  border-radius: 20px;
  border: 3px solid transparent;
  border-radius: 8px;
  background: #ffffff;
  background-clip: padding-box;
  color: #010101;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
}

button::after {
  position: absolute;
  background: linear-gradient(to right, #E8A333,#D84B45);
  content: '';
  z-index: -1;
  border-radius: 20px;
  
}

.button:hover {
  color: #ffffff;
  background: linear-gradient(to right, #E8A333,#D84B45);
  background-size: 104%;
  background-position: -4px;
}

.carousel-radio {
  display: none;
}

.carousel-radio:checked + label {
  cursor: unset;
  top: 0%;
  left: calc((100% - var(--width)) / 2);
  margin-left: 0%;
  margin-right: 0%;
  width: var(--width);
  height: 100%;
  transform: translate(0) scale(1);
}

.carousel-radio:checked + label ~ label {
  left: calc(var(--width) + (100% - var(--width)) / 2);
  margin-left: calc(var(--width) * -1);
  margin-right: var(--width);
}

.carousel-item {
  display: inline-block;
  width: calc((100% - var(--width)) / 2);
  height: 100%;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  position: relative;
  left: var(--width);
  margin-left: calc(var(--width) * -1);
  margin-right: calc(var(--width) - (100% - var(--width)) / 2);
  transform: translate(0) scale(var(--scale));
  overflow: hidden;
  padding: 0px;
  font-size: initial;
}
</style>
