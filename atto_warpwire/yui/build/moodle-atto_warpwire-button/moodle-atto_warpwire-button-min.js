YUI.add("moodle-atto_warpwire-button",function(e,t){e.namespace("M.atto_warpwire").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){this.addButton({icon:"e/insert_edit_warpwire",iconComponent:"atto_warpwire",callback:this._handleWarpwire})},isIE:function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE "),n=e.indexOf("Trident/");return t>0||n>0?!0:!1},createCORSRequest:function(e,t){var n=new XMLHttpRequest;return"withCredentials"in n?n.open(e,t,!0):typeof XDomainRequest!="undefined"?(n=new XDomainRequest,n.open(e,t)):n=null,n},addEvt:function(e,t,n,r){if("addEventListener"in e)try{e.addEventListener(t,n,r)}catch(i){if(typeof n!="object"||!n.handleEvent)throw i;e.addEventListener(t,function(e){n.handleEvent.call(n,e)},r)}else"attachEvent"in e&&(typeof n=="object"&&n.handleEvent?e.attachEvent("on"+t,function(){n.handleEvent.call(n)}):e.attachEvent("on"+t,n))},checkIEGet:function(e,t,n){var r=this;r.editor=null;if(n>=10)return!1;var i=r.createCORSRequest("GET",r.get("warpwire_url").replace(/(\/)+$/g,"")+"/api/staging/c/"+t+"/o/"+t);i&&(i.onload=function(){var t=JSON.parse(i.responseText);for(var n=0;n<t.length;n++){var r=new e.dom.element("img");r.setAttribute("class","_ww_img"),r.setAttribute("longdesc",t[n]._ww_src.replace("http://","https://")),r.setAttribute("src",t[n]._ww_img.replace("http://","https://")),t[n]&&e.execCommand("mceInsertContent",!1,r.$.outerHTML)}return!0},i.onerror=function(){n+=1,setTimeout(r.checkIEGet(r.editor,t,n),1e3)},i.send())},_handleWarpwire:function(){var e=this;e.editor=null;var t=location.href.split("/"),n=t[0],r=t[2],i=n+"//"+r;e.addEvt(window,"message",function(t){if(t.data.message==="deliverResult"){var n=JSON.parse(t.data.result);for(var r=0;r<n.length;r++){var i=document.createElement("img");i.setAttribute("class","_ww_img"),i.setAttribute("longdesc",n[r]._ww_src.replace("http://","https://")),i.setAttribute("src",n[r]._ww_img.replace("http://","https://"));if(n[r])try{e.get("host").insertContentAtFocusPoint(i.outerHTML)}catch(s){}}t.data.message=""}});var s="";if(e.isIE())for(var o=0;o<32;o++)s+=Math.floor(Math.random()*16).toString(16);else s="0";var u=window.open(e.get("warpwire_url"),"_wwPlugin","width=400, height=500"),a=!1,f=setInterval(function(){try{u.document.domain===document.domain?a&&u.document.readyState==="complete"&&(clearInterval(f),u.postMessage({message:"requestResult"},"*")):a=!0}catch(t){if(u.closed){clearInterval(f),e.isIE()&&e.checkIEGet(e.editor,s,0);return}a=!0}},500);return!0}},{ATTRS:{warpwire_url:{value:"<defaultvalue>"}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});