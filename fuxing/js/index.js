$(document).ready(function() {
	var $tab_li = $('.tabs-hj-trigger li');
	$tab_li.hover(function() {
		$(this).addClass('current').siblings().removeClass('current');
		var index = $tab_li.index(this);
		$('.tabs-hj-panel').eq(index).show().siblings().hide();
	});
});
//医院展示js


$(document).ready(function() {
	var $tab_li = $('.tabs-bz-trigger li');
	$tab_li.hover(function() {
		$(this).addClass('current').siblings().removeClass('current');
		var index = $tab_li.index(this);
		$('.tabs-bz-panel').eq(index).show().siblings().hide();
	});
});
//代孕新闻js


$(document).ready(function() {
	var $tab_lif = $('.tabs-foot-trigger li');
	$tab_lif.hover(function() {
		$(this).addClass('current').siblings().removeClass('current');
		var index = $tab_lif.index(this);
		$('.tabs-foot-panel').eq(index).show().siblings().hide();
	});
});
//footer友情链接js



var m=1;
var timer;
function run(){

       			$(".tabpic_content").stop(true,true).animate({left:"-="+$(".tabpic").width()+"px"},1000,function(){  	
       				var n=Math.abs(eval($(".tabpic_content").css("left").replace("px",""))/$(".tabpic").width());			
       				if(n+1==$(".tabpic a").length){
       					$(".tabpic_content").css("left",0);
       					n=0;
       				}
       				$(".tabpic .tabpic_pages li").eq(n).addClass('current').siblings('.current').removeClass('current');
       				$(".tabpic_title").html($(".tabpic_content img").eq(n).attr("alt"));
       			});

       		}

       	$(function(){
       		$(".tabpic").children().wrapAll('<div class="tabpic_content"></div>').end().append('<div class="tabpic_title"><h4></h4></div>').append('<ul class="tabpic_pages"></ul>');
       		
       		$(".tabpic a").each(function(i){
				$(".tabpic .tabpic_pages").append("<li>"+(i+1)+"</li>");
       		})

       		$(".tabpic .tabpic_pages li:first").addClass('current');
       		

       		$(".tabpic_content a:first").clone(true).appendTo($(".tabpic_content"))
       		$(".tabpic_content").width($(".tabpic").width()*$(".tabpic a").length);



       		timer=setInterval("run()",3000)

       		
       		$(".tabpic").hover(function(){
       			clearInterval(timer);
       		},function(){
       			timer=setInterval("run()",3000)
       		})

       		$(".tabpic .tabpic_pages li").click(function(){
       			$(this).addClass('current').siblings('.current').removeClass('current');
       			var n=$(this).index(".tabpic .tabpic_pages li");
       			$(".tabpic_content").stop(true,true).animate({left:$(".tabpic").width()*n*-1+"px"},1000);
       		})

       	})

//首页小图js结束