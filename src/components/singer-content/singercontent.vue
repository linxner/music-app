<template>
    <div class="detail-content">
        <div class="detail-content-tab">
            <ul class="tab-list">
                <li>单曲</li>
                <li>专辑</li>
                <li>MV</li>
                <li>详情</li>
            </ul>
        </div>
        <song-list></song-list>
    </div>
</template>
<script>
import songList from 'components/song-list/songlist'


export default {
    components: {
        songList,
    },
    mounted() {
    }
}
</script>
<style lang="less" scoped>
.detail-content {
  width: 100%;
  box-sizing: border-box;
  .detail-content-tab {
    width: 100%;
    padding: 0 15px;
    .tab-list {
      list-style: none;
      letter-spacing: -0.5em;
      color: #7e7e7e;
      li {
        letter-spacing: normal;
        display: inline-block;
        width: 25%;
        line-height: 3;
        text-align: center;
      }
    }
  }
}
</style>
