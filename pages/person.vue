<template>
  <div class="person-container">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" v-on:click="routeToIndex">
        <mu-icon value="keyboard_arrow_left"></mu-icon>
      </mu-button>
      <span class="person-appbar-title">个人中心</span>
      <mu-button flat slot="right"></mu-button>
    </mu-appbar>

    <section>
      <mu-list>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="person"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>个人信息</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon size="24" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="grade"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>我的收藏</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon size="24" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="note"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>我的笔记</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon size="24" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="favorite"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>我的点赞</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon size="24" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="settings"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>设置</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon size="24" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </section>

     <mu-container class="index-footer">
      <mu-bottom-nav>
        <mu-bottom-nav-item to='/' title="首页" icon="home"></mu-bottom-nav-item>
        <mu-bottom-nav-item to='/note' title="添加笔记" icon="note_add"></mu-bottom-nav-item>
        <mu-bottom-nav-item to='/person'  title="个人中心" icon="person"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>

</template>

<script>
function setState(store) {}

export default {
  name: "person",
  metaInfo: {
    title: "休闲一读登录界面",
    meta: [
      { name: "keywords", content: "休闲一读pwa" },
      {
        name: "description",
        content: "休闲一读pwa"
      }
    ]
  },
  data() {
    return {};
  },
  methods: {
    routeToIndex: function (){
        this.$router.push({path:'/'});
    }
  },
  async asyncData({ store, route }) {
    setState(store);
  }
};
</script>

<style lang="stylus" scoped>
.person-appbar-title {
  text-align: left;
  float: left;
  font-size: 16px;
}

.index-footer {
  position: fixed;
  bottom: 0;
}
</style>
