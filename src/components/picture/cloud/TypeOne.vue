<template>
  <div class="cloud-type-one" :style="'zoom:' + zoom">
    <div class="circle-left-box">
      <div class="circle-left"></div>
    </div>
    <div class="circle-middle-box">
      <div class="circle-middle"></div>
    </div>
    <div class="circle-right-box">
      <div class="circle-right"></div>
    </div>
    <div class="bottom-line bottom-line-one"></div>
    <div class="bottom-line bottom-line-two"></div>
    <div class="bottom-line bottom-line-three"></div>
    <div class="bottom-line bottom-line-four"></div>
    <div class="bottom-line bottom-line-five"></div>
    <div class="bottom-line bottom-line-six"></div>
    <div class="bottom-line bottom-line-seven"></div>
    <div class="bottom-line bottom-line-eight"></div>
    <div class="bottom-line bottom-line-neight"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps({
  height: String,
});
/**
 * @description 根据height计算图片的zoom
 * @param height props属性
 */
const getZoom = (height: string | undefined) => {
  if (height == undefined) return 1;
  const index = height.indexOf("px");
  let finalHeight: string = "";
  if (index !== -1) {
    finalHeight = height.substring(0, index);
  }
  return parseInt(finalHeight) / 118;
};
const zoom = ref(1);
zoom.value = getZoom(props.height);
console.log(
  "%c [ zoom ]-45",
  "font-size:13px; background:pink; color:#bf2c9f;",
  zoom.value
);
</script>

<style lang="scss" scoped>
$cloud-color: #b0c4de;
.cloud-type-one {
  height: 118px;
  width: 296px;
  .circle-left-box {
    position: absolute;
    top: 25px;
    left: 0;
    width: 110px;
    height: 70px;
    border-radius: 0 0 80% 0;
    overflow: hidden;
    .circle-left {
      width: 100px;
      height: 120px;
      border-radius: 50%;
      border: 5px solid $cloud-color;
    }
  }
  .circle-middle-box {
    position: absolute;
    top: 0;
    left: 70px;
    width: 120px;
    height: 50px;
    border-radius: 0 0 0 50%;
    overflow: hidden;
    .circle-middle {
      position: absolute;
      left: -10px;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 5px solid $cloud-color;
    }
  }
  .circle-right-box {
    position: absolute;
    top: 38px;
    left: 182px;
    width: 100px;
    height: 50px;
    border-radius: 0 0 0 100%;
    overflow: hidden;
    .circle-right {
      position: absolute;
      left: -20px;
      width: 80px;
      height: 100px;
      border-radius: 50%;
      border: 5px solid $cloud-color;
    }
  }
  .bottom-line {
    position: absolute;
    height: 0;
    border: 3px solid $cloud-color;
  }
  .bottom-line-one {
    top: 92px;
    left: 0;
    width: 40px;
  }
  .bottom-line-two {
    top: 92px;
    left: 60px;
    width: 10px;
  }
  .bottom-line-three {
    top: 92px;
    left: 90px;
    width: 100px;
  }
  .bottom-line-four {
    top: 92px;
    left: 210px;
    width: 60px;
  }
  .bottom-line-five {
    top: 112px;
    left: 20px;
    width: 40px;
  }
  .bottom-line-six {
    top: 112px;
    left: 80px;
    width: 10px;
  }
  .bottom-line-seven {
    top: 112px;
    left: 110px;
    width: 50px;
  }
  .bottom-line-eight {
    top: 112px;
    left: 190px;
    width: 50px;
  }
  .bottom-line-neight {
    top: 112px;
    left: 260px;
    width: 30px;
  }
}
</style>
