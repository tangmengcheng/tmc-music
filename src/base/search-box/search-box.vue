<template>
    <div class="search-box">
      <i class="icon-search"></i>
      <input ref="query" class="box" v-model="query" :placeholder="placeholder"/>
      <i @click="clear" class="icon-dismiss" v-show="query"></i>
    </div>
</template>

<script>
import {debounce} from 'common/js/util'
export default {
  name: 'search-box',
  props: {
    placeholder: {
      type: String,
      default: '搜索歌曲、歌手'
    }
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    // 点击右侧删除将输入框中的数据清空
    clear () {
      this.query = ''
    },
    blur () {
      this.$refs.query.blur()
    },
    // 创建主动设置input 变量值，赋值给父级data中
    setQuery (query) {
      this.query = query
    }
  },
  created () {
    // this.$watch('query', (newQuery) => {
    //   this.$emit('query', newQuery)
    // })
    // 节流函数 在两百毫秒内只被调用一次
    this.$watch('query', debounce((newQuery) => {
      this.$emit('query', newQuery)
    }, 200))
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/variable"
  .search-box
    display: flex
    align-items: center
    box-sizing: border-box
    width: 100%
    padding: 0 6px
    background: $color-highlight-background
    border-radius: 6px
    .icon-search
      font-size: 24px
      color: $color-background
    .box
      flex: 1
      margin: 0 5px
      line-height: 18px
      background: $color-highlight-background
      color: $color-text
      font-size: $font-size-medium
      &::placeholder
        color: $color-text-d
    .icon-dismiss
      font-size: 16px
      color: $color-background
</style>
