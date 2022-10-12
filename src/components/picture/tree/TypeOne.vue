<template>
  <div class="tree-type-one" :style="'zoom:' + zoom">
    <div class="circle-left-root-box">
      <div class="circle-left"></div>
    </div>
    <div class="circle-right-root-box">
      <div class="circle-right"></div>
    </div>
    <div class="circle-one-box">
      <div class="circle-one circle-model"></div>
    </div>
    <div class="circle-two-box">
      <div class="circle-two circle-model"></div>
    </div>
    <div class="circle-three-box">
      <div class="circle-three circle-model"></div>
    </div>
    <div class="leaf-paint leaf-paint-one"></div>
    <div class="leaf-paint leaf-paint-two"></div>
    <div class="leaf-paint leaf-paint-three"></div>
    <div class="leaf-paint leaf-paint-four"></div>
    <div class="leaf-paint leaf-paint-five"></div>
    <div class="leaf-paint leaf-paint-six"></div>
    <div class="leaf-paint leaf-paint-seven"></div>
    <div class="leaf-paint leaf-paint-eight"></div>
    <div class="leaf-paint leaf-paint-neight"></div>
  </div>
</template>
<script setup lang="ts">
import getZoomByHeight from "@/components/common/util/zoomComputer.js";
import { defineProps } from "vue";

const props = defineProps({
  height: String,
});
const zoom = getZoomByHeight(props.height, 240);
</script>
<style lang="scss" scoped>
$tree-leaf-color: #c5c67b;
$tree-root-color: #836151;
.tree-type-one {
  height: 240px;
  width: 150px;
  overflow: hidden;
  .circle-model {
    width: 80px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid $tree-leaf-color;
  }
  .circle-one-box {
    position: absolute;
    top: 0;
    left: 30px;
    height: 55px;
    overflow: hidden;
  }
  .circle-two-box {
    position: absolute;
    top: -10px;
    left: -80px;
    border-radius: 0 100% 0 0;
    height: 200px;
    width: 160px;
    overflow: hidden;
    .circle-two {
      position: absolute;
      left: 80px;
      top: 60px;
    }
  }
  .circle-three-box {
    position: absolute;
    top: -10px;
    left: 70px;
    border-radius: 100% 0 0 0;
    height: 200px;
    width: 160px;
    overflow: hidden;
    .circle-three {
      position: absolute;
      top: 60px;
      left: -10px;
    }
  }
  .circle-left-root-box {
    position: absolute;
    top: 150px;
    left: 38px;
    height: 207px;
    width: 30px;
    overflow: hidden;
    .circle-left {
      position: absolute;
      height: 160px;
      width: 50px;
      top: -80px;
      left: -30px;
      border-radius: 50%;
      border: 2px solid $tree-root-color;
    }
  }
  .circle-right-root-box {
    position: absolute;
    top: 150px;
    left: 82px;
    height: 207px;
    width: 30px;
    overflow: hidden;
    .circle-right {
      position: absolute;
      height: 160px;
      width: 50px;
      top: -80px;
      left: 0;
      border-radius: 50%;
      border: 2px solid $tree-root-color;
    }
  }
  .leaf-paint {
    position: absolute;
    width: 0;
    height: 0;
    box-shadow: 10px 0px 20px 20px $tree-leaf-color;
  }
  .leaf-paint-one {
    top: 30px;
    left: 68px;
  }
  .leaf-paint-two {
    top: 40px;
    left: 52px;
  }
  .leaf-paint-three {
    top: 70px;
    left: 84px;
  }
  .leaf-paint-four {
    top: 80px;
    left: 40px;
  }
  .leaf-paint-five {
    top: 120px;
    left: 30px;
  }
  .leaf-paint-six {
    top: 100px;
    left: 20px;
  }
  .leaf-paint-seven {
    top: 114px;
    left: 90px;
  }
  .leaf-paint-eight {
    top: 100px;
    left: 70px;
  }
  .leaf-paint-neight {
    top: 100px;
    left: 100px;
  }
}
</style>
