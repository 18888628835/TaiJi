window.onload = function () {
    let html = document.querySelector('.html')
    let n = 0
    let str2 = ''
    let style = document.querySelector('#style')
    let str = `/*你好
    我是邱彦兮，我现在要为你画一个八卦图
    首先我要画一个圆*/
    .div{
        position:fixed;
        top:20px;
        right:20px;
        width:400px;
        height:400px;
        border:1px solid #ccc;
        border-radius:50%;
        word-break:normal;
    }
    /*再涂一点颜色*/
    .div{
        background: linear-gradient(90deg, 
        rgba(255,255,255,1) 50%, 
        rgba(0,212,255,1) 50%, 
        rgba(0,0,0,1) 50%);
    }
    /*再加两个小球*/
    .div::before,.div::after{
        content: '';
        position:absolute;
        transform:translateX(50%);
        width: 50%;
        height: 50%;
        border-radius:50%;
            }
    /*第一个小球*/
    .div::before{
        top:0px;
        background:#000;
        background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
           } 
    /*第二小球*/
    .div::after{
        bottom:0px;
        background:#fff;
        background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 99%);
    }
    /*看吧 画好啦*/
    /*我想让他转起来噢*/
    /*好哒 oo^_^oo */
    .div{
        animation:rotate 30s infinite linear;
        -webkit-animation:rotate 30s infinite linear; 
    }
    @keyframes rotate
{
    100%{transform: rotate(3600deg);}
}
@-webkit-keyframes rotate{
    100%{-webkit-transform: rotate(3600deg);}    
} 
/*做完啦*/
    `

    function write() {
        if (str[n] === '\n') {
            str2 += '</br>'
        } else {
            str2 += str[n]
        }
        html.innerHTML = str2
        style.innerHTML = str.substring(0, n)
        window.scroll(0, 99999)
        html.scroll(0, 99999)
        if (n >= str.length - 1) {
            return
        } else {
            setTimeout(() => {
                write()
            }, 20)
        }
        n++
    }
    write()
}