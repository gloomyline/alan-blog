<template lang="pug">
  div(class='home')
    Row
      Col(span='8')
        Menu(theme='dark')
          Submenu(name='1')
            template(slot='title')
              Icon(type='ios-paper')
              | 内容管理
            MenuItem(name='1-1') 文章管理
            MenuItem(name='1-2') 评论管理
            MenuItem(name='1-3') 举报管理
          Submenu(name='2')
            template(slot='title')
              Icon(type='ios-people')
              | 用户管理
            MenuItem(name='2-1') 新增用户
            MenuItem(name='2-2') 活跃用户
          Submenu(name='3')
            template(slot='title')
              Icon(type='stats-bars')
              | 统计分析
            MenuGroup(title='使用')
              MenuItem(name='3-1') 新增和启动
              MenuItem(name='3-2') 活跃分析
              MenuItem(name='3-3') 时段分析
            MenuGroup(title='留存')
              MenuItem(name='3-4') 用户留存
              MenuItem(name='3-5') 流失用户
</template>

<script>
  export default {
    data () {
    }
  }
</script>

<style lang="styl">
  
</style>
