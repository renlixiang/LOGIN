<template>
  <div class="content">
    <div class="account">
      <i class="el-icon-user"></i>
      <el-input
        class="input-account"
        size="medium"
        placeholder="请设置账户名"
        v-model="inputAccount"
        @blur="accountIsNull"
        clearable>
      </el-input>
      <span
        class="account-null"
        v-if="accountFlag">请输入您的账户名</span>
    </div>
    <div class="phone">
      <i class="el-icon-phone-outline"></i>
      <el-input
        class="phone-num"
        size="medium"
        placeholder="请输入手机号"
        v-model="inputPhone"
        @blur="phoneIsNull"></el-input>
      <span
        class="phone-null"
        v-if="phoneFlag">请输入您的手机号</span>
    </div>
      <div class="password">
        <i class="el-icon-lock"></i>
        <el-input
          class="input-password"
          size="medium"
          placeholder="请输入密码"
          v-model="inputPassword"
          @blur="passwordIsNull"
          show-password></el-input>
        <span
          class="password-null"
          v-if="passwordFlag">请输入您的密码</span>
      </div>
      <div class="verify-password">
        <i class="el-icon-circle-check"></i>
        <el-input
          class="input-verify-password"
          size="medium"
          placeholder="请确认密码"
          v-model="inputVerifyPassword"
          @blur="verifyPasswordIsNull"
          show-password></el-input>
        <span
          class="verify-password-null"
          v-if="verifyPasswordFlag">请再次输入您的密码</span>
      </div>
      <el-button
        class="entry"
        type="primary"
        @click="createAccount">完成</el-button>
  </div>
</template>

<script>
export default {
  name: 'Forget',
  data () {
    return {
      inputAccount: '',
      inputPassword: '',
      inputVerifyPassword: '',
      inputPhone: '',
      accountFlag: false,
      passwordFlag: false,
      phoneFlag: false,
      verifyPasswordFlag: false,
      drawer: false,
      innerDrawer: false,
      direction: 'rtl'
    }
  },
  methods: {
    accountIsNull: function () {
      if (this.inputAccount === '') {
        this.accountFlag = true
      }
      console.log(this.account)
    },
    passwordIsNull: function () {
      if (this.inputPassword === '') {
        this.passwordFlag = true
      } else if (this.inputPassword.length < 6) {
        this.$confirm('密码不能少于6位！')
      }
    },
    phoneIsNull: function () {
      if (this.inputPhone === '') {
        this.phoneFlag = true
      } else {
        let reg = /^1[345789][0-9]{9}$/
        if (!reg.test(this.inputPhone)) {
          this.$confirm('手机号无效！')
        }
      }
    },
    verifyPasswordIsNull: function () {
      if (this.inputVerifyPassword === '') {
        this.verifyPasswordFlag = true
      }
    },
    createAccount: function () {
      if (this.inputAccount !== '' && this.inputPassword !== '' && this.inputPhone !== '' && this.inputVerifyPassword !== '') {
        this.$store.state.users[this.inputAccount] = {
          phone: '',
          password: ''
        }
        this.$store.state.users[this.inputAccount].phone = this.inputPhone
        this.$store.state.users[this.inputAccount].password = this.inputPassword
        alert('注册成功')
      } else {
        this.$confirm('请检查所有输入项！')
      }
    }
  }
}
</script>

<style scoped>
.account {
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
}

.account>.input-account {
  width: 200px;
  margin-right: 10px;
}

.account>.el-icon-user {
  height: 20px;
  padding: 8px;
}

.account>.account-null {
  font-size: .5em;
  color: #F56C6C;
  margin-left: 25px;
}

.phone {
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
  padding-top: 20px;
}

.phone>.phone-num {
  width: 200px;
  margin-right: 10px;
}

.phone>.el-icon-phone-outline {
  height: 20px;
  padding: 8px;
}

.phone>.phone-null {
  font-size: .5em;
  color: #F56C6C;
  margin-left: 25px;
}

.password {
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-left: 30px;
}

.password>.el-icon-lock {
  height: 20px;
  padding: 8px;
}

.password>.input-password {
  width: 200px;
  margin-right: 10px;
  /*padding-left: 8px;*/
}

.password>.password-null {
  font-size: .5em;
  color: #F56C6C;
  margin-left: 25px;
}

.verify-password {
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-left: 30px;
}

.verify-password>.el-icon-circle-check {
  height: 20px;
  padding: 8px;
}

.verify-password>.input-verify-password {
  width: 200px;
  margin-right: 10px;
  /*padding-left: 8px;*/
}

.verify-password>.verify-password-null {
  font-size: .5em;
  color: #F56C6C;
  margin-left: 25px;
}

.entry{
  margin-left: 70px;
  margin-top: 30px;
  width: 150px;
  background-color: aquamarine;
  color: cadetblue;
}
</style>
