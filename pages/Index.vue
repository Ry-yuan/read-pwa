<template>
  <div>
    <section class="index-header">
      <mu-appbar style="width: 100%;" color="primary">
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        <span class="index-appbar-title">休闲一读</span>
        <mu-button flat slot="right">
          <mu-icon value="search"/>
        </mu-button>
        <mu-button flat slot="right">登录</mu-button>
      </mu-appbar>
    </section>

    <section class="index-options-box">
        <div class="option-item">诗词</div>
        <div class="option-item">经典</div>
        <div class="option-item">作者</div>
        <div class="option-item">遇见</div>
    </section>

    <!-- list -->
    <section class="index-list-box">
      <mu-container ref="container" class="demo-loadmore-content">
        <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
          <mu-list textline="two-line">
            <template v-for="i in num">
              <mu-list-item avatar :ripple="false" button :key="i">
                <mu-list-item-content>
                  <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Brunch this weekend?</mu-list-item-sub-title>
                  <mu-list-item-sub-title>I'll be in your neighborhood doing errands this weekend. Do you want to hang out?</mu-list-item-sub-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-checkbox
                    color="yellow700"
                    v-model="selects"
                    value="value1"
                    uncheck-icon="star_border"
                    checked-icon="star"
                  ></mu-checkbox>
                </mu-list-item-action>
              </mu-list-item>
              <mu-divider :key="i"/>
            </template>
          </mu-list>
        </mu-load-more>
      </mu-container>
    </section>
    <mu-container class="index-footer">
      <mu-bottom-nav>
        <span ></span>
        <mu-bottom-nav-item to='/' title="首页" icon="home"></mu-bottom-nav-item>
        <mu-bottom-nav-item to='/note' title="添加笔记" icon="note_add"></mu-bottom-nav-item>
        <mu-bottom-nav-item to='/person'  title="个人中心" icon="person"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
import carouselImg1 from "../static/img/lb1.jpg";
import carouselImg2 from "../static/img/lb2.jpg";
function setState(store) {}
const fruits = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Blood Orange",
  "Cantaloupe",
  "Currant",
  "Cherry",
  "Cherimoya",
  "Cloudberry",
  "Coconut",
  "Cranberry",
  "Clementine"
];
export default {
  name: "index",
  metaInfo: {
    title: "休闲一读主页",
    meta: [
      { name: "keywords", content: "休闲一读PWA" },
      { name: "description", content: "休闲一读" }
    ]
  },
  async asyncData({ store, route }) {
    setState(store);
  },
  data() {
    return {
      carouselImg1,
      carouselImg2,
      fruits,
      searchValue: "",
      num: 20,
      refreshing: false,
      loading: false,
      text: "List"
    };
  },
  methods: {
    refresh() {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
        this.text = this.text === "List" ? "Menu" : "List";
        this.num = 10;
      }, 2000);
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.num += 10;
      }, 2000);
    },
    routerTo(path) {
        console('tototo');
        this.$router.push(`/${path}`);
    }
  }
};
</script>

<style lang="stylus" scoped>
.page-index {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.index-header {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 100;
}

.index-options-box{
    position:relative;
    display: flex;
    justify-content:space-around;
    align-items: center;
    top:56px;
    width: 100%;
    height 100px;
    border-bottom: 1px solid #ccc;
    .option-item{
        display: block;
        width: 40px;
        height 40px;
        border: 1px solid #fff;
        border-radius: 100%;
        font-size:14px;
        background-color:#2196f3;
        line-height 40px;
        color: #fff;
    }
}


.index-list-box {
  position: relative;
  top: 56px;
}

.index-footer {
  position: fixed;
  bottom: 0;
}

.index-search {
  border: 1px solid red;
  border-radius: 100px;
  height: 25px;
}

.index-appbar-title {
  text-align: left;
  float: left;
  font-size: 16px;
}
</style>
