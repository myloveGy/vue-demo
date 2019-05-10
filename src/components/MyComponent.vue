<template>
    <div class="col-md-3">
        <p class="text-primary">
            <a :href="item.href">{{item.name}}</a>
        </p>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: "my-component",
        props: ["item"]
    }
</script>>