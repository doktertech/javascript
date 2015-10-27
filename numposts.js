//<![CDATA[
var pbt_numposts=3,pbt_snippet_length=150,img_width=100,img_height=100,pbt_info="no",pbt_comment="Comments",pbt_disable="Comments Disabled",pbt_current=[],pbt_total_posts=0,pbt_current=Array(pbt_numposts);function totalposts(a){pbt_total_posts=a.feed.openSearch$totalResults.$t}document.write('<script type="text/javascript" src="/feeds/posts/default?alt=json-in-script&max-results=0&callback=totalposts">\x3c/script>');
function getvalue(){for(var a=0;a<pbt_numposts;a++){for(var c=!1,d=get_random(),b=0;b<pbt_current.length;b++)if(pbt_current[b]==d){c=!0;break}c?a--:pbt_current[a]=d}}function get_random(){return 1+Math.round(Math.random()*(pbt_total_posts-1))};
//]]>
