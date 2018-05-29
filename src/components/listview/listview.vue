<template>
    <div class="listview">
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
.listview {
  position: fixed;
  right: 10px;
  top: 20%;
  font-size: 1.2rem;
  padding: 10px 5px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 11px;
  .list-view {
    list-style: none;
    text-align: center;
  }
}
</style>

