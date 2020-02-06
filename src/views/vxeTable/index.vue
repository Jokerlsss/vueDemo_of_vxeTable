<template>
  <div class="app-container">
    <!-- If the column width is not set, it is adaptive -->
    <vxe-table :data="tableData">
      <vxe-table-column type="seq" title="序号" width="80"></vxe-table-column>
      <vxe-table-column field="actname" title="活动名字"></vxe-table-column>
      <vxe-table-column field="actday" title="活动天数"></vxe-table-column>
      <vxe-table-column field="userid" title="用户ID"></vxe-table-column>
      <vxe-table-column field="flag" title="标志"></vxe-table-column>
      <vxe-table-column field="finishday" title="完成天数"></vxe-table-column>
      <vxe-table-column field="type" title="类型"></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
import { getActivityList } from '@/api/vxeTable'
import { getInfo_WuHan } from '@/api/vxeTable'
export default {
  data () {
    return {
      tableData: null
      // getInfo: null
    }
  },
  created () {
    // this.fetchData()
    this.fetchInfo()
  },
  methods: {
    // 获取后台数据
    // To get the data from server
    fetchData () {
      getActivityList().then(response => {
        this.tableData = response.data
      })
    },
    fetchInfo () {
      getInfo_WuHan().then(response => {
        this.getInfo = response.data
        console.log(this.getInfo)
      })
    }
  }
}
</script>

<style scoped>
</style>
