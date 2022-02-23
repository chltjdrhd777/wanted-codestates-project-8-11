<template>
  <div class="modal-back">
    <h2 class="modal-content">해당하는 기업이 없습니다!</h2>
  </div>
</template>
<script>
export default {};
</script>
<style>
.modal-back {
  width: 100vw;
  height: 130vh;
  position: fixed;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  width: 40%;
  height: 40%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}
</style>
