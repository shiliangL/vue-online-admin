<template>
  <div>
    搜索组件页面
    <!-- @search="searchAction" @reset="fetchList"  @add="showAdd" -->
    <search-bar :data="searchBarDate"/>

  </div>
</template>

<script>
import { SearchBar } from '@/components'
export default {
  name: 'SearchBarPage',
  components: {
    SearchBar
  },
  data () {
    return {
      searchBarDate: [
        [
          {
            type: 'select',
            value: null,
            key: 'status',
            class: 'w150',
            placeholder: '状态',
            options: [
              { label: '无效', value: 0 },
              { label: '有效', value: 1 }
            ]
          },
          {
            type: 'input',
            value: null,
            key: 'name',
            class: 'w180',
            placeholder: ''
          },
          {
            type: 'date',
            value: null,
            key: 'name',
            class: 'w180',
            placeholder: '日期'
          },
          {
            type: 'daterange',
            value: [],
            key1: 'name',
            key2: 'name',
            class: '',
            placeholder: '日期范围'
          },
          {
            type: 'datetime',
            value: null,
            key: 'name',
            class: '',
            placeholder: '日期+时间'
          },
          {
            type: 'datetimerange',
            value: [],
            key1: 'name',
            key2: 'name',
            class: '',
            placeholder: '日期+时间范围'
          },

          { type: 'search', name: '查询' },
          { type: 'reset', name: '重置' }
        ],
        [{ type: 'add', name: '新增' }]
      ]
    }
  }
}
</script>

<style scoped>

</style>
