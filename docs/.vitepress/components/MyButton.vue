<template>
  <a :href="url">
    <button class="myBtn">Getting Started</button>
  </a>
</template>

<script>
export default {
  name: "MyButton",
  props:['url'],
};
</script>

<style>
.myBtn {
  max-width: 200px;
  box-sizing: border-box;
  padding: 15px 25px 15px 25px;
  border-radius: 8px;
  border: none;
  background-color: #00a4af;
  font-size: 120%;
  font-weight: bold;
  color: white;
  transition: all 0.3s;
}
.myBtn:hover {
  background-color: #00b469;
  transition: all 0.3s;
}
</style>
