export default {
  data () {
    return {
      validNumberR2: (rule, value, callback) => {
        if (!value) {
          return {
            valid: false,
            msg: '请输入!'
          }
        }
        var reg = /^([0-9][\d]{0,5})(\.[\d]{1,2})?$/
        if (!reg.test(value)) {
          return {
            valid: false,
            msg: '请输入有效数字!'
          }
        }
        return {
          valid: true,
          msg: ''
        }
      },
      validPhone: (value) => {
        if (!value) {
          return {
            valid: false,
            msg: '请输入!'
          }
        }
        var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
        if (!reg.test(value)) {
          return {
            valid: false,
            msg: '请输入正确的手机号码!'
          }
        }
        return {
          valid: true,
          msg: ''
        }
      }
    }
  }
}
