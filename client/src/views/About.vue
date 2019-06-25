<template>
  <div>
    <nav class="menuBar">
      <div class="logo">
        <a href="#">
          <img
            alt="logo"
            width="auto"
            height="30"
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          >
          Ant
        </a>
      </div>
      <div class="menuCon">
        <div class="leftMenu">
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="home">
              <a href="#">Home</a>
            </a-menu-item>
            <a-sub-menu>
              <span slot="title" class="submenu-title-wrapper">Blogs</span>
              <a-menu-item-group title="Item 1">
                <a-menu-item key="setting:1">Option 1</a-menu-item>
                <a-menu-item key="setting:2">Option 2</a-menu-item>
              </a-menu-item-group>
              <a-menu-item-group title="Item 2">
                <a-menu-item key="setting:3">Option 3</a-menu-item>
                <a-menu-item key="setting:4">Option 4</a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
            <a-menu-item key="contact">
              <a href="#">Contacts us</a>
            </a-menu-item>
          </a-menu>
        </div>
        <div class="rightMenu">
          <a-menu mode="horizontal">
            <a-menu-item key="signup">
              <a href="#">
                <a-icon type="ant-design"/>Sign Up
              </a>
            </a-menu-item>

            <a-menu-item key="login">
              <a href="#">Login</a>
            </a-menu-item>
          </a-menu>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ["home"]
    };
  }
};
</script>

<style>
.menuBar {
  padding: 0 20px;
  border-bottom: solid 0.2px #fff;
  overflow: auto;
  box-shadow: 0 0 40px #f3f1f1;
}
.logo {
  width: 150px;
  float: left;
}
.logo a {
  display: inline-block;
  font-size: 20px;
  padding: 19px 20px;
  text-transform: capitalize;
}
.menuCon {
  width: calc(100% - 150px);
  float: left;
}
.menuCon .ant-menu-item {
  padding: 0px 5px;
}
.menuCon .ant-menu-submenu-title {
  padding: 10px 20px;
}
.menuCon .ant-menu-item a,
.menuCon .ant-menu-submenu-title a {
  padding: 10px 15px;
}
.menuCon .ant-menu-horizontal {
  border-bottom: none;
}
.menuCon .leftMenu {
  float: left;
}
.menuCon .rightMenu {
  float: right;
}
</style>
