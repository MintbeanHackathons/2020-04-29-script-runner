<template lang="pug">
  .container
    .row
      .col
        b-form-textarea(
          id="textarea"
          v-model="text"
          placeholder="Enter something..."
          rows="3"
          max-rows="6")
    .row
      .col
        b-button(@click="replace") Replaces
</template>

<script>
export default {
  data() {
    return {
      text: ""
    }
  },
  methods: {
    replace() {
      document.body.innerHTML = this.text
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
