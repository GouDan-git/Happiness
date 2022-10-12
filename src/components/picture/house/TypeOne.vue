<template>
  <div class="output-box">
    <div class="house-type-one">
      <div class="house-roof-left"></div>
      <div class="house-roof-right"></div>
      <div class="house-wall"></div>
      <div class="house-window house-window-one">
        <div class="window">
          <div class="window-child window-child-one"></div>
          <div class="window-child window-child-two"></div>
          <div class="window-child window-child-three"></div>
          <div class="window-child window-child-four"></div>
        </div>
        <div class="foot"></div>
      </div>
      <div class="house-window house-window-two">
        <div class="window">
          <div class="window-child window-child-one"></div>
          <div class="window-child window-child-two"></div>
          <div class="window-child window-child-three"></div>
          <div class="window-child window-child-four"></div>
        </div>
        <div class="foot"></div>
      </div>
      <div class="house-foot"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$line-color: #5a5446;
.output-box {
  position: absolute;
  height: 220px;
  width: 282px;
  overflow: hidden;
}
.house-type-one {
  position: relative;
  margin-top: 30px;
  margin-left: 9px;
  .house-roof-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    height: 10px;
    transform: skew(-30deg) rotate(-30deg);
    border: 1px solid $line-color;
    border-right: 0;
  }
  .house-roof-right {
    position: absolute;
    top: 0;
    left: 141px;
    width: 120px;
    height: 10px;
    transform: skew(30deg) rotate(30deg);
    border: 1px solid $line-color;
    border-left: 0;
  }
  .house-wall {
    position: absolute;
    top: 42px;
    left: 0;
    width: 260px;
    height: 120px;
    border: 1px solid $line-color;
    border-top: 0;
  }
  .house-window {
    position: absolute;
    .window {
      position: absolute;
      width: 60px;
      height: 70px;
      border: 1px solid $line-color;
      border-bottom: 0;
      .window-child {
        position: absolute;
        width: 23px;
        height: 28px;
        border: 1px solid $line-color;
      }
      .window-child-one {
        top: 5px;
        left: 5px;
        border-right: 0;
        border-bottom: 0;
      }
      .window-child-two {
        top: 5px;
        right: 5px;
        border-bottom: 0;
      }
      .window-child-three {
        bottom: 5px;
        left: 5px;
        border-right: 0;
      }
      .window-child-four {
        bottom: 5px;
        right: 5px;
      }
    }
    .foot {
      position: absolute;
      top: 72px;
      left: -10px;
      width: 80px;
      height: 8px;
      border: 1px solid $line-color;
    }
  }
  .house-window-one {
    top: 46px;
    left: 42px;
  }
  .house-window-two {
    top: 46px;
    left: 160px;
  }
  .house-foot {
    position: absolute;
    top: 162px;
    left: 0;
    width: 260px;
    height: 26px;
    border: 1px solid $line-color;
    border-top: 0;
  }
}
</style>
