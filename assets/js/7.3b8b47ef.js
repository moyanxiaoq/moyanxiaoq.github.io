(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{297:function(t,i,s){},400:function(t,i,s){t.exports=s.p+"assets/img/code.d2fc0f2e.png"},414:function(t,i,s){"use strict";var a=s(297);s.n(a).a},430:function(t,i,s){"use strict";s.r(i);var a=[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"img-div"},[i("img",{staticClass:"code-img",attrs:{src:s(400)}}),this._v(" "),i("p",[this._v("欢迎关注微信公众号：快乐学习与分享")])])}],n=(s(316),s(35),s(27),s(157),s(402)),e=s.n(n),r=s(409),h=s.n(r),o=(s(152),s(410),s(411),s(154),s(47),s(15)),c=s(17),d=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=i.id,a=void 0===s?"":s,n=i.dom,e=void 0===n?null:n,r=i.width,h=void 0===r?window.document.documentElement.clientWidth||window.document.body.clientWidth:r,c=i.maxWidth,d=void 0===c?window.document.documentElement.clientWidth||window.document.body.clientWidth:c,u=i.minWidth,l=void 0===u?320:u,m=i.color,v=void 0===m?"#006699":m;if(Object(o.a)(this,t),!this.isSupport())throw new Error('浏览器太古老，不支持 "canvas"');var g=a&&document.getElementById(a);if(!(g=g||e))throw new ReferenceError("canvas 不存在");if("number"!=typeof h||h<0)throw new Error('实例参数 "width" 不正确');if("number"!=typeof l||l<0)throw new Error('实例参数 "minWidth" 不正确');if("number"!=typeof d||d<0)throw new Error('实例参数 "maxWidth" 不正确');this.color=v,this.canvasW=h,this.minWidth=l,this.maxWidth=d,this.balls=[],this.curShowTimeSeconds=this.getCurrentShowTimeSeconds(),this.colors=["51, 181, 229","0, 153, 204","170, 102, 204","153, 51, 204","153, 204, 0","102, 153, 0","255, 187, 51","255, 136, 0","255, 68, 68","204, 0, 0"],this.digits=[[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]],[[0,0,0,1,1,0,0],[0,1,1,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[1,1,1,1,1,1,1]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,0,1,1,1,0],[0,0,1,1,1,1,0],[0,1,1,0,1,1,0],[1,1,0,0,1,1,0],[1,1,1,1,1,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,1,1]],[[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,1,1,0,0,0,0]],[[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]],this.cxt=g.getContext("2d"),this.timer=null,this.setCanvasSize(this.canvasW),this.stop=this.stop.bind(this)}return Object(c.a)(t,[{key:"isSupport",value:function(){return!!document.createElement("canvas").getContext}},{key:"setCanvasSize",value:function(t){this.canvasW=t<this.minWidth?this.minWidth:t,this.canvasW=t>this.maxWidth?this.maxWidth:t,this.canvasH=Math.round(2*this.canvasW/3),this.marginL=Math.round(1.5*this.canvasW/10),this.marginT=Math.round(this.canvasH/5),this.radius=Math.round(7*this.canvasW/10/108)-1,this.marginL=parseInt((this.canvasW-108*(this.radius+1))/2),this.cxt.canvas.width=this.canvasW,this.cxt.canvas.height=this.canvasH}},{key:"getCurrentShowTimeSeconds",value:function(){var t=new Date;return 3600*t.getHours()+60*t.getMinutes()+t.getSeconds()}},{key:"drawABall",value:function(t,i){this.cxt.beginPath(),this.cxt.arc(t,i,this.radius,0,2*Math.PI),this.cxt.closePath(),this.cxt.fill()}},{key:"renderDigit",value:function(t,i,s){this.cxt.fillStyle=this.color;for(var a=this.digits[s],n=0;n<a.length;n++)for(var e=0;e<a[n].length;e++)if(1===a[n][e]){var r=t+2*e*(this.radius+1)+(this.radius+1),h=i+2*n*(this.radius+1)+(this.radius+1);this.drawABall(r,h)}}},{key:"addBalls",value:function(t,i,s){for(var a=this.digits[s],n=0;n<a.length;n++)for(var e=0;e<a[n].length;e++)if(1===a[n][e]){var r={x:t+2*e*(this.radius+1)+(this.radius+1),y:i+2*n*(this.radius+1)+(this.radius+1),vx:4*Math.pow(-1,Math.ceil(1e3*Math.random())),vy:Math.floor(-5*Math.random()),g:1+Math.random(),color:this.colors[Math.floor(Math.random()*this.colors.length)],opcity:1};this.balls.push(r)}}},{key:"getHoursBySeconds",value:function(t){return parseInt(t/3600)}},{key:"getMinutesBySeconds",value:function(t){var i=this.getHoursBySeconds(t);return parseInt((t-3600*i)/60)}},{key:"getSeconds",value:function(t){return parseInt(t%60)}},{key:"updateBalls",value:function(){for(var t=0;t<this.balls.length;t++){var i=this.balls[t];i.x+=i.vx,i.y+=i.vy,i.vy+=i.g,i.y>=this.canvasH-this.radius&&(i.y=this.canvasH-this.radius,i.vy=.75*-i.vy),i.opcity-=.05}for(var s=0,a=0;a<this.balls.length;a++){var n=this.balls[a];n.opcity>0&&n.x+this.radius>0&&n.x-this.radius<this.canvasW&&(this.balls[s++]=n)}for(;this.balls.length>s;)this.balls.pop()}},{key:"update",value:function(){var t=this.getCurrentShowTimeSeconds(),i=this.curShowTimeSeconds%60,s=t%60;if(s!==i){var a=this.getHoursBySeconds(this.curShowTimeSeconds),n=this.getHoursBySeconds(t),e=this.getMinutesBySeconds(this.curShowTimeSeconds),r=this.getMinutesBySeconds(t);parseInt(a/10)!==parseInt(n/10)&&this.addBalls(this.marginL+0,this.marginT,parseInt(a/10)),parseInt(a%10)!==parseInt(n%10)&&this.addBalls(this.marginL+15*(this.radius+1),this.marginT,parseInt(a/10)),parseInt(e/10)!==parseInt(r/10)&&this.addBalls(this.marginL+39*(this.radius+1),this.marginT,parseInt(e/10)),parseInt(e%10)!==parseInt(r%10)&&this.addBalls(this.marginL+54*(this.radius+1),this.marginT,parseInt(e%10)),parseInt(i/10)!==parseInt(s/10)&&this.addBalls(this.marginL+78*(this.radius+1),this.marginT,parseInt(i/10)),parseInt(i%10)!==parseInt(s%10)&&this.addBalls(this.marginL+93*(this.radius+1),this.marginT,parseInt(s%10)),this.curShowTimeSeconds=t}this.updateBalls()}},{key:"render",value:function(){this.cxt.clearRect(0,0,this.canvasW,this.canvasH);var t=this.getHoursBySeconds(this.curShowTimeSeconds),i=this.getMinutesBySeconds(this.curShowTimeSeconds),s=this.getSeconds(this.curShowTimeSeconds);this.renderDigit(this.marginL,this.marginT,parseInt(t/10)),this.renderDigit(this.marginL+15*(this.radius+1),this.marginT,parseInt(t%10)),this.renderDigit(this.marginL+30*(this.radius+1),this.marginT,10),this.renderDigit(this.marginL+39*(this.radius+1),this.marginT,parseInt(i/10)),this.renderDigit(this.marginL+54*(this.radius+1),this.marginT,parseInt(i%10)),this.renderDigit(this.marginL+69*(this.radius+1),this.marginT,10),this.renderDigit(this.marginL+78*(this.radius+1),this.marginT,parseInt(s/10)),this.renderDigit(this.marginL+93*(this.radius+1),this.marginT,parseInt(s%10));for(var a=0;a<this.balls.length;a++){var n=this.balls[a],e=n.x,r=n.y,h=n.color,o=n.opcity;this.cxt.fillStyle="rgba(".concat(h,", ").concat(o,")"),this.drawABall(e,r)}}},{key:"start",value:function(){var t=this;!function i(){t.render(),t.update(),t.timer=setTimeout(i,50)}()}},{key:"stop",value:function(){window.clearTimeout(this.timer)}}]),t}(),u=(s(413),Array(7).fill(1).map((function(t,i){return 50*(i+1)+25}))),l=Array(7).fill(1).map((function(t,i){return 50*i+25})),m={components:{VueDraggableResizable:h.a},computed:{xPos:function(){return e()(u)},yPos:function(){return e()(l)},pieces:function(){var t=this;return this.xPos.map((function(i,s){return{x:i,y:t.yPos[s],className:s%2==0?"black":"white"}}))},words:function(){return e()("临破咒师悲爱心魄兵斗者皆阵列魂鬼财神权贪嗔痴佛悟空色恨愤怒怨责".split(""))}},mounted:function(){var t=new d({dom:this.$refs.canvas,maxWidth:850,color:"#999"});t.start(),this.$once("hook:beforeDestroy",(function(){t.stop(),t=null}))}},v=(s(414),s(5)),g=Object(v.a)(m,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"home"},[t._l(t.pieces,(function(i,a){return s("vue-draggable-resizable",{key:i.className+a,attrs:{snap:!0,w:50,h:50,x:i.x,y:i.y,"class-name":i.className,grid:[50,50],resizable:!1,isConflictCheck:!0}},[t._v("\n    "+t._s(t.words[a])+"\n  ")])})),t._v(" "),s("canvas",{ref:"canvas",staticClass:"clock",staticStyle:{transition:"0.7s"}},[t._v("您的浏览器太古老，不支持 canvas")]),t._v(" "),t._m(0),t._v(" "),s("h2",{staticClass:"motto"},[t._v("人生如棋,我愿为卒,行动虽慢,谁曾见我后退半步!")])],2)}),a,!1,null,"27804381",null);i.default=g.exports}}]);