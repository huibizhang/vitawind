<template>
  <div id="hp">
    <img id="logo" :src="logoPath" />
    <h1 style="font-size:40px;">Vitawind</h1>
    <span style="font-size:20px;color:#AAAAAA;display:block;margin:5px 0 10px 0;">The Lightning Wind , Stronger and Faster.</span>
    <p align="center">
      <span style="display:flex;gap:5px;">
        <a href="https://npmjs.com/package/vitawind"
          ><img
            src="https://img.shields.io/npm/v/vitawind?style=flat-square"
            alt="version"
        /></a>
        <a href="https://nodejs.org/en/about/releases/"
          ><img
            src="https://img.shields.io/node/v/vitawind?style=flat-square"
            alt="node version"
        /></a>
        <a href="https://npmjs.com/package/vitawind"
          ><img
            src="https://img.shields.io/npm/dw/vitawind?style=flat-square"
            alt="npm-download"
        /></a>
      </span>
    </p>
    <div style="margin-top:1rem;">
      <MyButton :url="url" />
    </div>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";

export default {
  name: "HomePage",
  data() {
    return {
      logoPath: "/logo-w700.png",
      url: "/guide/",
    };
  },
  components: {
    MyButton,
  },
};
</script>

<style>
#hp {
  width: 100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color:#DDDDDD; */
}

#logo {
  width: 250px;
  height: 250px;
  object-fit: contain;
}
</style>
