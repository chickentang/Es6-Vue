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
import TestSetMap from '../es6_learning/set_map';
import Countdown from '../es6_learning/weakmap';
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
      // RegExpLearning.testIncludes();
      //RegExpLearning.testStartsWith();
      // RegExpLearning.testEndsWith();
      // RegExpLearning.testTemplateStr();
      //Deconstruction.testDst();
      // RegExpLearning.testRepeat();
      // this.consoleData.push(ChapterOne.constantize(Object.create({name:'test'})));
      // this.consoleData.push(RegExpLearning.testFlags());
      // this.consoleData.push(Es6Function.testDefaultParams(2));
      // this.consoleData.push(Es6Function.testNewMax());
      
      // this.consoleData.push(NewArray.testNewArray());
      // this.consoleData.push(TestGenerator.main())
      // this.consoleData.push(TestNewClass.testFoo());
      //TestGenerator.testObjIterator();
      // var id = 55;
      // Es6Function.thisScope.call({id:100});
      // Es6Function.testArguments(1,2,5,6); //args:  Arguments(4) [1, 2, 5, 6, callee: (...), Symbol(Symbol.iterator): ƒ]

      // Es6Function.add(1,1);
      // Es6Function.add(1);
      // Es6Function.add(1);
      // this.consoleData.push(NewArray.translate(1,2,3));
      // this.consoleData.push(NewArray.newFuns());
      // this.consoleData.push(NewArray.testCopyWithin());
      // this.consoleData.push(NewArray.testFind());
      // this.consoleData.push(NewArray.testFindIndex());
      // this.consoleData.push(NewArray.testFill());
      // this.consoleData.push(NewArray.testIncludes());
      // this.consoleData.push(NewArray.testEntries());
      // this.consoleData.push(NewObject.testObjectAssign());
      // this.consoleData.push(NewObject.testObjectValues());
      // this.consoleData.push(NewObject.testObjectEntries());
      // TestSetMap.testSet();
      // this.consoleData.push(TestSetMap.testArrayUniq());
      // this.consoleData.push(TestSetMap.changeSet());
      // TestSetMap.testMap();
      // const strMap = new Map();
      // strMap.set('a',123);
      // this.consoleData.push(TestSetMap.strMapToObj(strMap));
      // this.consoleData.push(TestSetMap.objToStrMap({'b':432}));
      const c = new Countdown(2,()=>console.log('DONE'));
      c.dec();
      c.dec();
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
