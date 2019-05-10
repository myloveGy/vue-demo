<template>
<div>
    <div class="page-header">
        <h1 v-html="title"></h1>
    </div>
    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <item v-for="(list, key) in lists" :data="list" :key="key"/>
    </div>
</div>
</template>

<script>
    import Item from './Item'
    export default {
        name: "index",
        data() {
            return {
                title: "我的Web服务器 <small> 选择需要进行的操作 </small>",
            }
        },
        components: {
            Item
        },
        computed: {
            lists() {
                if (this.$store.state.lists.length === 0) {
                    this.$http.get(this.Config.serverHost, {
                        params: {
                            action: "index",
                        }
                    }).then(function(response) {
                        if (response.body.code === 0) {
                            this.$store.commit("setLists", response.body.data);
                        }
                    });
                }

                return this.$store.state.lists;
            }
        }
    }
</script>
