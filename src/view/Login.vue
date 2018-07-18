<template>
	<div class="div">
		<div class="fontdiv">
			<font>用户登陆系统</font>
		</div>
		<font color="#fff">手机号</font>
		<el-input v-model="phone" class="input" placeholder="请输入用户名">
		</el-input><br/>
		<font color="#fff">密&nbsp;&nbsp;&nbsp;&nbsp;码</font>
		<el-input type="password" v-model="password" class="input" placeholder="请输入密码">	
		</el-input><br/>
		<div style="padding-top: 30px">
			<el-button type="primary" round v-on:click="login()">登陆</el-button>
			<el-button type="primary" round v-on:click="regist" style="margin-left: 20%">注册</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name:'login',
	data(){
		return{
			phone:'',
			password:'',
			code:'',
			msg:'',
			datamsg:'',
			datetime:''
		}
	},
	methods:{
		login(){
			this.datetime=new Date();
			if(this.username==''||this.password==''){
				this.$message.error('请输入用户名或密码');
			}else{
				this.$axios.get('/apis/login?phone='+this.phone+'&password='+this.password).then(response => {
					//this.codeq=response.data.code;
					//this.msg=response.data.msg;
					this.code=response.data.code;
					this.msg=response.data.msg;
					if("0000"===this.code){
						this.$message({
				          message: this.msg,
				          type: 'success'
				        });

				        this.$router.push({ path: '/index' })
					}else if("0000"!=this.code){
						this.$message.error(this.msg);
					}
				})
			}
		},
		regist(){
			this.$router.push({ path: '/regist' })
		}
	}
}

</script>

<style rel="stylesheet">
	.fontdiv{
		font-size: 25px;
		color: #409EFF;
		padding-bottom: 20px
	}
	.div{
		width: 30%;
		margin: auto;
		border: 0px solid red;
		margin-top: 160px;
		padding-top: 30px;
		padding-bottom: 30px;
		background-color: #305080;
	}
	.input{
		padding-bottom: 10px;
		padding-left: 10px;
		padding-top: 10px;
		width: 50%;
	}
</style>