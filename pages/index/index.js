function play(){
	var mySwiper = new Swiper('.swiper-container',{
		         loop:true,    //是否无缝
		         speed: 1000,
		         getbCursor: true,
		         autoplay:{
		         	delay: 3000,      //切换时间间隔
		         	disableOnInteraction: false     //交互后自动播放
		         },
				 pagination: {
				 	el: ".swiper-pagination",  //点击指示器切换
				 	clickable:true
				 }
				});	
               $(".swiper-container").onmouseover = function(){
               	  mySwiper.autoplay.stop();
               };
               $(".swiper-container").onmouseout = function(){
               	  mySwiper.autoplay.start();
               };
}
play();

    // 鼠标拖动图片事件
        var isdrag = true;
        var tempY, y;
 
        function dragStart(e) {
            isdrag = true;
            tempY = parseInt($("#rightImg").css("top") + 0);
            y = e.touches[0].pageY;//获取初始位置的高度
        }
        function dragMove(e) {
            if (isdrag) {
                var curY = tempY + e.touches[0].pageY - y;//获取移动的高度
                //边界判断
                curY = curY < 0 ? 0 : curY;   //规定顶部的边界
                curY = curY < 422 ? curY : 422;//规定底部的边界
				//规定底部的边界，因为是在里面的content盒子里面，所以这个底部边界是计算出来的：document.documentElement.clientHeight
				// console.log(curY);
                $("#rightImg").css({
                    "top": curY
                });
                //禁止浏览器默认事件
                e.preventDefault();
            }
        }
 
        function dragEnd() {
            isdrag = false;
        }
 
        $(function() {      //div拖动的三个阶段
            document.getElementById("rightImg").addEventListener("touchstart", dragStart);
            document.getElementById("rightImg").addEventListener("touchmove", dragMove);
            document.getElementById("rightImg").addEventListener("touchend", dragEnd);
        });



