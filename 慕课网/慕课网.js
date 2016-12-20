var left=document.querySelector(".left");
var right=document.querySelector(".right");
var fo=document.querySelectorAll(".fo li");
var ft=document.querySelectorAll(".ft li");
var index=0;
var length=ft.length;
var timer=null;
var shouji=document.querySelector(".shouji");
var xiala=document.querySelector(".xialatu");
var weixin=document.querySelector(".weixin");
var weixin_tu=document.querySelector(".weixin_tu");
var haha=document.querySelector(".haha");
var gua_erweima2=document.querySelector(".gua_erweima2");
var heihei=document.querySelector('.heihei');
var gua_erweima=document.querySelector(".gua_erweima");


haha.onmouseover=function(){
	gua_erweima2.style.display="block";
}
haha.onmouseout=function(){
	gua_erweima2.style.display="";
}
heihei.onmouseover=function(){
	gua_erweima.style.display="block";
}
heihei.onmouseout=function(){
	gua_erweima.style.display="";
}
weixin.onmouseover=function(){
	weixin_tu.style.display="block";
}
weixin.onmouseout=function(){
	weixin_tu.style.display="";
}
// 下拉图，二维码
shouji.onmouseover=function(){
	xiala.style.display="block";
}
shouji.onmouseout=function(){
	xiala.style.display="";
}
// 轮播图
for(var i=0;i<ft.length;i++){
	ft[i].index=i;
	ft[i].onclick=function(){
	for(var i=0;i<ft.length;i++){
		ft[i].className="";
		fo[i].className="";
	}
	index=this.index;
	ft[this.index].className="tu";
	fo[this.index].className="tu";
	}
}
left.onclick=function(){
	index--;
	if(index<0){
		index=ft.length-1;
	}
	for(var i=0;i<ft.length;i++){
		ft[i].className="";
  		fo[i].className="";
	}
	ft[index].className="tu";
 	fo[index].className="tu";
}

right.onclick=function(){
	perv();
}
function perv(){
	index++;
	if(index>1){
		index=0;
	}
	for(var i=0;i<ft.length;i++){
		ft[i].className="";
  		fo[i].className="";
	}
	ft[index].className="tu";
 	fo[index].className="tu";
}
timer=setInterval(perv,3000);
//左边栏
var bianlan_left=document.querySelectorAll(".bianlan_left li");
var bianlan_right=document.querySelectorAll(".bianlan_right li");
var length1=bianlan_left.length;

for(var i=0;i<length1;i++){
	bianlan_left[i].chushi=i;
	bianlan_left[i].onmouseover=function(){
		for(var i=0;i<length1;i++){
			bianlan_right[i].style.display="";
		}
			bianlan_right[this.chushi].style.display="block";
	}
	bianlan_left[i].onmouseout=function(){
		for(var i=0;i<length1;i++){
			bianlan_right[i].style.display="";
		}
			bianlan_right[this.chushi].style.display="none";
	}

}







