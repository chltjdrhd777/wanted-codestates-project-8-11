<template>
  <div class="search">
    <div class="search-header">
      <div class="search-result">
        <span>검색 결과</span>
        <span>></span>
      </div>
      <div class="remove-container">
        <div class="company">{{ searchValue }}</div>
        <button class="button-x" type="button" @click="deleteCompany"></button>
      </div>
    </div>
    <input
      type="text"
      @keyup.enter="submit"
      placeholder="기업명을 검색하세요"
    />
  </div>
</template>

<script>
export default {
  props: {
    searchValue: String,
    setSearchValue: Function,
    deleteSearchvalue: Function,
  },
  methods: {
    deleteCompany() {
      this.deleteSearchvalue();
    },
    submit(e) {
      this.setSearchValue(e.target.value);
    },
  },
};
</script>

<style>
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 360px;
  height: 62px;
  background-color: white;
}
.search-result {
  margin-left: 6px;
}

/* 검색 결과 */
.search .search-header span:nth-child(1) {
  color: #727272;
  font-size: 16px;
  font-weight: 700;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
}

/* > */
.search .search-header span:nth-child(2) {
  color: #727272;
  font-size: 16px;
  font-weight: 700;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 8px;
}

.remove-container {
  display: flex;
  flex-direction: row;
  margin-right: 16px;
}

/* 검색박스 */
input {
  padding: 12px 16px;
  width: 328px;
  height: 48px;
  left: 16px;
  top: 134px;
  background: #f8f8f8;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 4px;
}

/* 회사 이름 뜨는 곳 */
.company {
  color: rgb(161, 159, 159);
  margin-right: 10px;
}

/* x 버튼 */
.button-x {
  margin-top: 6px;
  width: 16px;
  height: 16px;
  position: relative;
  background: #d2d2d2;
  border-radius: 50%;
  text-indent: -9999px;
  border: none;
  cursor: pointer;
}
.button-x:before,
.button-x:after {
  content: "";
  width: 11px;
  height: 2px;
  position: absolute;
  top: 48%;
  border-radius: 5px;
  background: white;
}
.button-x:before {
  left: 2px;
  transform: rotate(45deg);
}
.button-x:after {
  right: 3px;
  transform: rotate(-45deg);
}
</style>
