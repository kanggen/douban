<template>
  <div class="contlist">
    <div  class="listTop">
      <h3>{{this.title}}</h3>
    </div>
    <div class="cont">
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
        >
            <li v-for="(v,i) in list" :key="i"  @click="todetail(v)">
              <img class="img" :src="v.images.large" alt />
              <p>
                <span class="tit">{{v.title}}</span>
                <Start :item="v" />
              </p>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
import Start from "@/components/Start";
export default {
  data() {
    return {
      list: [],
      start:0,
      cont:20,
      title:""
    };
  },
  components: {
    Start
  },
  created() {
    this.init(this.$route.query.title,this.$route.query.urls);
  },
  mounted(){
   this.title= this.$route.query.title,
   this.init(this.title)
  },
  methods: {
    todetail(item){
      this.$router.push({
        path:"/detail",
        query:{
          ...item
        }
      })
    },
    loadMore(){
      this.start +=this.cont
      let url=this.$route.query.urls+"?start="+this.start+"&count="+this.cont
      this.init(this.title);
    },
    init(title) {
      switch (title) {
        case "最近上映":
          this.axios.get("/api/v2/movie/coming_soon").then(res => {
            this.list.push(...res.data.subjects);
          });
          break;
        case "热门电影":
          this.axios.get("/api/v2/movie/in_theaters").then(res => {
            this.list.push(...res.data.subjects);
          });
          break;
        case "top250电影":
          this.axios.get("/api/v2/movie/top250").then(res => {
             this.list.push(...res.data.subjects);
          });
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style scoped  lang="stylus">
@import '~@/assets/common.styl'
  .contlist{
  .listTop {
      width: 100%;
      height: pxTorem(40);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:0 10px;
      font-size :pxTorem(15)
    }
}
.cont{
  width: 100%; 
  overflow: hidden;
  overflow-x: auto;
  ul {
    display: flex;
    list-style: none;
    flex-wrap :wrap;
    justify-content :space-around;
    height: 100%;
    li {
      width: 100px;
      height: pxTorem(180); 
      margin :pxTorem(10) 0;
      flex-shrink: 0;
      border: 1px solid rgb(0, 167, 14);
      position :relative;
      p{
        width :100%
        position :absolute;
        bottom:0;
        left: 0;
        display :flex;
        flex-direction :column;
        .tit{
          width :100%;
          height :pxTorem(15);
          font-size :pxTorem(10);
          overflow :hidden;
          line-height :pxTorem(15)
        }
        .img {
          width: 80px;
          height: 120px;
        }
      }
    }
  }
}
</style>