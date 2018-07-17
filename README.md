# music-app

> A Vue.js project

## 介绍
#其实就是一个Web，没有App的外壳，只有内部的HTML，对所有手机端做了适配，是一个我对于学习Vue的一个检验成果项目，基本实现QQ音乐的歌手及播放功能，以下介绍一下我的构建思路及学习过程。
### 环境搭建
#vue-cli全家桶，个人不建议引入jQuery，加大了内存，DOM操作也不符合vue的数据驱动的理念，vue-router+vuex+axios基本搞定。
### 布局
#全部都是flex布局，相对于浮动+定位，flex布局的适配可能会比较方便和稳定，但我写下了发现多了比较多的多余标签（用来将子元素分块），不过只要将布局细化，将每个部分想成一个包一个的方块，然后再开始代码，这真的是很重要，一边写一边布局，之后你会花大量时间去调整。这边用了Element-UI的一些样式模板，个人比较喜欢他们的颜色，所以给我自己写的换了个皮肤，有些地方不是很满意，修改了一些源码。CSS编译用的Less，样式也可以模块化，样式也有“全局变量”。
### 动效
#Vue中自带了transition标签，简直不要太好用，这边还用到了better-scroll框架，阻止浏览器默认滚动，实现滑动缓动，使体验更加真实。
### 数据
#把所用到的量都取个名字，变量用小写，常量用大写，用let/const取代var，优先使用const，就不用担心全局变量污染了。需要操作的数据放在data中，接受props参数写成对象形式，声明一下数据类型，放个默认值防止报错会更好。数据驱动，明确你的数据是控制哪个部分的视图，取名字是最好的方法，只操作数据，尽量不要操作DOM。简单的数据传输使用props和$emit，复杂或者频繁的数据传输使用vuex，将数据集中管理到哪都能用，想改即改。




For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
