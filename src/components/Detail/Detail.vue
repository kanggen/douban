<template>
  <div>
    {{title}}
  </div>
</template>

<script>

export default {
  data(){
    return {
      title:"",
      imagesurl:''
    }
  },
  mounted() {
    this.title = this.$route.query.original_title;
    // this.imagesurl = this.$route.query.images;
  },
}
</script>
<style scoped  lang="">

</style>