# css 的程序性
- BEM
block weui-cell 项目名称 xp-
- stylus
CSS 有太多规则
stylus 是css的超集，可以编译成为css
-省去了{：；} 上高速
-stylu -w cell.styl -o cell.css
写的styl文件，HTML无法显示
-o 编译一下 cell.css
-w 边写边编译 
-弹性布局 flex
1.如何启用
display:flex|inline|block|inline-block
弹性布局设置在父元素上 启动了新的空间
原有的盒子属性被打破了，
.weui-cell(display:flex)>新的空间，原有块级能力被干掉。weui-cell__bd(flex:1主元素)+.weui-cell__ft(辅元素)
-伪元素
css高级使用技巧，唯一一个可以在css中声明的HTML元素，箭头、边框等高级特性
content 属性是必须的
定位 pos:r pos:a
乾坤大挪移 手动移动