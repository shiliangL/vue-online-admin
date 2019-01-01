<template>
  <div>
    <div v-for="item in 10" :key="item">
      <AppRow/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'find'
}
</script>

<style scoped>
</style>
