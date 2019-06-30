CrdsComponents.loadBundle("ipeh35by",["exports","./chunk-f690c4ec.js","./chunk-a35d8220.js"],function(t,e,n){var i=window.CrdsComponents.h,o=function(){function t(){this.debug=!1,this.key="crds-hearts",this._likes=[]}return t.prototype.componentWillLoad=function(){var t=this;this.console=new n.Logger(this.debug),this.config=new n.Config,this.isLiked=this.likes().includes(this.id),this.getCount().then(function(e){t.count=e})},t.prototype.getCount=function(){var t=this.config.endpoint()+"/entries/"+this.id;return e.axios.get(t,{params:{access_token:this.config.token()}}).then(function(t){return function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var o=t,r=!0,s=!1,a=void 0;try{for(var u,c=n[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var h=u.value;if(null==o)return;o="function"==typeof h?h(o):o[h]}}catch(t){s=!0,a=t}finally{try{!r&&c.return&&c.return()}finally{if(s)throw a}}return o}(t,"data","fields","interaction_count")||0})},t.prototype.abbrevCount=function(){return this.count>1e3?Math.round(this.count/1e3*4)/4+"K":(this.count||0).toString()},t.prototype.likes=function(){var t=localStorage.getItem(this.key);return t?JSON.parse(t):[]},t.prototype.toggle=function(t){this.console.log("toggle()"),t.preventDefault(),this.isLiked=!this.isLiked,this.isLiked?(this.add(),this.count++):(this.remove(),this.count>0&&this.count--)},t.prototype.remove=function(){var t=this;this.console.log("removeFromStore()"),this._likes=this.likes().filter(function(e){if(e.toString()!==t.id)return e}),this.save(this._likes)},t.prototype.add=function(){this._likes=this.likes(),this._likes.push(this.id),this.save(this.removeDuplicates(this._likes))},t.prototype.removeDuplicates=function(t){return Array.from(new Set(t))},t.prototype.save=function(t){this.console.log("save()"),localStorage.setItem(this.key,JSON.stringify(t)),e.axios.post(this.endpoint()+"/content-interactions",{entry_id:this.id,action:this.isLiked?"add":"subtract"})},t.prototype.endpoint=function(){return n.Utils.getMeta("crds:interactions-endpoint")||"https://8k97vbzbrk.execute-api.us-east-1.amazonaws.com/int"},t.prototype.render=function(){var t=this;return i("a",{href:"#",onClick:function(e){return t.toggle(e)},class:this.isLiked?"on":"off"},i("span",{innerHTML:'<svg width="256px" height="256px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="heart"><path d="M222.944078,39.3395243 C232.469215,47.3270078 239.075354,57.1577642 242.762502,68.8317796 C246.449652,80.505795 246.987363,92.2566154 244.37563,104.084241 C241.763898,115.911866 236.156363,126.126627 227.553015,134.728537 L138.600552,226.891836 C135.527926,229.963948 131.994414,231.5 128,231.5 C124.005586,231.5 120.472074,229.963948 117.399448,226.891836 L28.4469857,135.189353 C19.8436364,126.280238 14.2361025,115.911866 11.6243699,104.084241 C9.01263721,92.2566154 9.55034867,80.505795 13.2374974,68.8317796 C16.924646,57.1577642 23.5307851,47.3270078 33.0559215,39.3395243 C41.3520061,32.2736738 50.7235066,27.8191121 61.1704302,25.9758461 C71.6173538,24.1325802 81.9106415,24.90061 92.0503004,28.2799285 C102.189959,31.6592471 111.100566,37.3426551 118.782129,45.3301387 L128,54.5464684 L137.217871,45.3301387 C144.899434,37.3426551 153.810041,31.6592471 163.9497,28.2799285 C174.089359,24.90061 184.382646,24.1325802 194.82957,25.9758461 C205.276493,27.8191121 214.647994,32.2736738 222.944078,39.3395243 Z" id="Path"></path></g></svg>',class:"icon heart"}),i("span",{innerHTML:'<svg width="256px" height="256px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="heart-o"><path d="M218.116413,43.6103959 C227.157221,51.1917362 233.427455,60.5226236 236.927121,71.603045 C240.426788,82.6834664 240.937158,93.8367875 238.458225,105.063008 C235.979293,116.289229 230.656887,125.984595 222.490997,134.14912 L138.061541,221.626149 C135.14515,224.542052 131.791308,226 128,226 C124.208692,226 120.85485,224.542052 117.938459,221.626149 L33.5090034,134.586505 C25.3431125,126.130395 20.0207075,116.289229 17.5417748,105.063008 C15.0628421,93.8367875 15.5732123,82.6834664 19.0728789,71.603045 C22.5725454,60.5226236 28.7698738,51.1917362 37.6648574,43.6103959 C46.559841,36.0290557 56.4026531,31.6552043 67.1932938,30.4888417 C76.8173768,29.3224791 86.587277,30.6346345 96.5030011,34.425308 C105.543809,37.9243891 113.126417,42.8814185 119.250834,49.2964028 L128,58.4814907 L136.749166,49.2964028 C144.040141,41.7150625 152.570578,36.3206413 162.340478,33.1131525 C172.110378,29.9056637 181.95319,29.1766863 191.868914,30.9262268 C201.784638,32.6757674 210.533805,36.903826 218.116413,43.6103959 Z M212.429455,124.526647 C218.262231,118.694847 222.272267,111.477993 224.459559,102.876083 C226.646851,94.2741726 226.573939,85.8909618 224.24083,77.726437 C221.61608,68.3955562 216.585309,60.5955167 209.148518,54.3263319 C201.711727,48.0571471 193.47293,44.630959 184.432123,44.0477811 C177.141149,43.7561888 169.704357,45.3599365 162.121749,48.8590176 C155.705691,51.4833285 150.602015,54.9824096 146.810708,59.356261 L128,78.6012073 L109.189292,59.356261 C105.10635,54.9824096 100.002668,51.3375357 93.8782512,48.4216325 C86.2956426,44.9225514 78.8588512,43.4646031 71.567877,44.0477811 C62.5270696,44.630959 54.2882735,48.0571471 46.8514821,54.3263319 C39.4146907,60.5955167 34.38392,68.3955562 31.7591701,77.726437 C29.4260613,85.8909618 29.3531494,94.2741726 31.5404409,102.876083 C33.7277325,111.477993 37.7377693,118.694847 43.5705447,124.526647 L128,212.003675 L212.429455,124.526647 Z"></path></g></svg>',class:"icon heart-o"}),i("span",{class:"count"},this.abbrevCount()))},Object.defineProperty(t,"is",{get:function(){return"heart-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{_likes:{state:!0},count:{type:Number,attr:"count",mutable:!0},id:{type:String,attr:"id"},isLiked:{type:Boolean,attr:"is-liked",mutable:!0},key:{type:String,attr:"key"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"a.sc-heart-button{font-family:sans-serif;display:block;color:#979797;font-size:80%;text-decoration:none}a.sc-heart-button > *.sc-heart-button{vertical-align:middle}a.on.sc-heart-button > span.heart-o.heart.sc-heart-button, a.on.sc-heart-button > span.heart.heart.sc-heart-button{display:inline-block}a.on.sc-heart-button > span.heart-o.heart-o.sc-heart-button, a.on.sc-heart-button > span.heart.heart-o.sc-heart-button{display:none}a.on.sc-heart-button > span.heart-o.sc-heart-button > svg.sc-heart-button, a.on.sc-heart-button > span.heart.sc-heart-button > svg.sc-heart-button{fill:#c05c04}a.sc-heart-button   span.count.sc-heart-button{padding-left:.5rem}a.sc-heart-button   span.heart.sc-heart-button, a.sc-heart-button   span.heart-o.sc-heart-button{display:inline-block;border:1px solid;border-radius:50%;width:42px;height:42px}a.sc-heart-button   span.heart-o.sc-heart-button   svg.sc-heart-button, a.sc-heart-button   span.heart.sc-heart-button   svg.sc-heart-button{margin:9px;width:24px;height:24px;fill:currentColor}a.sc-heart-button   span.heart.sc-heart-button{display:none}a.sc-heart-button   span.heart-o.sc-heart-button{display:inline-block}"},enumerable:!0,configurable:!0}),t}();t.HeartButton=o,Object.defineProperty(t,"__esModule",{value:!0})});