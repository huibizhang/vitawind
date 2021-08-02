<template>
  <div id="hp">
    <img id="logo" :src="logoPath" />
    <h1 style="font-size: 40px">create-vitawind</h1>
    <span
      style="
        font-size: 20px;
        color: #aaaaaa;
        display: block;
        margin: 5px 0 10px 0;
      "
      >Scaffolding for your tailwind project</span
    >
    <p align="center">
      <span style="display: flex; gap: 5px">
        <a href="https://npmjs.com/package/create-vitawind"
          ><img
            src="https://img.shields.io/npm/v/create-vitawind?style=flat-square"
            alt="version"
        /></a>
        <a href="https://nodejs.org/en/about/releases/"
          ><img
            src="https://img.shields.io/node/v/create-vitawind?style=flat-square"
            alt="node version"
        /></a>
        <a href="https://npmjs.com/package/create-vitawind"
          ><img
            src="https://img.shields.io/npm/dw/create-vitawind?style=flat-square"
            alt="npm-download"
        /></a>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "CreateVitawind",
  data() {
    return {
      logoPath: "/vitawind_pack.svg",
      url: "/scaffolding/",
    };
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
