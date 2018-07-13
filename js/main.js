
/*
 *--------------字符串命名说明--------------------
 * introduce = 介绍
 * sty1 ==the first  style   第一种样式
 * trs1 = the first transition language   第一组过渡语
 * lingtheight == gramm lightheight     高亮语法
 * scrollRight == 源码版向右移动
 * drawBoard ==画板，用于盛放故事内容
 * resume == 故事内容
 * str == 总的拼接字符串
 * 
 */

/*字符拼接区*/
     var introduce='  \/*大家好，我叫戚兆宇，来自河北唐山*\/\n  \/*我今年26岁，毕业于天津理工大学，计算机科学与技术学院*\/\n  \/*混迹软件圈三年有余，仍是java菜鸡一枚*\/\n  \/*我的理想是当一名人民教师*\/\n  \/*噗......*\/\n  \/*然后写一封辞职信，世界那么大，我想去看看*\/\n  \/*可是钱包这么小，我哪也去不了*\/\n  \/*噗......*\/\n  \/*等等，老司机开车超速了......*\/\n  \/*言归正传，今天是Q氏先生故事会周刊第一期，主题：笑话*\/\n  \/*来看看我为大家准备的段子吧！先来点CSS，加点基本样式*\/';
     var sty1='\n   body{\n    transition: all 1s;\n    background:#3f5263;\n     }\n    #sourceBoard{\n    font-family:"微软雅黑";\n    overflow:auto;\n    border:3px solid black;\n    border-radius:5px;\n    width:35%;\n    height:600px;\n    font-size:14px;\n    font-weight:900;\n  }';
    var trs1 = '\n  \/*似乎有点单调，那么就让语法高亮吧*\/';
    var lightheight = '\n  #sourceBoard{\n   background:#ffffcc\n  }\n    .token.property{\n   color:#905;\n  }\n   .token.comment{\n     color:#cc3300;\n  }\n    .token.selector{\n    color:#690;\n  }\n  '; 
    var trs2 = '  \/*接下来，我开始讲故事。先将刚才写的样式踢到一边儿去*\/'
    var scrollRight = '\n  #sourceBoard{\n    -webkit-transform: rotateY(10deg);\n    -moz-transform: rotateX(10deg);\n    position:relative;\n    left:60%;\n    } \n    \/*OK,接下来开始准备故事画板*\/\n  '
    var drawBoard = '#drawBoard{\n  color:#fff;\n  float:left;\n  position:relative;\n  top:-650px;\n  width:50%;\n  height:620px;\n  border:3px solid black;\n  border-radius:5px;\n  overflow:auto;\n  }'
    var resume= '\n  # <center>故事篇（一）之开心一刻</center>\n  ----------------------------------------------\n  ### 1.你是怎么看孩子的 ### \n  五岁的女儿在沙发上唾着了，突然女儿一个翻身从沙发摔到了地上！\n  可是这家伙很坚强，并没有哭；而是爬到我面前，啪地给了我一巴掌！\n  委屈地说道：你是怎么看孩子的！\n  ### 2.你的牌打的也忒好了 ### \n  甲：“你手机斗地主一直输，是什么原因让你坚持下去的？”\n  乙：“因为队友一直鼓励我。\n  甲：“怎么鼓励的？”\n  乙：“你的牌打的也忒好了！”\n  甲：“……"\n  ### 3.我是亲生的吗 ### \n  我从小就感觉自己不是亲生的。\n  有一次我在外面玩，不小心掉粪坑里了，妈妈看到说：“这孩子我们不要了！回去再生一个吧。”\n  后来长大点，一次发高烧了，妈妈用手摸了下我的额头，立刻把手缩回去了说：“好烫啊！”\n  爸爸立马一个大嘴巴子抽了过来说：“看把你妈烫的！”\n  我是亲生的吗？‍‍‍‍\n  ### 4.贾微微是谁 ### \n  老师提问小明：“你知道二战时期英国的首相是谁吗？”\n  小明：“嗯？我不知道。”\n  老师：“那你今后一定要多花功夫在学习上啊！”\n  小明问：“老师，你知道贾微微是谁吗？”\n  老师：“谁？我不知道。”\n  小明：“那你今后一定要多花功夫在你老公身上啊！”\n  ### 5.想想竟然有些激动 ### \n  四岁的女儿从幼儿园回来，气呼呼的对我说：\n  “爸爸，老师一点都不好，总是凶我，中午还不拍拍我睡觉。”\n  我说：“老师不可能像妈妈一样，那么细微地照顾那么多人，你要听话。”\n  女儿：“让老师和妈妈换换就好了，妈妈每天在幼儿园陪我，老师每天在家陪爸爸。”\n  我想想竟然有点激动呢。‍‍‍‍\n  ### 6.我们是不可能的 ### \n  一天不是很忙，朋友叫我过去帮忙，帮他写结婚请帖。\n  我写了好久，总感觉哪里不对，可是怎么看也看不出哪里不对。\n  这时朋友的未婚妻过来了，看了一眼说：你还是把新郎的名字改了吧，我们是不可能的。\n  我：......\n  ### 勾引方式 ### \n  ----------------------------------------------\n  1、我的微信：qhj720\n  2、我的微信公众号：Q氏先生\n  3、我的GitHub:(https://github.com/eqizhaoyu)'
    var trs3 = '\n  \/*对了，这个故事是markdown语法，应该改成html才看着舒服。\n  *接下来变个魔术\n  *倒数3个数字\n  *3......\n  *2......\n  *1......\n  *OK，故事篇（一）完结，好好享用吧！\n  *更多知识、更多精彩、更多欢乐，敬请关注微信公众号：Q氏先生*/'
    var str = introduce.concat(sty1).concat(trs1).concat(lightheight).concat(trs2).concat(scrollRight).concat(drawBoard).concat(resume).concat(trs3);
    
	/*常规定义区*/
	var styleTag = document.getElementById('styleTag');
	var sourceBoard = document.getElementById('sourceBoard');
	var n = 0;
	 
/*源码版控制区*/	 
var controller= setInterval(put,90);
	 function put(){

			/*吐代码区域*/
			n++;
		
			if(n>0&&n<=1080){
					sourceBoard.innerHTML =str.substring(0,n)
		
			    styleTag.innerHTML =str.substring(0,n);

			}
			
			/*溢出下拉*/
			if(n>=380){
					$('#sourceBoard').animate({
						scrollTop: 1000
						}, 50);
			}
			/*代码高亮*/
			if(n>=465&&n<=1080){
				sourceBoard.innerHTML =  Prism.highlight(str.substring(0,n), Prism.languages.css);
			
			}
		
		/*创建pre简历板*/
		if(n>=672&&n<=1080){
				
				if(document.getElementById('drawBoard')){
					console.log('drawBoard元素已经存在');
				
				}
				else{
					var drawBoard = document.createElement('pre');
				    drawBoard.id = 'drawBoard';
				    document.body.appendChild(drawBoard);
				  
				} 

			}
			
			/*简历板溢出下拉*/
			if(n>1080&&n<2142){
			var drawBoard = document.getElementById('drawBoard');
				drawBoard.innerHTML =str.substring(1080,n);
				
					$('#drawBoard').animate({
						scrollTop: 1000
						}, 50);
			}

		/*简历板写完之后，需要在sourceBoard中写入魔术代码*/	
	    if(n>=2142){
	     
	     	  sourceBoard.innerHTML =  Prism.highlight(str.substring(0,1080), Prism.languages.css)+Prism.highlight(str.substring(2142,n), Prism.languages.css);
	     	  
	     }
	     
	     /*魔术代码*/
	     if(n>=2236){
	     	var drawBoard = 	document.getElementById('drawBoard');
	     	drawBoard.innerHTML =marked(str.substring(1080,2142));
	     	
	     		if(n>str.length){window.clearInterval(controller)}
	     }
				
			console.log(n)

};
