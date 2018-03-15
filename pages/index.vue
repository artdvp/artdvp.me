<template>
  <div class="container" id="firstP">
    <div class="p_title"> 
      <div>
        <nuxt-link to="/about"><label class="p_lab">Artdvp</label></nuxt-link>
        <nuxt-link to="/love"><label class="p_lab p_heart">❤</label></nuxt-link>
        <nuxt-link to="/js-world"><label class="p_lab"><b class="p_js">JS</b></label></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  head: {
    script: [
      {
        src: ""
      }
    ]
  },
  components: {
    Logo
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #ddd;
}
</style>


<style scoped>
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

* {
  box-sizing: border-box;
}
header {
  font-size: 30px;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.p_flex {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}
.p_lab {
  padding: 5px;
}

a {
  text-decoration: none;
  color: black;
}

.p_heart {
  opacity: 0.8;
  color: red;
}

.p_js {
  padding: 5px 0px 0px 8px;
  background-color: #f7df1e;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  border: 1px solid #f7df1e;
  box-shadow: 0 2px 2px #aaa;
}

.p_title {
  font-family: "Montserrat", sans-serif;
  display: flex;
  font-size: 25px;
  width: 250px;
  height: 120px;
  padding: 8px;
  border: 1px solid #ccc;
  margin: 10px;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  text-align: center;
  font-weight: bold;
  text-shadow: 0 -1px 1px #000;
  box-shadow: 0 2px 2px #aaa; /*2px 2px 3px rgba(0,0,0,0.28);*/
  background-color: white;
  /*     background-image: linear-gradient(20deg, rgba(255,255,255,0.8) 0%, #fff 50%, rgba(255,255,255,0.8)); 
      box-shadow: 15px 15px 0 rgba(0,0,0,0.2);
    margin: 4rem 0;
    padding: 4rem;
  */
}

canvas {
  display: block;
  vertical-align: bottom;
}
/* ---- particles.js container ---- */

#firstP {
  /* position: absolute; */
  /* width: 100%;
  height: 100%;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%; */
}
</style>
