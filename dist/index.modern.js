import{DOMParser as t}from"xmldom";async function e(e,n=!1){return await new Promise((o,i)=>{try{const i={};let r;if("string"==typeof e){const n=(new t).parseFromString(e,"text/xml");n.firstChild&&(r=n.firstChild)}else r=e;const s=(t,e=i)=>{e.type=t.nodeName;const n=t.childNodes;if(null!==n&&n.length){e.content=[];for(let t=0;t<n.length;t++)3===n[t].nodeType?n[t].nodeValue&&e.content.push(n[t].nodeValue):(e.content.push({}),s(n[t],e.content[e.content.length-1]))}if(null!==t.attributes&&t.attributes.length){e.attributes={};for(let n=0;n<t.attributes.length;n++)e.attributes[t.attributes[n].nodeName]=t.attributes[n].nodeValue}};s(r),o(n?JSON.stringify(i):i)}catch(t){i(t)}})}export{e as default};
//# sourceMappingURL=index.modern.js.map
