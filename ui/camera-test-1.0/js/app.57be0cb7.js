(function(e){function t(t){for(var o,r,c=t[0],s=t[1],d=t[2],m=0,l=[];m<c.length;m++)r=c[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(l.length)l.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},a={app:0},i=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/ui/camera-test-1.0/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b00":function(e,t,n){"use strict";n("f1ae")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("f2bf"),a=n("5502"),i=(n("4de4"),{state:{connectionDroppedAt:0,connectionIsDropped:!1,lastVideoCheck:0,lastVideoWrite:0,streams:[],streamsObtained:!1,videoURL:"",videoURLObtained:!1,dataURL:"",dataURLObtained:!1,expiryTime:"",camera:"",sessionExpired:!1},mutations:{SET_CONNECTION_DROPPED_AT:function(e,t){e.connectionDroppedAt=t},SET_CONNECTION_IS_DROPPED:function(e,t){e.connectionIsDropped=t},SET_LAST_VIDEO_CHECK:function(e,t){e.lastVideoCheck=t},SET_LAST_VIDEO_WRITE:function(e,t){e.lastVideoWrite=t},DELETE_STREAMS:function(e){e.streams={},e.streamsObtained=!1},SET_STREAMS:function(e,t){e.streams=t,e.streamsObtained=!0},SET_VIDEO_URL:function(e,t){e.videoURL=t,e.videoURLObtained=!0},DELETE_VIDEO_URL:function(e){e.videoURL="",e.videoURLObtained=!1},SET_DATA_URL:function(e,t){e.dataURL=t,e.dataURLObtained=!0},DELETE_DATA_URL:function(e){e.dataURL="",e.dataURLObtained=!1},SET_EXPIRY_TIME:function(e,t){e.expiryTime=t},SET_CAMERA:function(e,t){e.camera=t},SET_SESSION_EXPIRED:function(e,t){e.sessionExpired=t}},actions:{setConnectionDroppedAt:function(e,t){e.commit("SET_CONNECTION_DROPPED_AT",t)},setConnectionIsDropped:function(e,t){e.commit("SET_CONNECTION_IS_DROPPED",t)},setLastVideoCheck:function(e,t){e.commit("SET_LAST_VIDEO_CHECK",t)},setLastVideoWrite:function(e,t){e.commit("SET_LAST_VIDEO_WRITE",t)},deleteStreams:function(e){e.commit("DELETE_STREAMS")},setStreams:function(e,t){e.commit("SET_STREAMS",t)},setVideoURL:function(e,t){e.commit("SET_VIDEO_URL",t)},deleteVideoURL:function(e){e.commit("DELETE_VIDEO_URL")},setDataURL:function(e,t){e.commit("SET_DATA_URL",t)},deleteDataURL:function(e){e.commit("DELETE_DATA_URL")},setExpiryTime:function(e,t){e.commit("SET_EXPIRY_TIME",t)},setCamera:function(e,t){e.commit("SET_CAMERA",t)},setSessionExpired:function(e,t){e.commit("SET_SESSION_EXPIRED",t)}},getters:{getStreamsObtained:function(e){return e.streamsObtained},getStreams:function(e){return e.streams},getStream:function(e){return function(t){if(null!=e.streams){if(!e.streamsObtained)return{};var n=e.streams.filter((function(e){return e.for==t}));return n.length<1?{}:n[0]}return{}}},getVideoURL:function(e){return e.videoURL},getVideoURLObtained:function(e){return e.videoURLObtained},getDataURL:function(e){return e.dataURL},getDataURLObtained:function(e){return e.dataURLObtained},getExpiryTime:function(e){return e.expiryTime},getConnectionDroppedAt:function(e){return e.connectionDroppedAt},getConnectionIsDropped:function(e){return e.connectionIsDropped},getLastVideoCheck:function(e){return e.lastVideoCheck},getLastVideoWrite:function(e){return e.lastVideoWrite},getCamera:function(e){return e.camera},getSessionExpired:function(e){return e.sessionExpired}}}),r=i,c=Object(a["a"])({modules:{stream:r}}),s=c,d={id:"app",class:"container"},u={class:"row align-items-center justify-content-center"};function m(e,t,n,a,i,r){var c=Object(o["j"])("streams"),s=Object(o["j"])("webcam-stream");return Object(o["f"])(),Object(o["b"])("div",d,[Object(o["d"])("div",u,[Object(o["d"])(c,{id:"streams"}),Object(o["d"])(s,{id:"webcam-stream"})])])}function l(e,t,n,a,i,r){return Object(o["f"])(),Object(o["b"])("div")}var p=n("5530"),f=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("ac1f"),n("841c"),n("5a0c")),b=n.n(f),v={name:"Streams",components:{},data:function(){return{connectionChecker:null}},created:function(){},mounted:function(){if(!this.getStreamsObtained){try{var e=new URLSearchParams(window.location.search),t=e.get("streams"),n=JSON.parse(decodeURIComponent(String(t)));this.$store.dispatch("setStreams",n);var o=e.get("exp");this.$store.dispatch("setExpiryTime",o);var a=e.get("v");this.$store.dispatch("setCamera",a)}catch(s){console.log("error decoding streams"),this.$store.dispatch("deleteStreams")}var i=this,r=function(){i.$store.dispatch("setLastVideoWrite",b()().valueOf())};document.addEventListener("jsmpeg:write",(function(){r()}));var c=function(){var e=i.$store.getters.getLastVideoCheck,t=i.$store.getters.getLastVideoWrite,n=function(){i.$store.dispatch("setConnectionIsDropped",!0),i.$store.dispatch("setConnectionDroppedAt",b()().unix());var e=new Event("streams:dropped");document.dispatchEvent(e)};if(e>t){if(i.$store.getters.getConnectionIsDropped){var o=i.$store.getters.getConnectionDroppedAt,a=b()().unix()-o;return void(a>10&&n())}n()}else i.$store.dispatch("setLastVideoCheck",b()().valueOf()),i.$store.dispatch("setConnectionIsDropped",!1)};this.connectionChecker=setInterval(c,1e3)}},computed:Object(p["a"])({},Object(a["b"])(["getStreamsObtained","getSessionExpired"])),watch:{getSessionExpired:function(e){e&&clearInterval(this.connectionChecker)}},methods:{}};v.render=l;var h=v,O=Object(o["n"])("data-v-0018347d");Object(o["h"])("data-v-0018347d");var g={class:"container-sm m-2 bg-white border rounded"},E={class:"row",id:"video"},j={class:"col-12"};Object(o["g"])();var S=O((function(e,t,n,a,i,r){var c=Object(o["j"])("video-element");return Object(o["f"])(),Object(o["b"])("div",g,[Object(o["d"])("div",E,[Object(o["d"])("div",j,[Object(o["d"])(c,{url:e.url},null,8,["url"])])])])})),L=n("bc3a"),D=n.n(L),w={key:0,class:"row"},C=Object(o["d"])("div",{class:"col-12"},[Object(o["d"])("img",{id:"session-end-image",src:"https://assets.practable.io/images/common/thank-you-screen.svg",alt:"session ended"})],-1),_={key:1},I={class:"row align-items-center justify-content-center"},T=Object(o["d"])("canvas",{id:"video-canvas"},null,-1);function R(e,t,n,a,i,r){var c=Object(o["j"])("toolbar");return e.getSessionExpired?(Object(o["f"])(),Object(o["b"])("div",w,[C])):(Object(o["f"])(),Object(o["b"])("div",_,[Object(o["d"])("div",I,[Object(o["d"])("div",{class:i.zoomClass,id:"video-element"},[T,Object(o["d"])(c,{parentCanvasID:"video-canvas",parentComponentName:"webcam-view",parentDivID:"video-element",showDownload:!0,showPopupHelp:!1,onZoom:r.setZoomClass},null,8,["onZoom"])],2)])]))}var z=n("7a33"),y=n.n(z),U=Object(o["n"])("data-v-211956fa");Object(o["h"])("data-v-211956fa");var V={class:"row m-1"},x=Object(o["d"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-zoom-in",viewBox:"0 0 16 16"},[Object(o["d"])("path",{"fill-rule":"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"}),Object(o["d"])("path",{d:"M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"}),Object(o["d"])("path",{"fill-rule":"evenodd",d:"M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"})],-1),A=Object(o["d"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-zoom-out",viewBox:"0 0 16 16"},[Object(o["d"])("path",{"fill-rule":"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"}),Object(o["d"])("path",{d:"M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"}),Object(o["d"])("path",{"fill-rule":"evenodd",d:"M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"})],-1),P=Object(o["d"])("label",{class:"m-2",for:"filename-input"},"Filename: 'webcam-view-' + user defined text below",-1);Object(o["g"])();var N=U((function(e,t,n,a,i,r){var c=Object(o["j"])("download-image-button");return Object(o["f"])(),Object(o["b"])("div",V,[n.showDownload?(Object(o["f"])(),Object(o["b"])(c,{key:0,parentComponentName:r.getParentComponentName,parentCanvasID:r.getCanvasID,filename:i.filename},null,8,["parentComponentName","parentCanvasID","filename"])):Object(o["c"])("",!0),Object(o["d"])("button",{type:"button",class:"btn btn-secondary zoom-button me-1",id:"zoom-plus-button",onClick:t[1]||(t[1]=function(){return r.zoomIn&&r.zoomIn.apply(r,arguments)})},[x]),Object(o["d"])("button",{type:"button",class:"btn btn-secondary zoom-button me-1",id:"zoom-minus-button",onClick:t[2]||(t[2]=function(){return r.zoomOut&&r.zoomOut.apply(r,arguments)})},[A]),P,Object(o["m"])(Object(o["d"])("input",{type:"text",id:"filename-input","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.filename=e})},null,512),[[o["k"],i.filename]])])})),$=Object(o["n"])("data-v-ad52b8f4");Object(o["h"])("data-v-ad52b8f4");var k=Object(o["d"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-download",viewBox:"0 0 16 16"},[Object(o["d"])("path",{d:"M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"}),Object(o["d"])("path",{d:"M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"})],-1);Object(o["g"])();var M=$((function(e,t,n,a,i,r){return Object(o["f"])(),Object(o["b"])("button",{type:"button",class:"btn btn-secondary me-1",id:"download-button",onClick:t[1]||(t[1]=function(){return r.downloadImage&&r.downloadImage.apply(r,arguments)})},[k])})),W={name:"DownloadImageButton",props:{parentComponentName:String,parentCanvasID:String,filename:String},data:function(){return{}},components:{},created:function(){},mounted:function(){},computed:{},watch:{},methods:{downloadImage:function(){var e=document.getElementById(this.parentCanvasID),t=e.toDataURL("image/png"),n=document.createElement("a");n.download=this.parentComponentName+"-"+this.filename+".png",n.href=t,n.click(),n.remove()}}};n("f90f");W.render=M,W.__scopeId="data-v-ad52b8f4";var B=W,H={name:"Toolbar",props:{parentComponentName:String,parentCanvasID:String,parentDivID:String,showDownload:Boolean,showPopupHelp:Boolean},emits:["zoom"],data:function(){return{filename:"",zoomLevel:2}},components:{DownloadImageButton:B},created:function(){},mounted:function(){},computed:{getParentComponentName:function(){return this.parentComponentName},getCanvasID:function(){return this.parentCanvasID},getParentDivID:function(){return this.parentDivID}},watch:{},methods:{zoomIn:function(){this.zoomLevel<4&&(this.zoomLevel+=1),1==this.zoomLevel?this.$emit("zoom","col-4"):2==this.zoomLevel?this.$emit("zoom","col-6"):3==this.zoomLevel?this.$emit("zoom","col-9"):4==this.zoomLevel&&this.$emit("zoom","col-12")},zoomOut:function(){this.zoomLevel>0&&(this.zoomLevel-=1),0==this.zoomLevel?this.$emit("zoom","col-3"):1==this.zoomLevel?this.$emit("zoom","col-4"):2==this.zoomLevel?this.$emit("zoom","col-6"):3==this.zoomLevel&&this.$emit("zoom","col-9")}}};n("d294");H.render=N,H.__scopeId="data-v-211956fa";var K=H,X={name:"VideoElement",props:["url"],components:{Toolbar:K},data:function(){return{player:null,zoomClass:"col-6"}},computed:Object(p["a"])({},Object(a["b"])(["getSessionExpired"])),watch:{url:function(){var e=document.getElementById("video-canvas");this.player=new y.a.Player(this.url,{canvas:e,preserveDrawingBuffer:!0})}},methods:{setZoomClass:function(e){this.zoomClass=e}}};n("6a0a");X.render=R;var Z=X,J={name:"WebcamStream",components:{VideoElement:Z},data:function(){return{stream:Object}},computed:Object(p["a"])(Object(p["a"])({},Object(a["b"])({url:"getVideoURL",urlOK:"getVideoURLObtained"})),{},{streamOK:function(){return this.$store.getters.getStream("video")}}),mounted:function(){document.addEventListener("streams:dropped",this.accessVideo)},methods:{accessVideo:function(){this.stream=this.$store.getters.getStream("video");var e=this.stream.url,t=this.stream.token,n=this.$store;n.dispatch("deleteVideoURL"),D.a.post(e,{},{headers:{Authorization:t}}).then((function(e){n.dispatch("setVideoURL",e.data.uri)})).catch((function(e){return console.log(e)}))}},watch:{streamOK:function(e){e?this.accessVideo():console.log("no stream")},urlOK:function(e){e&&console.log("get videoURL",this.urlOK,this.url)}}};n("dc23");J.render=S,J.__scopeId="data-v-0018347d";var Y=J,F={name:"App",components:{Streams:h,WebcamStream:Y}};n("1b00");F.render=m;var q=F,G=(n("7b17"),n("ab8b"),n("54ba"),Object(o["a"])(q));G.use(s),G.mount("#app")},"6a0a":function(e,t,n){"use strict";n("d719")},"6f6a":function(e,t,n){},bcc3:function(e,t,n){},d294:function(e,t,n){"use strict";n("f952")},d719:function(e,t,n){},dc23:function(e,t,n){"use strict";n("6f6a")},f1ae:function(e,t,n){},f90f:function(e,t,n){"use strict";n("bcc3")},f952:function(e,t,n){}});
//# sourceMappingURL=app.57be0cb7.js.map