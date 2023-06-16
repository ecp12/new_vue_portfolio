<script>


</script>
<template>
  <div class="proyects">
    <div class="container" data-aos="flip-right">
     
         <div class="carousel-frame">
          <input type="radio" name="slider" class="carousel-radio" id="item-1" checked>
          <label for="item-1" class="carousel-item" style="">
            <img src="https://steaming-animals.de/wp-content/uploads/2022/11/white-noise-machine-cover-richtige-quali-scaled.jpg">
          </label>
          <input type="radio" name="slider" class="carousel-radio" id="item-2">
          <label for="item-2" class="carousel-item" style="">
            <img src="https://steaming-animals.de/wp-content/uploads/2022/11/feral_side_steaming_animals_single_cover_3000mal3000px-scaled.jpg">
          </label>
          <input type="radio" name="slider" class="carousel-radio" id="item-3">
          <label for="item-3" class="carousel-item" style="">
            <img src="https://steaming-animals.de/wp-content/uploads/2022/11/20.01.2021_finales_Cover_DAYBLOOMER-scaled.jpg">
          </label>
          <input type="radio" name="slider" class="carousel-radio" id="item-4">
          <label for="item-4" class="carousel-item" style="">
            <img src="https://steaming-animals.de/wp-content/uploads/2022/11/20.01.2021_finales_Cover_CLOUDED_LIGHT-scaled.jpg">
          </label>
          <input type="radio" name="slider" class="carousel-radio" id="item-5">
              <label for="item-5" class="carousel-item" style="">
                <img src="https://steaming-animals.de/wp-content/uploads/2022/11/20.01.2021_finales_Cover_CLOUDED_LIGHT-scaled.jpg">
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
        --width: 30%;
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
.container{
    margin-top: 60px;
    width: 100%;
     height: 90%;
}


.carousel-frame {
        margin-top: 120px;
        width: 100%;
        height: 70%;
        transition: background .4s ease-in;
        overflow: hidden;
        position: absolute;
        font-size: 0;
      }
      

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .carousel-radio {
        display: none;
      }

      .carousel-radio:checked + label {
        cursor: unset;
        top: 0%;
        left: calc((100% - var(--width))/2);
        margin-left: 0%;
        margin-right: 0%;
        width: var(--width);
        height: 100%;
        transform: translate(0) scale(1);
      }

      .carousel-radio:checked + label ~ label {
        left: calc(var(--width) + (100% - var(--width))/2);
        margin-left: calc(var(--width) * -1);
        margin-right: var(--width);

      }

      .carousel-item {
        display: inline-block;
        width: calc((100% - var(--width))/2);
        height: 100%;
        transition: all 0.25s ease-in-out;
        cursor: pointer;
        position: relative;
        left: var(--width);
        margin-left: calc(var(--width) * -1);
        margin-right: calc(var(--width) - (100% - var(--width))/2);
        transform: translate(0) scale(var(--scale));
        overflow: hidden;
        padding: 0px;
        font-size: initial;
      }



</style>
