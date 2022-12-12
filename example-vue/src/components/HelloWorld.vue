<template>
  <div class="hello">
    <p>You clicked {{count}} times</p>
    <pie-button @count-changed="incrementCount" id="btn" size="Large" type="primary">Button 1</pie-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    incrementCount () {
      this.count++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
