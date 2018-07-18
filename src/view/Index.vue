<template>
  <div class="hello">
    <el-container>
      <el-aside width="200px">
        <lift-list></lift-list>
      </el-aside>
      <el-container>
        <el-header style="background-color: #fff;border-bottom: 1px solid #ccc;height:120px;padding: 0px ">
          <div style="height:80px;border-bottom: 1px solid #ccc">
            <main-list></main-list>
          </div>
            
            <div style="line-height: 35px">
              这是标签栏
            </div>
        </el-header>
        <el-main style="background-color: #F1F5F5;">
            <image-upload></image-upload>
        </el-main>
      </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import LiftList from "./left"
  import MainList from "./menu"
  import ImageUpload from "./ImageUpload"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    LiftList,
    MainList,
    ImageUpload
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
