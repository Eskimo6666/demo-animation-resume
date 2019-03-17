function writeCode(prefix,code,fn) {
    let domCode = document.querySelector('#code')
   
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
    let timer = setInterval(() => {
        n += 1
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
   background:#eee;
}

#code{
  border:1px solid red;
  padding:16px;
}

/*我需要一点高亮*/

.token.selector{color:#690;}
.token.property{color:#905;}
.token.function{color:#DD4A68;}

/*加点3D效果*/
#code{
    transform: rotate(360deg)
}

/*不玩了，我来介绍我自己吧！*/
/*我需要一张白纸*/

#code-wrapper{
    width: 50%; left: 0; position: fixed; 
    height: 100%;
  }
#paper > .content {
   display: block;
  }
  /* 于是我就可以在白纸上写字了，请看右边 */
  
`
var result2 = `
/*
接下来我们用一个优秀的库 marked.js
把 Markdown 变成 HTML
*/
`
var md = `
# 自我介绍

我叫Eskimo

1998年6月出生

希望找到一份前端工作

杭州电子科技大学毕业

自学前端半年


# 技能介绍

- 熟悉Javascript css

# 项目介绍

1. 轮播
2. Canvas画板
3. 键盘导航网站
4. 动态简历

# 联系方式

- QQ:1145400536
- Tell:18767188399
- E-mail:16081627@hdu.edu.cn

`
let result3 = `
/*
*这就是我的会动的简历
*谢谢观看
*/
`

writeCode('', result ,()=>{
    
    createPaper(()=>{
        writeMarkdown(md,()=>{
            writeCode(result,result2,()=>{
                markdownToHtml(()=>{
                    writeCode(result+result2,result3,()=>{
                        console.log('完成')
                    })
                })
            })
        })
    })      //回电话
})
console.log('执行');

function createPaper(fn) {
    
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
}


function markdownToHtml(fn){
  let div = document.createElement('div')
  div.className = 'html markdown-body'
  div.innerHTML = marked(md)
  let markdownContainer = document.querySelector('#paper>.content')  
  markdownContainer.replaceWith(div)
  fn && fn.call()
}