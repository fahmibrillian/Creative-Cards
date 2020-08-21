<template>
  <div>
    <div class="row">
      <div class="col-sm-6 card edit-area">
        <text-input @displayChangedText="textValue1 = $event"></text-input>
        <image-upload></image-upload>
        <text-input @displayChangedText="textValue2 = $event"></text-input>
        <text-input @displayChangedText="textValue3 = $event"></text-input>
      </div>
      <div class="col-sm-6 card card-display">
        <text-output :display-text="textValue1" :container-height="130"></text-output>
        <text-output :display-text="textValue2" :container-height="130"></text-output>
        <text-output :display-text="textValue3" :container-height="130"></text-output>
      </div>
    </div>
  </div>
</template>

<script>
  import textInput from './TextInput'
  import textOutput from './TextOutput'
  import imageUpload from './ImageUpload'
  export default {
    data : function (){
      return{
        textValue1 : '',
        textValue2 : '',
        textValue3 : '',
      }
    },
    components : {
      textInput : textInput,
      textOutput : textOutput,
      imageUpload : imageUpload
    }
  }
</script>

<style scoped>
  .edit-area{
    background-color: #d2f9f9;
    padding: 20px;
    height: 800px;
  }

  .card-display{
    padding: 20px;
    height: 800px;
  }


</style>
