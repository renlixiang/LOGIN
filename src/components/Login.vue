<template>
    <div id="login">
      <div class="container">
        <div class="head-sculpture">
          <img src="../assets/logo.png">
        </div>
        <div class="content">
            <div class="userName">
                <i class="el-icon-user"></i>
                <el-input
                    class="user"
                    size="small"
                    placeholder="请输入账户名"
                    v-model="inputAccount"
                    @blur="isAccountNull"
                    clearable>
                </el-input>
                <span
                  class="account-null"
                  v-if="accountFlag">请输入您的账户名</span>
            </div>
            <div class="password">
                <i class="el-icon-lock"></i>
                <el-input
                    class="password"
                    size="small"
                    placeholder="请输入密码"
                    v-model="inputPassword"
                    @blur="isPasswordNull"
                    show-password></el-input>
                <span
                  class="password-null"
                  v-if="passwordFlag">请输入您的密码</span>
            </div>
        </div>
          <div class="login">
            <div class="forget">
              <el-link
                class="forget"
                label="ltr"
                :underline="false"
                type="primary"
                style="margin-left: 16px;"
                @click="forgetPassword">忘记密码</el-link>
            </div>
            <div class="forget">
              <el-link
                class="forget"
                label="rtr"
                :underline="false"
                @click="createAccount">没有账号？去注册</el-link>
            </div>
            <el-drawer
              v-if="changeFlag"
              title="身份验证"
              :visible.sync="drawer"
              size="50%">
              <Forget></Forget>
            </el-drawer>
            <el-drawer
              v-if="!changeFlag"
              title="注册账号"
              :visible.sync="drawer"
              :direction="direction"
              size="30%">
              <Enroll></Enroll>
            </el-drawer>
          </div>
          <el-button
            class="entry"
            type="primary"
            @click="checkUser">登录</el-button>
      </div>
    </div>
</template>

<script>
import Forget from './Forget'
import Enroll from './Enroll'
export default {
  name: 'Login',
  components: {
    Forget,
    Enroll
  },
  data () {
    return {
      inputAccount: '',
      inputPassword: '',
      accountFlag: false,
      passwordFlag: false,
      drawer: false,
      direction: 'rtl',
      innerDrawer: false,
      // loginFlag: true,
      // forgetFlag: true,
      changeFlag: true,
      massage: ['账户名错误', '密码错误']
    }
  },
  // 自定义指令
  directives: {
    focus: {
      inserted: function (el) {
        el.children[0].focus()
      }
    }
  },
  methods: {
    // 用户名为空
    isAccountNull: function () {
      if (this.inputAccount === '') {
        this.accountFlag = true
      }
    },
    // 密码为空
    isPasswordNull: function () {
      if (this.inputPassword === '') {
        this.passwordFlag = true
      }
    },
    checkUser: function () {
      this.isAccountNull()
      this.isPasswordNull()
      // 判断用户名
      if (this.$store.state.users.hasOwnProperty(this.inputAccount)) {
        // 判断密码
        if (this.$store.state.users[this.inputAccount].password !== this.inputPassword) {
          this.$confirm('密码错误！')
        } else {
          alert('欢迎进入')
        }
      } else {
        this.$confirm('用户名错误！')
      }
      // this.$store.commit('userIsExist')
    },
    forgetPassword: function () {
      this.changeFlag = true
      this.drawer = true
    },
    createAccount: function () {
      this.changeFlag = false
      this.drawer = true
    }
  }
}
</script>

<style scoped lang="less">
#login {
    background-color: floralwhite;
    height: 100%;
    display: flex;
    //align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    .container {
        width: 230px;
        height: 300px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 150px;
        border: darkolivegreen solid 1px;
        border-radius: 5px;
        background-color: azure;
        //.head-sculpture {
        //    padding: 15px 30px 10px 30px;
        //}

        .head-sculpture {
            text-align: center;
            padding: 20px;
            img {
                width: 30px;
                height: 30px;
            }
        }

        .content {
            //margin-top: 10px;

            .userName {
                display: flex;
                flex-wrap: wrap;

                .user {
                    width: 180px;
                    margin-right: 10px;
                }

                .el-icon-user {
                    height: 20px;
                    padding: 8px;
                }

                .account-null {
                    font-size: .5em;
                    color: #F56C6C;
                    margin-left: 25px;
                }
            }

            .password {
                display: flex;
                flex-wrap: wrap;
                padding-top: 5px;

                .el-icon-lock {
                    height: 20px;
                    padding: 8px;
                }

                .password {
                    width: 180px;
                    margin-right: 10px;
                }

                .password-null {
                    font-size: .5em;
                    color: #F56C6C;
                    margin-left: 25px;
                }
            }
        }
        .login{
            padding-top: 10px;
            margin-left: -20px;
            display: flex;
            .forget{
                .forget {
                  font-size: .5em;
                  color: aquamarine;
                  cursor: pointer;
                }
                padding-right: 35px;
                width: 100px;
            }
            .login{
                .login {
                  font-size: .5em;
                  color: aquamarine;
                  cursor: pointer;
                }
              width: 100px;
            }
        }
        .entry{
            margin-left: 35px;
            margin-top: 10px;
            width: 150px;
            background-color: mediumaquamarine;
            color: cadetblue;
        }
    }
}
</style>
