

//那如何判断页面是在移动端还是PC端打开的呢？网上有很多方法，写的或难或简单，实际上一行代码就够了

window.location.href = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? "https://www.baidu.com/" :  "http://news.baidu.com/";
　　

//以上代码利用了正则表达式和三目运算符，含义就是如果是移动端打开的话那就跳转到 "https:www.baidu.com/" ，如果不是就跳转到"http://new.baidu.com/"，这个看不懂的话，那我下面这样写就很容易理解了吧

 

if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = "https://www.baidu.com/";
} else {
    window.location.href = "http://news.baidu.com/";
}
 

什么？if里面的判断还是看不懂？实际上就是利用正则去判断 navigator.useragent 是否含有 Android/webOs/iphone 等字符串，并且利用修饰符 "i" 做了不区分大小写，然后用正则的方法 test 去判断是否满足，如果这种方式不理解的话完全可以利用字符串的 indexOf 方法去判断。
