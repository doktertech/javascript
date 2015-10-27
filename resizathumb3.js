//<![CDATA[
function resizeThumb(c,d){for(var b=document.getElementById(c).getElementsByTagName("img"),a=0;a<b.length;a++)b[a].src=b[a].src.replace(/\/s72\-c/,"/s"+d+""),b[a].width=d,b[a].height=d}resizeThumb("PopularPosts1",300);var newSize=300;$(".popular-posts .item-thumbnail img").each(function(){var c=$(this).attr("width");$(this).attr("width",newSize);$(this).attr("height",newSize);$(this).attr("src",$(this).attr("src").replace("/s"+c+"-c/","/s"+newSize+"-c/"))});
//]]>
