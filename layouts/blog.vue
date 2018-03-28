<template lang="pug">
  div(class='blog-layout')
    Layout
      Sider(ref='side' width='320' hide-trigger collapsible :collapsed-width='102' v-model='isCollapsed')
        div(:class='selfIntroClasses' class='self-intro align-center')
          Avatar(src='/avatar.jpg' size='large')
          ul(class='intro-list list-unstyled')
            li(class='name')
              span Name:
              span Alan Wang
            li(class='email')
              span Email:
              span alanjames007@qq.com
            li(class='company')
              span Company:
              span OnePieces Network Technology.
        Menu(:class='menuitemClasses' @on-select='selectMenuItem' active-name='1-1' theme='dark' width='auto')
          MenuItem(name='1-1')
            Icon(type='ios-navigate')
            span Home
          MenuItem(name='1-2')
            Icon(type='search')
            span Blogs
          MenuItem(name='1-3')
            Icon(type='settings')
            span About
      Layout
        Header(class='layout-header-bar')
          Icon(:class='rotateIcon' @click.native='collapsedSider' type='navicon-round' size='24')
        Content(class='layout-conetent')
          nuxt
</template>

<script>
  export default {
    data () {
      return {
        isCollapsed: false
      }
    },
    computed: {
      selfIntroClasses () {
        return [ this.isCollapsed ? 'collapsed-intro' : '']
      },
      rotateIcon () {
        return ['menu-icon', this.isCollapsed ? 'rotate-icon' : '']
      },
      menuitemClasses () {
        return ['menu-item', this.isCollapsed ? 'collapsed-menu' : '']
      }
    },
    methods: {
      selectMenuItem (menuItemName) {
        let newRoute = null
        switch (menuItemName) {
          case '1-1':
            newRoute = ''
            break
          case '1-2':
            newRoute = 'blogs'
            break
          case '1-3':
            newRoute = 'about'
            break
          default:
            break
        }
        this.$router.push(`/${newRoute}`)
      },
      collapsedSider () {
        this.$refs.side.toggleCollapse()
      }
    }
  }
</script>

<style lang="stylus">
.blog-layout
  position: relative
  border-radius: 4px
  border: 1px solid $color-grey
  background-color: $color-white
  overflow: hidden
  .self-intro
    margin-bottom: 32px
    padding: 32px 24px 0 24px
    img
      transform: rotate(0)
      transition: transform .8s ease .2s
    .intro-list
      padding: 12px 0 12px 
      text-align: left
      line-height: 1.6em
      color: $color-grey
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      transition: width .2s ease .2s
    &.collapsed-intro
      img
        transform: rotate(360deg)
  .menu-item
    span
      display: inline-block
      vertical-align: bottom
      width: 69px
      overflow: hidden
      text-overflow: hidden
      white-space: nowrap
      transition: width .2s ease .2s
    i
      font-size: 16px
      transform: translate3d(0, 0, 0)
      transition: font-size .2s ease, transform .2s ease
    &.collapsed-menu
      span
        width: 0px
        transition: width .2s ease
      i
        vertical-align: middle
        font-size: 22px
        transform: translate3d(5px, 0, 0)
        transition: font-size .2s ease .2s, transform .2s ease .2s
  .layout-header-bar
    padding: 0
    background-color: white
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1)
    .menu-icon
      margin: 20px 20px 0 20px
      transition: all .3s
      &.rotate-icon
        transform: rotate(-90deg)
  .layout-conetent
    min-height: 260px
    margin: 20px
    background-color: white
</style>