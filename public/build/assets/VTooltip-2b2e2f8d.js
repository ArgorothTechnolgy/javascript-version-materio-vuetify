import{v as S,c3 as h,cC as O,c5 as x,cD as C,cv as T,l as e,r as w,P as u,K as A,cE as d,i as I,c8 as R}from"./main-f4d9632b.js";const $=S()({name:"VTooltip",props:{id:String,text:String,...h(O({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},emits:{"update:modelValue":t=>!0},setup(t,v){let{slots:a}=v;const n=x(t,"modelValue"),{scopeId:g}=C(),f=T(),r=e(()=>t.id||`v-tooltip-${f}`),l=w(),m=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),y=e(()=>u({"aria-describedby":r.value},t.activatorProps));return A(()=>{const[b]=d.filterProps(t);return I(d,u({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},b,{modelValue:n.value,"onUpdate:modelValue":o=>n.value=o,transition:P.value,absolute:!0,location:m.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},g),{activator:a.activator,default:function(){var c;for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return((c=a.default)==null?void 0:c.call(a,...s))??t.text}})}),R({},l)}});export{$ as V};
//# sourceMappingURL=VTooltip-2b2e2f8d.js.map
