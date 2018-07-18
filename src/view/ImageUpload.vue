<template>
	<div>
		<form method="post" action="" @submit.prevent="comfirmAction" id="fileForm" enctype="multipart/form-data">
			<input type="file" @change="getFile" name="uploadFile">
			<input type="submit" value="提交">
  		</form>
  		<div style="padding-top: 30px;">
  			<img :src="imageUrl" height="200" width="200">
  		</div>
	</div>
</template>

<script>
   export default {
    data() {
      return {
        file: {},
        imageUrl:''
      };
    },
    created() {
    },
    methods: {
      getFile(e){
        console.log("e",e)
        this.file=e.target.files[0];
      },
      comfirmAction(){
        var formData = new FormData();
        formData.append('dispatchLineId', 1)
        formData.append('orderNo', 1)
        formData.append('dispatchState', 1)
        formData.append('file', this.file)
        formData.append('chunk', '0')
        let config = {
          headers: {'Content-Type': 'multipart/form-data'}
        }
        // 添加请求头
        this.$axios.post('http://localhost:8080/upload', formData, config)
          .then(response => {

            if (response.data.code === "0000") {
            	console.log(response.data.data)
              this.imageUrl ="/apis"+ response.data.data.imageUrl
            }
           
          })
      }
    }
}
</script>

<style>

</style>