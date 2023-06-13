<script setup>

</script>

<template>
  <main>
   <div class="sunset">
    <div class="mirage">
    
    </div>
  </div>
  </main>
</template>
<style>
:root {
  /*
  --bgcolor: rgb(200, 100, 50);
  --sunset-bgcolor: rgb(100, 50, 200);
  */
  --bgcolor: rgb(10, 10, 10);
  --sunset-bgcolor: rgb(10, 10, 10);
  
  --sunset-size: 150px;
  
  --g1: rgb(232, 189, 59);
  --g2: rgb(232, 121, 39);
  --g3: rgb(219, 76, 70);
  --g4: rgb(175, 55, 54);
  --g5: rgb(79, 49, 91);
  --g6: rgb(61, 28, 73);
}
main {
margin: 0px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  
  /*background-color: var(--bgcolor);*/
  background: repeating-linear-gradient(
    to bottom,
    var(--bgcolor),
    var(--bgcolor) 49%,
    var(--sunset-bgcolor) 51%,
    var(--sunset-bgcolor) 100%
  );
}

.sunset {
  position: relative;
  
  width: var(--sunset-size);
  height: var(--sunset-size);
  
  background: linear-gradient(
    to bottom,
    var(--g1),
    var(--g2),
    var(--g3),
    var(--g4),
    var(--g5),
    var(--g6)
  );
  
  background-clip: border-box;
  
  border-radius: var(--sunset-size);
  
  
}

.sunset:before {
  content: "";
  background: var(--bgcolor);
}

.mirage {
  position: absolute;
  
  bottom: 0;
  z-index: 2;
  
  width: 100%;
  height: 50%;
  
  border-radius: 0px 0px var(--sunset-size) var(--sunset-size);
  
  box-sizing: border-box;
  
  background: repeating-linear-gradient(
    to bottom,
    transparent,
    transparent 5px,
    var(--sunset-bgcolor) 10px,
    var(--sunset-bgcolor) 15px
  );
  
  background-size: 100% 200%;
  background-position: 50% 100%;
  
  animation: kf-bgpan 5s linear infinite;
}
@-moz-keyframes kf-bgpan {
  0% { background-position: 50% 100%; }
  100% { background-position: 50% 0%; }
}
@-webkit-keyframes kf-bgpan {
  0% { background-position: 50% 100%; }
  100% { background-position: 50% 0%; }
}
@keyframe kf-bgpan {
  0% { background-position: 50% 100%; }
  100% { background-position: 50% 0%; }
}
 

</style>