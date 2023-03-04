<template>
    <div class="container">
        <div v-for="index in 5" :key="index" class="row">
            <div v-for="index in 7" :key="index" class="col"></div>
        </div>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Calendar',
  methods: {
    
  },
  props: ['location']
}
</script>

<style scoped>
    .col {
        border: 2px red solid;
        width: 8%;
        padding-bottom: 8%;
    }

    .row {
        border: 2px blue solid;
    }
</style>
