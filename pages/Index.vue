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

    <!-- <section>
      <mu-carousel class="index-carousel-box">
        <mu-carousel-item>
          <img :src="carouselImg1">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg2">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg1">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg2">
        </mu-carousel-item>
      </mu-carousel>
    </section> -->

    <!-- list -->
    <section>
      <mu-container ref="container" class="demo-loadmore-content">
        <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
          <mu-list>
            <template v-for="i in num">
              <mu-list-item :key=i>
                <mu-list-item-title>{{text}} Item {{i}}</mu-list-item-title>
              </mu-list-item>
              <mu-divider :key=i />
            </template>
          </mu-list>
        </mu-load-more>
      </mu-container>
    </section>
    <mu-container class="index-footer">
      <mu-bottom-nav>
        <mu-bottom-nav-item title="首页" icon="home"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="添加笔记" icon="note_add"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="个人中心" icon="person"></mu-bottom-nav-item>
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
      num: 10,
      refreshing: false,
      loading: false,
      text: 'List',
    };
  },
  methods: {
    refresh () {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
        this.text = this.text === 'List' ? 'Menu' : 'List';
        this.num = 10;
      }, 2000)
    },
    load () {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.num += 10;
      }, 2000)
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
    position:fixed;
    top:0px;
    width 100%;
    z-index 100;
}

.index-carousel-box {
  height: 150px;
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
