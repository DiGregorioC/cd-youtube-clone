(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){e.exports=a(73)},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),l=a(25),o=a.n(l),s=a(37),u=a(17),m=a(12),d=a(23),p=a(18),h=a(22),v=a(104),b=a(38),f=a.n(b).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),E=a(101),g=a(105),y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:""},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a.handleSubmit=function(e){var t=a.state.searchTerm;(0,a.props.onFormSubmit)(t),e.preventDefault()},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{elevation:6,style:{padding:"25px"}},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(g.a,{fullWidth:!0,label:"Search...",onChange:this.handleChange})))}}]),t}(r.a.Component),S=a(103),w=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{elevation:6,style:{height:"70%"}},r.a.createElement("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"Video Player",src:a})),r.a.createElement(E.a,{elevation:6,style:{padding:"15px"}},r.a.createElement(S.a,{variant:"h4"},t.snippet.title," - ",t.snippet.channelTitle," "),r.a.createElement(S.a,{variant:"subtitle1"},t.snippet.channelTitle," "),r.a.createElement(S.a,{variant:"subtitle2"},t.snippet.description," ")))},x=function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(E.a,{style:{display:"flex",alignItem:"center",cursor:"pointer"},onClick:function(){return a(t)}},r.a.createElement("img",{style:{marginRight:"5px"},alt:"thumbnail",src:t.snippet.thumbnails.medium.url})),r.a.createElement(E.a,{style:{padding:"15px"}},r.a.createElement(S.a,{variant:"subtitle1"},r.a.createElement("b",null,t.snippet.title)),r.a.createElement(S.a,{variant:"subtitle1"},t.snippet.channelTitle," ")))},j=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map(function(e,t){return r.a.createElement(x,{onVideoSelect:a,key:t,video:e})});return r.a.createElement(v.a,{container:!0,spacing:3},n)},O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={videos:[],selectedVideo:null},a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a.handleSubmit=function(){var e=Object(s.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("search",{params:{part:"snippet",maxResults:5,key:"AIzaSyCEdgbcCn_x8T8IhxqQGpA4yNU0nWZxWLE",q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.handleSubmit("React Tutorials")}},{key:"render",value:function(){var e=this.state,t=e.selectedVideo,a=e.videos;return r.a.createElement(v.a,{justify:"center",container:!0,spacing:10},r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(v.a,{container:!0,spacing:10},r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(y,{onFormSubmit:this.handleSubmit})),r.a.createElement(v.a,{item:!0,xs:8},r.a.createElement(w,{video:t})),r.a.createElement(v.a,{item:!0,xs:4},r.a.createElement(j,{videos:a,onVideoSelect:this.onVideoSelect})))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(O,null),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.1936f3f6.chunk.js.map