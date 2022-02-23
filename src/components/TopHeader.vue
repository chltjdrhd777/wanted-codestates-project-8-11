<template>
  <div class="header">
    <div class="header-inner">
      <div class="arr">
        <div class="circle">
          <span>
            <p class="arrow"></p>
          </span>
        </div>
      </div>
      <span class="result">진단결과</span>
    </div>
    <div class="rediag" @click="reloadPage">다시 진단하기</div>
  </div>
</template>

<script>
export default {
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 360px;
  height: 72px;
  padding: 16px;
  background-color: white;
  border-bottom: 1px solid rgb(238, 237, 237);
}
.header-inner {
  display: flex;
  align-items: center;
}

/* 화살표 스타일링 */
.arr span {
  position: relative;
}
.arr span::after {
  content: "";
  width: 6px;
  height: 6px;
  border-top: 2px solid #121212;
  border-right: 2px solid #121212;
  display: inline-block;
  transform: rotate(225deg);
  position: absolute;
  top: 8px;
  left: 7px;
}
.circle {
  width: 28px;
  height: 28px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  border: 2px solid #121212;
  box-sizing: border-box;
  border-radius: 80px;
  margin-right: 15px;
}
.arrow {
  width: 9px;
  height: 10px;
  position: absolute;
  left: 7.5px;
  right: 32.14%;
  top: 2.5px;
  bottom: 50%;
  border-bottom: 2px solid #121212;
}

/* 진단결과 */
.result {
  font-size: 24px;
  font-weight: 700;
}

/* 다시 진단하기 */
.rediag {
  font-size: 16px;
  font-weight: 400;
  color: #6e3cf9;
  background-color: white;
  border: none;
  cursor: pointer;
  padding: 0;
}
</style>
