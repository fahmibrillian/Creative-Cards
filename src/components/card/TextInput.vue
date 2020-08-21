<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <div class="form-group">
          <h4>Edit text :</h4>
          <textarea class="form-control" cols="50" rows="4" v-model="textInput" @keypress="textChanged"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data : function () {
      return {
        textInput : ''
      }
    },
    methods : {
      textChanged : function () {
        this.$emit('displayChangedText',this.textInput)
      }
    }
  }
</script>

<style scoped>

</style>
