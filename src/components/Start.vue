<template>
  <div>
    <div class="stars">
      <span v-for="(ee,index) in [1,2,3,4,5]" :key="index">
        <img v-if="item.rating.stars/10 > (index+1)" src="@/assets/1.jpg" alt />
        <img
          v-else-if="item.rating.stars/10 > (index) && item.rating.stars/10 < (index+1)"
          src="@/assets/3.jpg"
          alt
        />
        <img v-else src="@/assets/2.jpg" alt="">
      </span>
    </div>
    <div>{{item.rating.average}}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {};
  },
  mounted() {
    // console.log(this.item.rating.stars/10 > index)
  }
};
</script>
<style scoped  lang="">
/* .stars{
  width: 100%;
  display: flex;
} */
.stars img {
  width: 10px;
  height: 10px;
}
</style>