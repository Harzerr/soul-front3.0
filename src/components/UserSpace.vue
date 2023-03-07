<template>

  <div>
    <div style="text-align: left; margin-top: 50px">
      <el-row :gutter="20">
        <el-col :span="3" :offset="3" >
          <img class="heading" style=" margin-top:2px;height: 100px;width: 100px ;border-radius: 50%;" :src="imgsrc"/>
        </el-col>
        <el-col :span="6">
          <div class="personal-relation personal-relation-top">
            <div class="relation-item">用户名:
              <div style="float: right; padding-right:10px; ">{{ form.unickname }}</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6" :offset="1">
          <div class="personal-relation personal-relation-top">
            <div class="relation-item">联系方式:
              <div style="float: right; padding-right:10px;">{{ form.uphone }}</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6" :offset="6">
          <div class="personal-relation">
            <div class="relation-item">账户ID:
              <div style="float: right; padding-right:10px;">{{ form.id }}</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6" :offset="1">
          <div class="personal-relation ">
            <div class="relation-item">邮箱:
              <div style="float: right; padding-right:10px;">{{ form.uemail }}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="tab">
      <div style="height: 600px; margin-left: 20%; width: 800px;  background-color:rgb(255, 255, 255,0.6);   ">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="基础信息" name="first">
            <div style="width:33%; height: 800px;  align: center; margin-left: 5%; margin-right: 30%">
              <el-form :rules="rules" ref="form" :model="form" prop="unickname" label-width="80px" style="width:350px;margin-top:15px; display: inline-block">
                <el-form-item label="昵称" prop="unickname">
                  <el-input v-model="form.unickname"></el-input>
                </el-form-item>
                <el-form-item label="手机" prop="uphone">
                  <el-input v-model="form.uphone"></el-input>
                </el-form-item>
                <el-form-item label="密码"  prop="upassword">
                  <el-input v-model="form.upassword"></el-input>
                </el-form-item>
                <el-form-item label="邮箱"  prop="uemail">
                  <el-input v-model="form.uemail"></el-input>
                </el-form-item>
                <el-form-item label="个性签名" >
                  <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">修改</el-button>
                  <el-button  @click="resetForm()">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="安全设置" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        </el-tabs>
      </div>
    </div>


  </div>


</template>

<script>
import Vue from 'vue'

export default {
  name: "UserSpace",
  data() {
    let checkEmail=(rule, value, callback)=>{
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      if(!regEmail.test(value)){
        callback(new Error("邮箱格式错误"))
      }
      callback()
    };
    return {
      activeName2: 'first',
      IpAddress: "http://localhost:8090",
      imgsrc: "/static/img/none_login.png",
      islogin: false,
      user: {},
      form: {
        unickname: '',
        uphone: "",
        uemail: "",
        upassword: ""
      },
      rules:{
        unickname: [
          {
            required: true,
            message: '请输入用户昵称',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 30,
            message: '长度范围保持在3~12个字符',
            trigger: 'blur'
          }
        ],
        upassword: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'//触发
          },
          {
            min: 6,
            max: 16,
            message: '长度范围保持在6~16个字符',
            trigger: 'blur'
          },
        ],
       uemail:[
          {
            validator: checkEmail,
            trigger:['blur','change'],
          }
        ],
        uphone: [
          {
            required: true,
            pattern:/^1[345678]\d{9}$/,
            message: '当前仅支持大陆手机号',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 30,
            message: '长度范围保持在3~12个字符',
            trigger: 'blur'
          }
        ],
      }
    }
  },
  mounted() {
    //从本地存储获取用户数据 如果数据存在表示登录状态
    if (localStorage.getItem("user") != null) {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.imgsrc = this.IpAddress + this.user.uheadimg;
      this.form = this.user;
      this.islogin = true;
    } else {
      this.user = {};
      this.imgsrc = "/static/img/none_login.png";
      this.islogin = false;
    }
    this.windowScroll();
    this.navChange();
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    windowScroll() {
      let element = document.getElementsByClassName("backTop")[0];
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 200) {
          element.style.opacity = "1";
          element.style.right = "50px";
        } else {
          element.style.opacity = "0";
        }
      });
    },
    onSubmit() {
      this.$refs['form'].validate((valid)=>{
        if(valid){
          this.$http({
            method:"post",
            url:"/user/update",
            headers: {
              "Content-Type": "multipart/form-data"
            },
            withCredentials:true,
            data: this.form,
          }).then((res)=>{
            if(res.data || res.data !='' || res.data.length() != 0){

              this.$notify({
                title: '成功',
                message: '修改成功',
                type: 'success'
              });
              this.user = this.form;
              const userString = JSON.stringify(this.user);
              localStorage.setItem("user", userString);
            }
            else{
              this.$notify.error({
                title: '错误',
                message: '修改失败'
              });
            }
            console.log(res);
          });
        }else{
          this.$notify.error({
            title: '错误',
            message: '信息填写不规范'
          });
          return false;
        }
      })
    },
    resetForm(){
      this.$refs['form'].resetFields();
    },
    navChange() {
      let nav_li = document.querySelectorAll(".top-nav-li");
      nav_li.forEach((item, index) => {
        item.addEventListener("click", () => {
          nav_li.forEach((item) => {
            item.classList.remove("is-active");
          });
          item.classList.add("is-active");
        });
      });
    }

  }

}
</script>

<style scoped>


.personal-relation {
  font-size: 16px;
  padding: 0px 5px 8px;
  margin-right: 1px;
  width: 80%;
}

.personal-relation-top {
  margin-top: 30px;
}

.relation-item {
  padding: 1px;

}

.headimg-wrap .headimg {
  display: block;
  height: 40px;
  width: 40px;
  overflow: hidden;
  margin: 0 !important;
  scale: 1.1;
}
.tab{
  color: #3A3A39 ;
  margin-top: 20px;
}
::v-deep .el-dialog .el-dialog__body {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  object-fit: cover !important;
}


</style>
