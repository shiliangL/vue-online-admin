<template>
  <div class="search-bar">
    <div class="left" style="line-height: 40px;">
      <slot name="title"></slot>
    </div>
    <template v-if="data && data.length > 0">
      <div class="left" v-for="(item, index) in data[0]" :key="index">

        <template v-if="item.type === 'select'">
          <Select v-model="item.value" :class="item.class?item.class:'w90'">
              <Option
                v-for="(item,index) in item.options"
                :value="item.value"
                :key="index">{{ item.label }}
              </Option>
          </Select>
        </template>

        <template v-else-if="item.type === 'input'">
          <Input
            v-model="item.value"
            :class="item.class?item.class:'w90'"
            :placeholder="item.placeholder? item.placeholder:'请输入...'"
            />
        </template>

        <template v-else-if="item.type === 'date'">
          <Date-picker
            type="date"
            v-model="item.value"
            format="yyyy-MM-dd"
            @on-change="item.value=$event"
            :class="item.class?item.class:'w90'"
            :placeholder="item.placeholder? item.placeholder:'请选择'"
          />
        </template>
        <template v-else-if="item.type === 'daterange'">
          <Date-picker
            type="daterange"
            v-model="item.value"
            format="yyyy-MM-dd"
            @on-change="item.value=$event"
            :class="item.class?item.class:'w180'"
            :placeholder="item.placeholder? item.placeholder:'请选择'"
          />
        </template>

        <template v-else-if="item.type === 'datetime'">
          <Date-picker
            type="datetime"
            v-model="item.value"
            format="yyyy-MM-dd HH:mm:ss"
            @on-change="item.value=$event"
            :class="item.class?item.class:'w180'"
            :placeholder="item.placeholder? item.placeholder:'请选择'"
          />
        </template>
        <template v-else-if="item.type === 'datetimerange'">
          <Date-picker
            type="datetimerange"
            v-model="item.value"
            format="yyyy-MM-dd HH:mm:ss"
            @on-change="item.value=$event"
            :class="item.class?item.class:'w280'"
            :placeholder="item.placeholder? item.placeholder:'请选择'"
          />
        </template>

         <template v-else-if="item.type === 'search'">
          <Button type="primary" @click="sendSearchParams">{{item.name}}</Button>
        </template>

        <template v-else-if="item.type === 'reset'">
          <Button @click="clickReset">{{item.name}}</Button>
        </template>

      </div>

      <template v-esle-if="data.length > 1">

      </template>
    </template>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'SearchBar',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    expandType: {
      type: Array,
      default: () => ['input', 'select', 'option', 'date', 'datetime', 'datetimerange']
    }
  },
  data () {
    return {

    }
  },
  mounted () {
  },
  methods: {
    clickReset () {
      if (this.data.length > 0 && this.data[0] && this.data[0].length > 0) {
        const items = this.data[0]
        for (let i = 0; i < items.length; i++) {
          const item = items[i]
          if (item['type'] === 'search') {
            break
          } else {
            item['value'] = null
          }
        }
      }
      this.$emit('reset')
    },
    sendSearchParams () {
      const params = {}
      if (this.data.length > 0 && this.data[0] && this.data[0].length > 0) {
        const items = this.data[0]
        for (let i = 0; i < items.length; i++) {
          const item = items[i]

          if (this.commonlyTypes.indexOf(item['type']) !== -1) {
            params[item['key']] = item.value
          } else if (item['type'] === 'datetimerange') {
            if (item.value != null) {
              params[item['key1']] = item.value[0]
              params[item['key2']] = item.value[1]
            } else {
              params[item['key1']] = null
              params[item['key2']] = null
            }
          } else if (item['type'] === 'search') {
            break
          }
        }
      }
      this.$emit('search', params)
    },
    clickAdd () {
      this.$emit('add')
    },
    clickCommand (command) {
      this.$emit('command', command)
    }
  }
}
</script>

<style lang="less" scoped>
  div.left {
    margin-left: 5px;
  }
</style>
