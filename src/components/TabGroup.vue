<template>
  <div class="tab-box">
    <button
      v-for="(item, index) in tabItems"
      v-on:click="onEmit(index)"
      v-bind:key="index"
      :class="{ active: selectedTab === index }"
    >
      <img :src="item.logo.src" :alt="item.logo.alt" width="14px" />
      <span class="tab-title">{{ item.title }}</span>
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    selectedTab: Number,
    tabItems: {
      type: Array,
      default: null,
    },
    onTabClick: Function,
  },

  data() {
    return {};
  },

  methods: {
    onEmit(key) {
      this.$emit("onTabClick", key);
    },
  },

  mounted() {},
};
</script>

<style>
.tab-box {
  display: flex;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  background: #f2f2f2;
}
button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  border: 0;
  cursor: pointer;

  background: #f2f2f2;
  border-radius: 4px;

  flex-grow: 1;
}
button.active {
  background-color: white;
  color: black;
}

.tab-title {
  margin: 0 6px;
}
</style>
