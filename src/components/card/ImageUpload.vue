<template>
    <div class="row">
      <div class="col-sm-12">
        <div class="form-group">
          <h4>Upload Image</h4>
          <br>
          <input class="form-control-file" type="file" id="uploadImage" @change="uploadImage">
          <img src="" alt="" id="image" >
          <br>
          <button class="btn btn-success" type="button" id="setImageButton">Upload</button>
        </div>
        <br>
      </div>
    </div>
</template>

<script>
  import firebase from 'firebase'
  import firebaseAuth from '../../firebaseConfig'
    export default {
      name: "ImageUpload",
      data : function () {
        return {
          file : ''
        }
      },
      methods : {
        uploadImage : function (event) {
          this.file = event.target.files[0]
          var storageRef = firebase.storage().ref('user_uploads/' + this.file.name)
          storageRef.put(this.file)

          var reader = new FileReader();
          reader.readAsDataURL(this.file)
          reader.onload = function (e) {
            document.getElementById('image').src = e.target.result;

          }
        }
      }
    }
</script>

<style scoped>
  img{
    max-width: 200px;
  }
</style>
