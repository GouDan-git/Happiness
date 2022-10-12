<script setup lang="ts">
import CloudTypeOne from "@/components/picture/cloud/TypeOne.vue";
import TreeTypeOne from "@/components/picture/tree/TypeOne.vue";
import HouseTypeOne from "@/components/picture/house/TypeOne.vue";
</script>

<template>
  <div class="picture">
    <CloudTypeOne class="cloud-type-one" height="118px" />
    <TreeTypeOne class="tree-type-one" height="240px" />
    <HouseTypeOne class="house-type-one" height="240px" />
  </div>
</template>

<style lang="scss" scoped>
.picture {
  height: 100%;
  width: 100%;
  position: relative;
}
.cloud-type-one {
  position: absolute;
  top: 50px;
  left: 100px;
}
.tree-type-one {
  position: absolute;
  bottom: 0;
  left: 200px;
}
.house-type-one {
  position: absolute;
  bottom: 200px;
  left: 800px;
}
</style>
