<template>
  <div class="content">
    <div class="account">
      <i class="el-icon-user"></i>
      <el-input
        class="input-account"
        size="medium"
        placeholder="请输入账户名"
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
        class="input-phone"
        size="medium"
        placeholder="请输入手机号"
        v-model="inputPhone"
        @blur="phoneIsNull"></el-input>
      <span
        class="phone-null"
        v-if="phoneFlag">请输入您的手机号</span>
    </div>
    <el-button
      class="entry"
      type="primary"
      :underline="false"
      @click="provingUser">确定</el-button>
    <el-drawer
      title="重置密码"
      :append-to-body="true"
      :visible.sync="innerDrawer">
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
        @click="checkPassword">重置密码</el-button>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Forget',
  data () {
    return {
      inputAccount: '',
      inputPhone: '',
      inputPassword: '',
      inputVerifyPassword: '',
      accountFlag: false,
      phoneFlag: false,
      passwordFlag: false,
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
    },
    passwordIsNull: function () {
      if (this.inputPassword === '') {
        this.passwordFlag = true
      } else if (this.inputPassword.length < 7) {
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
    provingUser: function () {
      if (this.$store.state.users.hasOwnProperty(this.inputAccount)) {
        if (this.$store.state.users[this.inputAccount].phone !== this.inputPhone) {
          this.$confirm('手机号错误！')
        } else {
          this.innerDrawer = true
          this.$confirm('身份验证成功')
        }
      } else {
        this.$confirm('账户名错误！')
      }
    },
    checkPassword: function () {
      if (this.inputPassword === this.inputVerifyPassword) {
        this.$confirm('密码重置成功')
        this.$store.state.users[this.inputAccount].password = this.inputPassword
      } else {
        this.$confirm('两次密码不同，请重新设置密码')
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

.phone>.input-phone {
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
  padding-top: 5px;
  padding-left: 30px;
}

.password>.el-icon-lock {
  /*height: 20px;*/
  padding: 8px;
}

.password>.input-password {
  width: 180px;
  margin-right: 10px;
  padding-left: 8px;
}

.password>.password-null {
  font-size: .5em;
  color: #F56C6C;
  margin-left: 25px;
}

.verify-password {
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-left: 30px;
}

.verify-password>.el-icon-circle-check {
  /*height: 20px;*/
  padding: 8px;
}

.verify-password>.input-verify-password {
  width: 180px;
  margin-right: 10px;
  padding-left: 8px;
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
