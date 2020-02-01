<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="活动名称">
        <el-input v-model="form.actname" />
      </el-form-item>
      <el-form-item label="活动天数">
        <el-input v-model="form.actday" />
      </el-form-item>
      <el-form-item label="活动类型">
        <el-input v-model="form.type" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addActivity } from '@/api/postData'
export default {
  data () {
    return {
      form: {
        actname: '',
        actday: '',
        type: '',
        userid: 1
      }
    }
  },
  methods: {
    onSubmit () {
      addActivity(this.form).then(Response => {
        this.$message(this.actname, this.actday, this.type)
      })
    },
    onCancel () {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

