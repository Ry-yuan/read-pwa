<template>
    <div class="page-index">
        <h2>主页</h2>
    </div>
</template>

<script>
function setState(store) {}

export default {
    name: 'index',
    metaInfo: {
        title: '休闲一读主页',
        meta: [
            {name: 'keywords', content: '休闲一读PWA'},
            {name: 'description', content: '休闲一读'}
        ]
    },
    async asyncData({store, route}) {
        setState(store);
    }
};
</script>

<style lang="stylus" scoped>

.page-index
    display flex
    justify-content center
    align-items center
    flex-direction column
</style>
