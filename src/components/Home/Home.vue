<template>
  <div>
    <Header />
    <List :datalist="datalist"/>
  </div>
</template>
<script>
import Header from './pages/Header.vue';
import List from './pages/List.vue'
export default {
  props:{

  },
  components:{
    Header,
    List
  },
  data(){
    return {
      datalist:{
        coming:{
          title:"",
          data:[]
        },
        theaters:{
           title:"",
           data:[]
        },
        top250:{
           title:"",
           data:[]
        }
      }
    }
  },
  computed:{

  },
  methods:{
      gitHtml(url,name){
        let title=""
        if(name==="coming")  title="最近上映"
        if(name==="theaters")  title="热门电影"
        if(name==="top250") title="top250"
        
        this.axios.get(url)
          .then(res => {
            this.datalist[name].title=title
            this.datalist[name].data=res.data.subjects
            console.log(this.datalist)
          })
      }
  },
  created(){
    this.gitHtml("/api/v2/movie/coming_soon", "coming");
    this.gitHtml("/api/v2/movie/in_theaters", "theaters");
    this.gitHtml("/api/v2/movie/top250", "top250");
  },
  mounted(){

  }
}
</script>
<style scoped lang="">

</style>