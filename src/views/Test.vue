<template>
  <div class="test">
    <div>
      平均值: {{average}}
    </div>
    <button @click="update">加载更多</button>
    <div class="list-header">
      <div>id</div>
      <div>数据</div>
      <div>时间</div>
    </div>
    <div class="list-content">
      <div class="list" v-for="item in dataList" :key="item.id">
        <div class="item" >{{item.id}}</div>
        <div class="item" >{{item.data}}</div>
        <div class="item" >{{item.time | format}}</div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'test',
  data () {
    return {
      // dataList: [],
    }
  },
  computed: {
    ...mapGetters({
      average: 'getAverage',
      dataList: 'getData'
    })
  },
  methods: {
    ...mapActions({
      update: 'getDataCall'
    })
  },
  filters: {
    format (val) {
      return val.toLocaleDateString().split('/').join('-')
    }
  }
}
</script>

<style scoped lang="less">

.test{
  .list-content {
    height: 600px;
    overflow-y: auto;
  }
  .list{
    display: flex;
    flex-direction: row;
    .item {
      flex: 1;
      text-align: center;
      padding: 8px;
      border: 1px solid #ccc;
    }
  }
  .list-header {
    display: flex;
    flex-direction: row;
    width: calc(100% - 18px);
    div {
      flex: 1;
      text-align: center;
      padding: 8px;
      border: 1px solid #333;
    }
    div:nth-child(2),div:nth-child(3){
      border-left: none;
    }
  }
  button{
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: blue;
    padding: 10px;
    font-size: 15px;
    color: white;
    width: 100%;
  }
}

</style>
