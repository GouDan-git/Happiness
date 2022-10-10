<script setup lang="ts">
import CloudTypeOne from "@/components/picture/cloud/TypeOne.vue";
import TreeTypeOne from "@/components/picture/tree/TypeOne.vue";
</script>

<template>
  <div class="picture">
    <CloudTypeOne class="cloud-type-one" height="118px" />
    <TreeTypeOne class="tree-type-one" />
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
  top: 100px;
  left: 100px;
}
.tree-type-one {
  position: absolute;
  top: 300px;
  left: 100px;
}
</style>
