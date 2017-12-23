<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>笔记在 es6_learning 目录下</h2>
    <hr>
    <!-- <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
import ChapterOne from "../es6_learning/let_const";
import RegExpLearning from "../es6_learning/regexp";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '汤大叔的Es6学习项目'
    }
  },
  created(){
      //ChapterOne.testLetAndConst();
      //RegExpLearning.testRegExp();
      //RegExpLearning.testIncludes();
      //RegExpLearning.testStartsWith();
       RegExpLearning.testEndsWith();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
