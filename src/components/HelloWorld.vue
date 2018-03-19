<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>笔记在 es6_learning 目录下</h2>
    <hr>
    <ul class="es-ul">
      <li v-for="item in consoleData" v-text="item"></li>
    </ul>
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
import Deconstruction from "../es6_learning/deconstruction";
import Es6Function from '../es6_learning/functions';
import NewObject from '../es6_learning/new_object';
import NewArray from '../es6_learning/new_array';
import TestGenerator from '../es6_learning/generator';
import TestNewClass from '../es6_learning/newclass';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '汤大叔的Es6学习项目',
      consoleData:[],
    }
  },
  created(){
      // RegExpLearning.testRegExp();
      RegExpLearning.testIncludes();
      //RegExpLearning.testStartsWith();
      RegExpLearning.testEndsWith();
      //Deconstruction.testDst();
      // RegExpLearning.testRepeat();
      /* this.consoleData.push(ChapterOne.constantize(Object.create({name:'test'})));
      this.consoleData.push(RegExpLearning.testFlags());
      this.consoleData.push(Es6Function.testDefaultParams(2));
      this.consoleData.push(Es6Function.testNewMax());
      this.consoleData.push(NewObject.testObjectIs());
      this.consoleData.push(NewArray.testNewArray());
      this.consoleData.push(TestGenerator.main())
      this.consoleData.push(TestNewClass.testFoo()); */
      //TestGenerator.testObjIterator();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.es-ul li{
  width: 100%;
  text-align: left;
      padding: 0 10%;
    list-style: none;
}
</style>
