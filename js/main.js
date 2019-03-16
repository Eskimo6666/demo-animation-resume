function writeCode(prefix,code,fn) {
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ""
    let n = 0
    console.log('设置闹钟')
    let timer = setInterval(() => {
        n += 1
        console.log('开始写代码')
        domCode.innerHTML =Prism.highlight( prefix  + code.slice(0,n), Prism.languages.css)   //把code的前n个字符以css的形式是高亮，然后放到domCode
        styleTag.innerHTML = prefix + code.slice(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(timer)
            fn && fn.call()       //打电话
        }
    }, 0)
}

function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    console.log('设置闹钟')
    let timer = setInterval(() => {
        n += 1
        console.log('开始写markdown')
        domPaper.innerHTML =markdown.slice(0,n)   //把code的前n个字符以css的形式是高亮，然后放到domCode
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(timer)
            fn && fn.call()       //打电话
        }
    }, 0)
}




var result = `/*
*面试官你好，我是Eskimo
*我将以动画的形式来介绍我自己
*只用文字介绍太单调了
*我就用代码来介绍吧
*首先准备一些样式
*/

*{
  transition: all 1s;
}

html{
    background:rgb(222,222,222);
    font-size:16px;
}

#code{
  border:1px solid red;
  padding:16px;
}

/*我需要一点高亮*/

.token.selector{
    color:#690;
}
.token.property{
    color:#905;
}
.token.function{
    color:#DD4A68;
}

/*加点3D效果*/
#code{
    transform: rotate(360deg)
}

/*不玩了，我来介绍我自己吧！*/
/*我需要一张白纸*/

#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%;
}

#paper{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    background:#ddd;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:16px;
}
#paper >.content{
    background:white;
    width:100%;
    height:100%;

}
`
var result2 = `
#paper{
}
/*
接下来把 Markdown 变成 HTML
*/
/*
接下来给 HTML 加样式
*/
/*
这就是我的会动的简历了
*/
`
var md = `
#自我介绍

我叫Eskimo
1998年6月出生
杭州电子科技大学毕业
自学前端半年
希望找到一份前端工作

#技能介绍

熟悉Javascript css

#项目介绍

1. 轮播
2. Canvas画板
3. 键盘导航网站
4. 动态简历

#联系方式

QQ:1145400536
Tell:18767188399
E-mail:16081627@hdu.edu.cn

`
writeCode('', result ,()=>{
    console.log("哦你结束了")
    createPaper(()=>{
        writeCode(result,result2,()=>{
            writeMarkdown(md,()=>{
                markdownToHtml(()=>{
                    writeCode(result+result2,result3)
                })
            })
        })
    })      //回电话
})
console.log('执行');

function createPaper(fn) {
    console.log("创建paper")
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
}

