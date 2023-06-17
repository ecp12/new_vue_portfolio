<script>
export default {
  mounted() {
    this.writeDefaultValuesTerminal();
  },
  methods: {
    writeDefaultValuesTerminal() {
      const textarea = this.$refs.textarea;
      const testString =
        "Last Login: jun 14 22:37:00 on Portfolio \n$Bienvenid@s_a _mi _portfolio! ~ %\n$cd/Soy_Erick_Crespin...10% \n$y aunque esta no sea una terminal de verdad...30% \n$esta pagina web si es de verdad...40% \n$te invito a que eches un pequeño vistazo...50% \n$en ella encontraras algunos proyectos en los que e trabajado...70% \n$...:)...100%.";

      let counter = 0;

      const typingInterval = setInterval(() => {
        textarea.value += testString[counter];
        counter++;

        if (counter >= testString.length) {
          clearInterval(typingInterval);
        }
      }, 50);
    },
  },
};
</script>

<template>
    <div class="home">
     <div class="app">
      <div class="title-bar">
        <button class="close"></button>
        <button class="minimize"></button>
        <button class="maximize"></button>
      </div>
      <textarea class="textarea" ref="textarea"></textarea>
     
    </div>
   
    <div class="sunset">
      <div class="mirage"></div>
    </div>
  </div> 
 
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /*
  --bgcolor: rgb(200, 100, 50);
  --sunset-bgcolor: rgb(100, 50, 200);
  */
  --bgcolor: rgb(10, 10, 10);
  --sunset-bgcolor: rgb(10, 10, 10);

  --sunset-size: 450px;

  --g1: rgb(232, 189, 59);
  --g2: rgb(232, 119, 39);
  --g3: rgb(219, 76, 70);
  --g4: rgb(175, 55, 54);
  --g5: rgb(79, 49, 91);
  --g6: rgb(61, 28, 73);

  --title-bar: #777676e3;
  --body-color: #111111;
  --text-color: white;
  --minimize-button: #ffbd44;
  --maximize-button: #00ca4e;
  --close-button: #ff605c;
}

.home{
 
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
 background-color: var(--bgcolor);
  background: repeating-linear-gradient(
    to bottom,
    var(--bgcolor),
    var(--bgcolor) 49%,
    var(--sunset-bgcolor) 51%,
    var(--sunset-bgcolor) 100%
  );
  background-size: cover !important;
}

.sunset {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 0;
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
  margin-top:230px ;
  position:relative;
  bottom: 0;
  z-index: 0;
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
  animation: kf-bgpan 18s linear infinite;
  
}

@-moz-keyframes kf-bgpan {
  0% {
    background-position: 50% 100%;
  }

  100% {
    background-position: 50% 0%;
  }
}

@-webkit-keyframes kf-bgpan {
  0% {
    background-position: 50% 100%;
  }

  100% {
    background-position: 50% 0%;
  }
}

@keyframe kf-bgpan {
  0% {
    background-position: 50% 100%;
  }

  100% {
    background-position: 50% 0%;
  }
}

.app {
  position: absolute;
  z-index: 1;
  margin: 10px;
  display: flex;
  flex-direction: column;
 
}

.terminal {
  width: 60%;
  height: 40%;
  margin: 10px;
  padding: 10px;
  -webkit-animation: fadeup 2s;
  /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s;
  /* Firefox < 16 */
  -ms-animation: fadein 2s;
  /* Internet Explorer */
  -o-animation: fadein 2s;
  /* Opera < 12.1 */
  animation: fadein 2s;
}

textarea {
  color: #ffffff;
  border: none ;
  overflow: hidden ;
  outline: none ;
  -webkit-box-shadow: none ;
  -moz-box-shadow: none ;
  box-shadow: none ;
  resize: none ;
  background-color: #383838eb ;
  font-family: "fira-mono", "PT Sans Mono", "Monaco", "Iconsolas",
    "Droid Sans Mono", monospace;
  font-size: 20px;
  border-radius: 0 0 10px 10px;
  padding: 10px;
  height: 350px;
  width: 600px;

  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
}

.title-bar,
.window-footer {
  background: var(--title-bar);
}
.title-bar {
  border-radius: 5px 5px 0 0;
  padding: 2px 0.1px 8px;
  z-index: 10;
  cursor: move;
}
.window-footer {
  width: 93.5%;
  border-radius: 0 0 5px 5px;
  padding: 2px 3.25% 6px;
  font-size: 12px;
}
.title-bar div {
  display: inline-block;
}
.title-bar button {
  padding: 6px;
  border-radius: 8px;
  border: none;
  margin: 0 3px;
  cursor: pointer;
}
.close {
  background: var(--close-button);
  margin-left: 10px !important;
}
.minimize {
  background: var(--minimize-button);
}
.maximize {
  background: var(--maximize-button);
}
.window-body {
  width: 96%;
  height: 50vh;
  border: 0;
  margin: 0;
  padding: 2%;
  background: var(--body-color);
  resize: none;
  color: var(--text-color);
  overflow-y: scroll;
}
/* Let's get this party started */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 0, 0, 0.4);
}
</style>
