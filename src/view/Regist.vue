<template>
	<div style="width: 30%;margin: auto;margin-top: 100px;padding-top: 30px;padding-bottom: 30px;background-color:#305080;">
		<font style="font-size: 25px;color: #fff;">用户注册页面</font><br/>
		<font color="#fff">手机号</font><el-input v-model="phone" class="shuru" style="padding-top: 20px" placeholder="请输入手机号"></el-input><br/>
		<font color="#fff">用户名</font><el-input v-model="username" class="shuru" placeholder="请输入用户名"></el-input><br/>
		<font color="#fff">密&nbsp;&nbsp;&nbsp;&nbsp;码</font><el-input type="password" v-model="password" class="shuru" placeholder="请输入密码"></el-input><br/>
		<font color="#fff">姓&nbsp;&nbsp;&nbsp;&nbsp;名</font><el-input v-model="name" class="shuru" style="padding-bottom:  20px" placeholder="请输入姓名"></el-input><br/>
		<el-button type="success" v-on:click="regist" round>注册</el-button>
		<el-button type="success" v-on:click="back" round>返回登陆</el-button>
	</div>
</template>

<script>
	export default {
		name: 'Regist',
		data () {
		    return {
		      	phone: '',
		      	username:'',
		      	password:'',
		      	name:''
		    }
		},
		methods:{
			regist(){
				var userinfo={
					"username":this.username,
					"password":this.password,
					"phone":this.phone,
					"name":this.name
				}
				this.$axios({
                    method:'post',
                    url:'/apis/regist',
                    data:userinfo,
                }).then(response => {
                	if(response.data.code==="0000"){
                		this.$router.push({ path: '/' })
                		this.$message.error("注册成功,请登录");
                	}else{
                		this.$message.error(response.data.msg);
                	}
                })
			},
			back(){
				this.$router.push({ path: '/' })
			}
		}
	}

</script>

<style rel="stylesheet">
	.shuru{
		width: 70%;
		padding-bottom: 10px;
		padding-left: 10px;
	}
</style>