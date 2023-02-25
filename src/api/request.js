import axios from "axios"
import Vue from "vue"
import router from "../router/index.js"

const http = axios.create({
	baseURL: "/api",
	timeout: 5000
});

http.interceptors.request.use((config)=>{
	
	let user = JSON.parse(localStorage.getItem("user"));
	
	if(user != null){
		config.headers['token'] = user.token;
	}else{
		// Vue.prototype.$message({
		// 	type: "error",
		// 	message: "无token, 请登录"
		// })
	}
	
	return config;
})

http.interceptors.response.use((res)=>{
	console.log(res);
	
	return res;
}, (err) => {
	if(err.response.status == 500){
		Vue.prototype.$message({
			message: "token验证失败，请登录",
			type: "error"
		});
		localStorage.clear();
		sessionStorage.clear();
		router.replace("/login")
	}else if(err.response.status == 404){
		Vue.prototype.$message({
			message: "服务器错误",
			type: "error"
		})
	}else if(err.response.status == 401){
		Vue.prototype.$message({
			message: "网络错误",
			type: "error"
		})
	}
})

export default http;