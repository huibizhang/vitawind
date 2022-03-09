<template>
  <div id="hp">
    <img id="logo" :src="$withBase(logoPath)" />
    <h1 style="font-size: 40px">
      Vitawind
      <span
        class="inline-block rounded-lg bg-gradient-to-br from-blue-400 to-green-400 px-1.5 py-0.5 text-lg text-white"
      >
        next
      </span>
    </h1>
    <span
      style="
        font-size: 20px;
        color: #aaaaaa;
        display: block;
        margin: 5px 0 10px 0;
      "
      >The Lightning Wind , Stronger and Faster.</span
    >
    <p align="center">
      <span style="display: flex; gap: 5px">
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
  </div>
  <br />
</template>

<script>
import MyButton from "./MyButton.vue";

export default {
  name: "Vitawind",
  data() {
    return {
      logoPath: "logo-w700.png",
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
  height: 100%;
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
