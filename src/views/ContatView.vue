<template>
  <div class="contat">
    <div class="card">
      <div class="emoticonos">
        <img class="emoti" src="../assets/github.png" alt="">
        <a style="color: black;" href="https://github.com/ecp12">Mi github</a>
      </div>
      <div class="emoticonos">
        <img class="emoti" src="../assets/linkedin.png" alt="">
        <a style="color: black;" href="https://www.linkedin.com/in/erick-crespin-b80a9a9b">Mi linkedin</a>
      </div>
      <div class="emoticonos">
        <img class="emoti" src="../assets/llamada.png" alt="">
        <p>+34 684001226</p>
      </div>
      <div class="emoticonos">
        <img class="emoti" src="../assets/email.png" alt="">
        <p>erickandrescrespin@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<style>
.contat {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/sol.jpg);
  background-size: cover;
}
.card {
  position: relative;
  z-index: 2;
  background: rgba(253, 253, 253, 0.725);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(28, 23, 67, 0.3);
  height: 600px;
  width: 620px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}

.emoticonos{
  display: flex;
  flex-direction: row;
  margin-left: 100px;
  align-items: center;
  text-align: center;
  font-family: monospace;
  font-size: 24px;
  font-weight: 700;
  color: black;
}

.emoti{
  height: 60px;
  margin: 10px; 
  margin-right: 30px;
}
</style>
