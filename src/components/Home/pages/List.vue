<template>
  <div>
    <div class="contlist" v-for="(item,index) in datalist" :key="index">
      <div class="listTop">
          <h3>{{item.title}}</h3>
          <span @click="btns(item)">更多</span>
      </div>
      <div class="cont">
        <ul>
            <li v-for="(v,i) in item.data" :key="i"  @click="todetail(v)">
              <img class="img" :src="v.images.large" alt />
              <p>
                <span class="tit">{{v.title}}</span>
                <Start :item="v" />
              </p>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Start from "@/components/Start";
export default {
  props:{
    datalist:Object
  },
  data() {
    return {
     
    };
  },
  components: {
    Start
  },
  mounted() {
    
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
    btns(item) {
      this.$router.push({
            path: "/Lists",
            query: {
              title:item.title,
            }
        })
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
  height: pxTorem(180); 
  overflow: hidden;
  overflow-x: auto;
  ul {
    display: flex;
    list-style: none;
    height: 100%;
    li {
      width: 100px;
      height: 100%;
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


