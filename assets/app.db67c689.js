import{d as s,r as f,a as S,b as w,c as P,i as c,e as x,f as H,g as z,o as D,h as d,j as p,k as L,l as $,m as N,n as F,R as B,p as j,q as M,S as U,u as q,w as K,s as W,t as G,v as J}from"./framework.7a428f9b.js";const Y="modulepreload",Z=function(t){return"/"+t},A={},e=function(_,r,a){if(!r||r.length===0)return _();const i=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=Z(o),o in A)return;A[o]=!0;const u=o.endsWith(".css"),v=u?'[rel="stylesheet"]':"";if(!!a)for(let h=i.length-1;h>=0;h--){const T=i[h];if(T.href===o&&(!u||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${v}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":Y,u||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),u)return new Promise((h,T)=>{l.addEventListener("load",h),l.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>_())},Q={"v-606dbee4":()=>e(()=>import("./code-of-conduct.html.f7962df2.js"),[]).then(({data:t})=>t),"v-6ce48554":()=>e(()=>import("./contributing.html.496b88ae.js"),[]).then(({data:t})=>t),"v-8daa1a0e":()=>e(()=>import("./index.html.b663f752.js"),[]).then(({data:t})=>t),"v-5fbc6baa":()=>e(()=>import("./referents.html.6c09e810.js"),[]).then(({data:t})=>t),"v-0a4580e4":()=>e(()=>import("./status.html.fa5d1646.js"),[]).then(({data:t})=>t),"v-646b6f91":()=>e(()=>import("./usage.html.66e8e130.js"),[]).then(({data:t})=>t),"v-239bf7bc":()=>e(()=>import("./10.x.html.44e55c3a.js"),[]).then(({data:t})=>t),"v-e905b6ca":()=>e(()=>import("./11.x.html.c8df7793.js"),[]).then(({data:t})=>t),"v-19435d0c":()=>e(()=>import("./12.x.html.de8647eb.js"),[]).then(({data:t})=>t),"v-6828d1cc":()=>e(()=>import("./7.x.html.ff98d2f5.js"),[]).then(({data:t})=>t),"v-5fec02aa":()=>e(()=>import("./8.x.html.f8ec38ee.js"),[]).then(({data:t})=>t),"v-37eb2b8a":()=>e(()=>import("./9.x.html.da225a5b.js"),[]).then(({data:t})=>t),"v-510ed0d4":()=>e(()=>import("./index.html.84db589d.js"),[]).then(({data:t})=>t),"v-4e429576":()=>e(()=>import("./compatibility.html.aaec9db0.js"),[]).then(({data:t})=>t),"v-385a267a":()=>e(()=>import("./github.html.cee15eee.js"),[]).then(({data:t})=>t),"v-08a5d2dc":()=>e(()=>import("./index.html.5d55293f.js"),[]).then(({data:t})=>t),"v-1ef1c652":()=>e(()=>import("./managers.html.eb64b0f6.js"),[]).then(({data:t})=>t),"v-139aa9de":()=>e(()=>import("./af.html.5914d106.js"),[]).then(({data:t})=>t),"v-2814d152":()=>e(()=>import("./ar.html.31763acb.js"),[]).then(({data:t})=>t),"v-35bb964a":()=>e(()=>import("./az.html.7e0c0df7.js"),[]).then(({data:t})=>t),"v-46cc0c80":()=>e(()=>import("./be.html.4224d369.js"),[]).then(({data:t})=>t),"v-4a35bdbe":()=>e(()=>import("./bg.html.bf75192d.js"),[]).then(({data:t})=>t),"v-5627aa17":()=>e(()=>import("./bn.html.a23f33d1.js"),[]).then(({data:t})=>t),"v-5eafe532":()=>e(()=>import("./bs.html.2483da8f.js"),[]).then(({data:t})=>t),"v-74dee545":()=>e(()=>import("./ca.html.f66ab80a.js"),[]).then(({data:t})=>t),"v-d8d3bf1a":()=>e(()=>import("./cs.html.f448d4c3.js"),[]).then(({data:t})=>t),"v-c45997a6":()=>e(()=>import("./cy.html.01d366ec.js"),[]).then(({data:t})=>t),"v-ac75bef4":()=>e(()=>import("./da.html.b5b12689.js"),[]).then(({data:t})=>t),"v-9ecef9fc":()=>e(()=>import("./de.html.65165d65.js"),[]).then(({data:t})=>t),"v-db8910e8":()=>e(()=>import("./de_CH.html.6bc41bf6.js"),[]).then(({data:t})=>t),"v-1d1eaac8":()=>e(()=>import("./el.html.342eed81.js"),[]).then(({data:t})=>t),"v-053ad216":()=>e(()=>import("./es.html.3992e462.js"),[]).then(({data:t})=>t),"v-01d120d8":()=>e(()=>import("./et.html.d79780cc.js"),[]).then(({data:t})=>t),"v-00cc4833":()=>e(()=>import("./eu.html.483b5f3b.js"),[]).then(({data:t})=>t),"v-13919708":()=>e(()=>import("./fa.html.b507e42a.js"),[]).then(({data:t})=>t),"v-21385c00":()=>e(()=>import("./fi.html.f00c8d62.js"),[]).then(({data:t})=>t),"v-6c68eda6":()=>e(()=>import("./fil.html.bd7b4019.js"),[]).then(({data:t})=>t),"v-3093f997":()=>e(()=>import("./fr.html.2eba1b25.js"),[]).then(({data:t})=>t),"v-5b3d211e":()=>e(()=>import("./gl.html.97578c60.js"),[]).then(({data:t})=>t),"v-6a98beb5":()=>e(()=>import("./gu.html.e64d1652.js"),[]).then(({data:t})=>t),"v-f79d1ff4":()=>e(()=>import("./he.html.cb902fa4.js"),[]).then(({data:t})=>t),"v-e9f65afc":()=>e(()=>import("./hi.html.79d8914f.js"),[]).then(({data:t})=>t),"v-cb3f1fce":()=>e(()=>import("./hr.html.c64919e6.js"),[]).then(({data:t})=>t),"v-c1020c14":()=>e(()=>import("./hu.html.c3fe1ee0.js"),[]).then(({data:t})=>t),"v-b35b471c":()=>e(()=>import("./hy.html.b702f0b0.js"),[]).then(({data:t})=>t),"v-913a5ab0":()=>e(()=>import("./id.html.6246cb24.js"),[]).then(({data:t})=>t),"v-5e08f80e":()=>e(()=>import("./is.html.c96e6c96.js"),[]).then(({data:t})=>t),"v-5a9f46d0":()=>e(()=>import("./it.html.c8a121c9.js"),[]).then(({data:t})=>t),"v-31aaf7e8":()=>e(()=>import("./ja.html.71dad21f.js"),[]).then(({data:t})=>t),"v-1c10bf4d":()=>e(()=>import("./ka.html.ce66102a.js"),[]).then(({data:t})=>t),"v-2d213583":()=>e(()=>import("./kk.html.d9a4ae36.js"),[]).then(({data:t})=>t),"v-308ae6c1":()=>e(()=>import("./km.html.b7e49266.js"),[]).then(({data:t})=>t),"v-323fbf60":()=>e(()=>import("./kn.html.a7eb827e.js"),[]).then(({data:t})=>t),"v-33f497ff":()=>e(()=>import("./ko.html.69424d0d.js"),[]).then(({data:t})=>t),"v-71630e5b":()=>e(()=>import("./lt.html.c77ae868.js"),[]).then(({data:t})=>t),"v-74ccbf99":()=>e(()=>import("./lv.html.471cca37.js"),[]).then(({data:t})=>t),"v-d224a7f6":()=>e(()=>import("./mk.html.6a456d46.js"),[]).then(({data:t})=>t),"v-c7e7943c":()=>e(()=>import("./mn.html.49301071.js"),[]).then(({data:t})=>t),"v-ba40cf44":()=>e(()=>import("./mr.html.61c94eb1.js"),[]).then(({data:t})=>t),"v-b6d71e06":()=>e(()=>import("./ms.html.e32bc812.js"),[]).then(({data:t})=>t),"v-870f6ca2":()=>e(()=>import("./nb.html.760e5360.js"),[]).then(({data:t})=>t),"v-7cd258e8":()=>e(()=>import("./ne.html.439e2f5c.js"),[]).then(({data:t})=>t),"v-64ee8036":()=>e(()=>import("./nl.html.43be63e9.js"),[]).then(({data:t})=>t),"v-5e1b1dba":()=>e(()=>import("./nn.html.3194ecf2.js"),[]).then(({data:t})=>t),"v-19d944e2":()=>e(()=>import("./oc.html.46718272.js"),[]).then(({data:t})=>t),"v-37553667":()=>e(()=>import("./pl.html.f8a8c028.js"),[]).then(({data:t})=>t),"v-434722c0":()=>e(()=>import("./ps.html.4802fba5.js"),[]).then(({data:t})=>t),"v-44fbfb5f":()=>e(()=>import("./pt.html.e89a00cf.js"),[]).then(({data:t})=>t),"v-dc4cfdf8":()=>e(()=>import("./pt_BR.html.ab91956a.js"),[]).then(({data:t})=>t),"v-b37f9274":()=>e(()=>import("./ro.html.a7e903b7.js"),[]).then(({data:t})=>t),"v-9f056b00":()=>e(()=>import("./ru.html.3b43858e.js"),[]).then(({data:t})=>t),"v-72a76ada":()=>e(()=>import("./sc.html.99493e6c.js"),[]).then(({data:t})=>t),"v-5e2d4366":()=>e(()=>import("./si.html.8d0995af.js"),[]).then(({data:t})=>t),"v-5759e0ea":()=>e(()=>import("./sk.html.24d29c15.js"),[]).then(({data:t})=>t),"v-53f02fac":()=>e(()=>import("./sl.html.704f21ce.js"),[]).then(({data:t})=>t),"v-42dfb976":()=>e(()=>import("./sq.html.bfcc767a.js"),[]).then(({data:t})=>t),"v-330c9042":()=>e(()=>import("./sr_Cyrl.html.1960457c.js"),[]).then(({data:t})=>t),"v-6608dc80":()=>e(()=>import("./sr_Latn.html.18fc39fd.js"),[]).then(({data:t})=>t),"v-098bcebb":()=>e(()=>import("./sr_Latn_ME.html.541d412f.js"),[]).then(({data:t})=>t),"v-31cf4340":()=>e(()=>import("./sv.html.333186e4.js"),[]).then(({data:t})=>t),"v-2e659202":()=>e(()=>import("./sw.html.0c225e9a.js"),[]).then(({data:t})=>t),"v-0265e850":()=>e(()=>import("./tg.html.d5feb881.js"),[]).then(({data:t})=>t),"v-041ac0ef":()=>e(()=>import("./th.html.6ad924ca.js"),[]).then(({data:t})=>t),"v-09394acc":()=>e(()=>import("./tk.html.ed608f86.js"),[]).then(({data:t})=>t),"v-0aee236b":()=>e(()=>import("./tl.html.46db748a.js"),[]).then(({data:t})=>t),"v-152b3725":()=>e(()=>import("./tr.html.c174c1f0.js"),[]).then(({data:t})=>t),"v-374c2391":()=>e(()=>import("./ug.html.6865350d.js"),[]).then(({data:t})=>t),"v-3e1f860d":()=>e(()=>import("./uk.html.fea6b0ce.js"),[]).then(({data:t})=>t),"v-4a117266":()=>e(()=>import("./ur.html.d07f6b72.js"),[]).then(({data:t})=>t),"v-c5faceb6":()=>e(()=>import("./uz_Cyrl.html.12c3c0c3.js"),[]).then(({data:t})=>t),"v-f8f71af4":()=>e(()=>import("./uz_Latn.html.fee00b77.js"),[]).then(({data:t})=>t),"v-6f9c1010":()=>e(()=>import("./vi.html.e05df6a0.js"),[]).then(({data:t})=>t),"v-579590f3":()=>e(()=>import("./zh_CN.html.72856781.js"),[]).then(({data:t})=>t),"v-5af62f5b":()=>e(()=>import("./zh_HK.html.de5eb088.js"),[]).then(({data:t})=>t),"v-2b89c44a":()=>e(()=>import("./zh_TW.html.636eac45.js"),[]).then(({data:t})=>t),"v-3706649a":()=>e(()=>import("./404.html.d2dc3323.js"),[]).then(({data:t})=>t)},X=JSON.parse('{"base":"/","lang":"en-US","title":"Laravel Lang","description":"List of 78 languages for Laravel Framework 4-9, Jetstream, Fortify, Breeze, Cashier, Nova, Spark and UI.","head":[["link",{"rel":"icon","href":"https://laravel-lang.com/images/logo.svg"}],["meta",{"name":"twitter:image","content":"https://laravel-lang.com/images/social-logo.png"}]],"locales":{}}'),O={"v-606dbee4":s(()=>e(()=>import("./code-of-conduct.html.d473ecae.js"),["assets/code-of-conduct.html.d473ecae.js","assets/framework.7a428f9b.js"])),"v-6ce48554":s(()=>e(()=>import("./contributing.html.e29fc6b5.js"),["assets/contributing.html.e29fc6b5.js","assets/framework.7a428f9b.js"])),"v-8daa1a0e":s(()=>e(()=>import("./index.html.092f9e75.js"),["assets/index.html.092f9e75.js","assets/framework.7a428f9b.js"])),"v-5fbc6baa":s(()=>e(()=>import("./referents.html.24777964.js"),["assets/referents.html.24777964.js","assets/framework.7a428f9b.js"])),"v-0a4580e4":s(()=>e(()=>import("./status.html.68589618.js"),["assets/status.html.68589618.js","assets/framework.7a428f9b.js"])),"v-646b6f91":s(()=>e(()=>import("./usage.html.a4b0c457.js"),["assets/usage.html.a4b0c457.js","assets/framework.7a428f9b.js"])),"v-239bf7bc":s(()=>e(()=>import("./10.x.html.47839120.js"),["assets/10.x.html.47839120.js","assets/framework.7a428f9b.js"])),"v-e905b6ca":s(()=>e(()=>import("./11.x.html.d8ded503.js"),["assets/11.x.html.d8ded503.js","assets/framework.7a428f9b.js"])),"v-19435d0c":s(()=>e(()=>import("./12.x.html.b2fd6627.js"),["assets/12.x.html.b2fd6627.js","assets/framework.7a428f9b.js"])),"v-6828d1cc":s(()=>e(()=>import("./7.x.html.38528e35.js"),["assets/7.x.html.38528e35.js","assets/framework.7a428f9b.js"])),"v-5fec02aa":s(()=>e(()=>import("./8.x.html.4efa26b9.js"),["assets/8.x.html.4efa26b9.js","assets/framework.7a428f9b.js"])),"v-37eb2b8a":s(()=>e(()=>import("./9.x.html.d67ba397.js"),["assets/9.x.html.d67ba397.js","assets/framework.7a428f9b.js"])),"v-510ed0d4":s(()=>e(()=>import("./index.html.cacb94e3.js"),["assets/index.html.cacb94e3.js","assets/framework.7a428f9b.js"])),"v-4e429576":s(()=>e(()=>import("./compatibility.html.3c678156.js"),["assets/compatibility.html.3c678156.js","assets/framework.7a428f9b.js"])),"v-385a267a":s(()=>e(()=>import("./github.html.a9222681.js"),["assets/github.html.a9222681.js","assets/framework.7a428f9b.js"])),"v-08a5d2dc":s(()=>e(()=>import("./index.html.89322639.js"),["assets/index.html.89322639.js","assets/framework.7a428f9b.js"])),"v-1ef1c652":s(()=>e(()=>import("./managers.html.70773029.js"),["assets/managers.html.70773029.js","assets/framework.7a428f9b.js"])),"v-139aa9de":s(()=>e(()=>import("./af.html.fa17f6b4.js"),["assets/af.html.fa17f6b4.js","assets/framework.7a428f9b.js"])),"v-2814d152":s(()=>e(()=>import("./ar.html.e47db880.js"),["assets/ar.html.e47db880.js","assets/framework.7a428f9b.js"])),"v-35bb964a":s(()=>e(()=>import("./az.html.0a3a47b9.js"),["assets/az.html.0a3a47b9.js","assets/framework.7a428f9b.js"])),"v-46cc0c80":s(()=>e(()=>import("./be.html.e710bb21.js"),["assets/be.html.e710bb21.js","assets/framework.7a428f9b.js"])),"v-4a35bdbe":s(()=>e(()=>import("./bg.html.b6ed7f34.js"),["assets/bg.html.b6ed7f34.js","assets/framework.7a428f9b.js"])),"v-5627aa17":s(()=>e(()=>import("./bn.html.727eeb6c.js"),["assets/bn.html.727eeb6c.js","assets/framework.7a428f9b.js"])),"v-5eafe532":s(()=>e(()=>import("./bs.html.33f99144.js"),["assets/bs.html.33f99144.js","assets/framework.7a428f9b.js"])),"v-74dee545":s(()=>e(()=>import("./ca.html.40b9be7a.js"),["assets/ca.html.40b9be7a.js","assets/framework.7a428f9b.js"])),"v-d8d3bf1a":s(()=>e(()=>import("./cs.html.cca13f23.js"),["assets/cs.html.cca13f23.js","assets/framework.7a428f9b.js"])),"v-c45997a6":s(()=>e(()=>import("./cy.html.3a045bdb.js"),["assets/cy.html.3a045bdb.js","assets/framework.7a428f9b.js"])),"v-ac75bef4":s(()=>e(()=>import("./da.html.f2bac4f5.js"),["assets/da.html.f2bac4f5.js","assets/framework.7a428f9b.js"])),"v-9ecef9fc":s(()=>e(()=>import("./de.html.8bb8b674.js"),["assets/de.html.8bb8b674.js","assets/framework.7a428f9b.js"])),"v-db8910e8":s(()=>e(()=>import("./de_CH.html.7686b417.js"),["assets/de_CH.html.7686b417.js","assets/framework.7a428f9b.js"])),"v-1d1eaac8":s(()=>e(()=>import("./el.html.440e1e53.js"),["assets/el.html.440e1e53.js","assets/framework.7a428f9b.js"])),"v-053ad216":s(()=>e(()=>import("./es.html.f845c1b6.js"),["assets/es.html.f845c1b6.js","assets/framework.7a428f9b.js"])),"v-01d120d8":s(()=>e(()=>import("./et.html.e8a2ecc5.js"),["assets/et.html.e8a2ecc5.js","assets/framework.7a428f9b.js"])),"v-00cc4833":s(()=>e(()=>import("./eu.html.9a8b6574.js"),["assets/eu.html.9a8b6574.js","assets/framework.7a428f9b.js"])),"v-13919708":s(()=>e(()=>import("./fa.html.da07c26e.js"),["assets/fa.html.da07c26e.js","assets/framework.7a428f9b.js"])),"v-21385c00":s(()=>e(()=>import("./fi.html.501527c8.js"),["assets/fi.html.501527c8.js","assets/framework.7a428f9b.js"])),"v-6c68eda6":s(()=>e(()=>import("./fil.html.5b550e46.js"),["assets/fil.html.5b550e46.js","assets/framework.7a428f9b.js"])),"v-3093f997":s(()=>e(()=>import("./fr.html.ce66b582.js"),["assets/fr.html.ce66b582.js","assets/framework.7a428f9b.js"])),"v-5b3d211e":s(()=>e(()=>import("./gl.html.af62ff62.js"),["assets/gl.html.af62ff62.js","assets/framework.7a428f9b.js"])),"v-6a98beb5":s(()=>e(()=>import("./gu.html.1ee73bdb.js"),["assets/gu.html.1ee73bdb.js","assets/framework.7a428f9b.js"])),"v-f79d1ff4":s(()=>e(()=>import("./he.html.2bf4e413.js"),["assets/he.html.2bf4e413.js","assets/framework.7a428f9b.js"])),"v-e9f65afc":s(()=>e(()=>import("./hi.html.8110fba2.js"),["assets/hi.html.8110fba2.js","assets/framework.7a428f9b.js"])),"v-cb3f1fce":s(()=>e(()=>import("./hr.html.feb28d03.js"),["assets/hr.html.feb28d03.js","assets/framework.7a428f9b.js"])),"v-c1020c14":s(()=>e(()=>import("./hu.html.249c5f18.js"),["assets/hu.html.249c5f18.js","assets/framework.7a428f9b.js"])),"v-b35b471c":s(()=>e(()=>import("./hy.html.5eb7fee1.js"),["assets/hy.html.5eb7fee1.js","assets/framework.7a428f9b.js"])),"v-913a5ab0":s(()=>e(()=>import("./id.html.7e2c6db7.js"),["assets/id.html.7e2c6db7.js","assets/framework.7a428f9b.js"])),"v-5e08f80e":s(()=>e(()=>import("./is.html.39d2257f.js"),["assets/is.html.39d2257f.js","assets/framework.7a428f9b.js"])),"v-5a9f46d0":s(()=>e(()=>import("./it.html.7b6d2ce0.js"),["assets/it.html.7b6d2ce0.js","assets/framework.7a428f9b.js"])),"v-31aaf7e8":s(()=>e(()=>import("./ja.html.b9b5dcdf.js"),["assets/ja.html.b9b5dcdf.js","assets/framework.7a428f9b.js"])),"v-1c10bf4d":s(()=>e(()=>import("./ka.html.3eaf9206.js"),["assets/ka.html.3eaf9206.js","assets/framework.7a428f9b.js"])),"v-2d213583":s(()=>e(()=>import("./kk.html.57aea97b.js"),["assets/kk.html.57aea97b.js","assets/framework.7a428f9b.js"])),"v-308ae6c1":s(()=>e(()=>import("./km.html.51cb4c97.js"),["assets/km.html.51cb4c97.js","assets/framework.7a428f9b.js"])),"v-323fbf60":s(()=>e(()=>import("./kn.html.205c214d.js"),["assets/kn.html.205c214d.js","assets/framework.7a428f9b.js"])),"v-33f497ff":s(()=>e(()=>import("./ko.html.b8731bf2.js"),["assets/ko.html.b8731bf2.js","assets/framework.7a428f9b.js"])),"v-71630e5b":s(()=>e(()=>import("./lt.html.faa76021.js"),["assets/lt.html.faa76021.js","assets/framework.7a428f9b.js"])),"v-74ccbf99":s(()=>e(()=>import("./lv.html.4becf775.js"),["assets/lv.html.4becf775.js","assets/framework.7a428f9b.js"])),"v-d224a7f6":s(()=>e(()=>import("./mk.html.6c954373.js"),["assets/mk.html.6c954373.js","assets/framework.7a428f9b.js"])),"v-c7e7943c":s(()=>e(()=>import("./mn.html.e02c76ac.js"),["assets/mn.html.e02c76ac.js","assets/framework.7a428f9b.js"])),"v-ba40cf44":s(()=>e(()=>import("./mr.html.0b8b3530.js"),["assets/mr.html.0b8b3530.js","assets/framework.7a428f9b.js"])),"v-b6d71e06":s(()=>e(()=>import("./ms.html.675f6c6d.js"),["assets/ms.html.675f6c6d.js","assets/framework.7a428f9b.js"])),"v-870f6ca2":s(()=>e(()=>import("./nb.html.911d2ab3.js"),["assets/nb.html.911d2ab3.js","assets/framework.7a428f9b.js"])),"v-7cd258e8":s(()=>e(()=>import("./ne.html.00717c29.js"),["assets/ne.html.00717c29.js","assets/framework.7a428f9b.js"])),"v-64ee8036":s(()=>e(()=>import("./nl.html.a5923e3c.js"),["assets/nl.html.a5923e3c.js","assets/framework.7a428f9b.js"])),"v-5e1b1dba":s(()=>e(()=>import("./nn.html.e4105d22.js"),["assets/nn.html.e4105d22.js","assets/framework.7a428f9b.js"])),"v-19d944e2":s(()=>e(()=>import("./oc.html.841df02f.js"),["assets/oc.html.841df02f.js","assets/framework.7a428f9b.js"])),"v-37553667":s(()=>e(()=>import("./pl.html.4bdd8dd8.js"),["assets/pl.html.4bdd8dd8.js","assets/framework.7a428f9b.js"])),"v-434722c0":s(()=>e(()=>import("./ps.html.9fc758a5.js"),["assets/ps.html.9fc758a5.js","assets/framework.7a428f9b.js"])),"v-44fbfb5f":s(()=>e(()=>import("./pt.html.c8110401.js"),["assets/pt.html.c8110401.js","assets/framework.7a428f9b.js"])),"v-dc4cfdf8":s(()=>e(()=>import("./pt_BR.html.2b035be9.js"),["assets/pt_BR.html.2b035be9.js","assets/framework.7a428f9b.js"])),"v-b37f9274":s(()=>e(()=>import("./ro.html.e804a5cf.js"),["assets/ro.html.e804a5cf.js","assets/framework.7a428f9b.js"])),"v-9f056b00":s(()=>e(()=>import("./ru.html.149640af.js"),["assets/ru.html.149640af.js","assets/framework.7a428f9b.js"])),"v-72a76ada":s(()=>e(()=>import("./sc.html.367e49ad.js"),["assets/sc.html.367e49ad.js","assets/framework.7a428f9b.js"])),"v-5e2d4366":s(()=>e(()=>import("./si.html.f4e2caa1.js"),["assets/si.html.f4e2caa1.js","assets/framework.7a428f9b.js"])),"v-5759e0ea":s(()=>e(()=>import("./sk.html.a9a6fffd.js"),["assets/sk.html.a9a6fffd.js","assets/framework.7a428f9b.js"])),"v-53f02fac":s(()=>e(()=>import("./sl.html.069153e6.js"),["assets/sl.html.069153e6.js","assets/framework.7a428f9b.js"])),"v-42dfb976":s(()=>e(()=>import("./sq.html.b7ac09b6.js"),["assets/sq.html.b7ac09b6.js","assets/framework.7a428f9b.js"])),"v-330c9042":s(()=>e(()=>import("./sr_Cyrl.html.a7ebf7aa.js"),["assets/sr_Cyrl.html.a7ebf7aa.js","assets/framework.7a428f9b.js"])),"v-6608dc80":s(()=>e(()=>import("./sr_Latn.html.84b2fb8f.js"),["assets/sr_Latn.html.84b2fb8f.js","assets/framework.7a428f9b.js"])),"v-098bcebb":s(()=>e(()=>import("./sr_Latn_ME.html.c5f5f5c6.js"),["assets/sr_Latn_ME.html.c5f5f5c6.js","assets/framework.7a428f9b.js"])),"v-31cf4340":s(()=>e(()=>import("./sv.html.0430a1a1.js"),["assets/sv.html.0430a1a1.js","assets/framework.7a428f9b.js"])),"v-2e659202":s(()=>e(()=>import("./sw.html.bd31f4ee.js"),["assets/sw.html.bd31f4ee.js","assets/framework.7a428f9b.js"])),"v-0265e850":s(()=>e(()=>import("./tg.html.ffe6a707.js"),["assets/tg.html.ffe6a707.js","assets/framework.7a428f9b.js"])),"v-041ac0ef":s(()=>e(()=>import("./th.html.fce9f41e.js"),["assets/th.html.fce9f41e.js","assets/framework.7a428f9b.js"])),"v-09394acc":s(()=>e(()=>import("./tk.html.57e8ad30.js"),["assets/tk.html.57e8ad30.js","assets/framework.7a428f9b.js"])),"v-0aee236b":s(()=>e(()=>import("./tl.html.c377bc71.js"),["assets/tl.html.c377bc71.js","assets/framework.7a428f9b.js"])),"v-152b3725":s(()=>e(()=>import("./tr.html.d3a26851.js"),["assets/tr.html.d3a26851.js","assets/framework.7a428f9b.js"])),"v-374c2391":s(()=>e(()=>import("./ug.html.8a18de05.js"),["assets/ug.html.8a18de05.js","assets/framework.7a428f9b.js"])),"v-3e1f860d":s(()=>e(()=>import("./uk.html.bcc85ef3.js"),["assets/uk.html.bcc85ef3.js","assets/framework.7a428f9b.js"])),"v-4a117266":s(()=>e(()=>import("./ur.html.f0d1d71b.js"),["assets/ur.html.f0d1d71b.js","assets/framework.7a428f9b.js"])),"v-c5faceb6":s(()=>e(()=>import("./uz_Cyrl.html.4d8d1f1d.js"),["assets/uz_Cyrl.html.4d8d1f1d.js","assets/framework.7a428f9b.js"])),"v-f8f71af4":s(()=>e(()=>import("./uz_Latn.html.7311d51f.js"),["assets/uz_Latn.html.7311d51f.js","assets/framework.7a428f9b.js"])),"v-6f9c1010":s(()=>e(()=>import("./vi.html.c484b6cb.js"),["assets/vi.html.c484b6cb.js","assets/framework.7a428f9b.js"])),"v-579590f3":s(()=>e(()=>import("./zh_CN.html.93423608.js"),["assets/zh_CN.html.93423608.js","assets/framework.7a428f9b.js"])),"v-5af62f5b":s(()=>e(()=>import("./zh_HK.html.d5a7c2f9.js"),["assets/zh_HK.html.d5a7c2f9.js","assets/framework.7a428f9b.js"])),"v-2b89c44a":s(()=>e(()=>import("./zh_TW.html.b962e665.js"),["assets/zh_TW.html.b962e665.js","assets/framework.7a428f9b.js"])),"v-3706649a":s(()=>e(()=>import("./404.html.99625cef.js"),["assets/404.html.99625cef.js","assets/framework.7a428f9b.js"]))};var tt=f(Q),V=S({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),n=f(V),b=()=>n,I=Symbol(""),Dt=()=>{const t=L(I);if(!t)throw new Error("usePageFrontmatter() is called without provider.");return t},g=Symbol(""),et=()=>{const t=L(g);if(!t)throw new Error("usePageHead() is called without provider.");return t},st=Symbol(""),y=Symbol(""),_t=()=>{const t=L(y);if(!t)throw new Error("usePageLang() is called without provider.");return t},k=Symbol(""),Ot=()=>{const t=L(k);if(!t)throw new Error("useRouteLocale() is called without provider.");return t},E=f(X),at=()=>E,C=Symbol(""),Vt=()=>{const t=L(C);if(!t)throw new Error("useSiteLocaleData() is called without provider.");return t},rt=Symbol(""),m=w({resolvePageData:async t=>{const _=tt.value[t],r=await(_==null?void 0:_());return r!=null?r:V},resolvePageFrontmatter:t=>t.frontmatter,resolvePageHead:(t,_,r)=>{const a=c(_.description)?_.description:r.description,i=[...x(_.head)?_.head:[],...r.head,["title",{},t],["meta",{name:"description",content:a}]];return H(i)},resolvePageHeadTitle:(t,_)=>`${t.title?`${t.title}`:""}${_.title?` | ${_.title}`:""}`,resolvePageLang:t=>t.lang||"en",resolveRouteLocale:(t,_)=>z(t,_),resolveSiteLocaleData:(t,_)=>({...t,...t.locales[_]})}),ot=P({name:"ClientOnly",setup(t,_){const r=f(!1);return D(()=>{r.value=!0}),()=>{var a,i;return r.value?(i=(a=_.slots).default)==null?void 0:i.call(a):null}}}),it=P({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(t){const _=b(),r=d(()=>O[t.pageKey||_.value.key]);return()=>r.value?p(r.value):p("div","404 Not Found")}}),ut=t=>$(t)?t:`${at().value.base}${N(t)}`;const vt=[["v-606dbee4","/code-of-conduct.html",{title:"Contributor Covenant Code of Conduct"},["/code-of-conduct","/code-of-conduct.md"]],["v-6ce48554","/contributing.html",{title:"Contributing"},["/contributing","/contributing.md"]],["v-8daa1a0e","/",{title:"Getting Started"},["/index.html","/index.md"]],["v-5fbc6baa","/referents.html",{title:"Referents by language"},["/referents","/referents.md"]],["v-0a4580e4","/status.html",{title:"Completion Status"},["/status","/status.md"]],["v-646b6f91","/usage.html",{title:"Basic Usage"},["/usage","/usage.md"]],["v-239bf7bc","/changelog/10.x.html",{title:"10.x"},["/changelog/10.x","/changelog/10.x.md"]],["v-e905b6ca","/changelog/11.x.html",{title:"11.x"},["/changelog/11.x","/changelog/11.x.md"]],["v-19435d0c","/changelog/12.x.html",{title:"12.x"},["/changelog/12.x","/changelog/12.x.md"]],["v-6828d1cc","/changelog/7.x.html",{title:"7.x"},["/changelog/7.x","/changelog/7.x.md"]],["v-5fec02aa","/changelog/8.x.html",{title:"8.x"},["/changelog/8.x","/changelog/8.x.md"]],["v-37eb2b8a","/changelog/9.x.html",{title:"9.x"},["/changelog/9.x","/changelog/9.x.md"]],["v-510ed0d4","/changelog/",{title:"Changelog"},["/changelog/index.html","/changelog/index.md"]],["v-4e429576","/installation/compatibility.html",{title:"Compatibility"},["/installation/compatibility","/installation/compatibility.md"]],["v-385a267a","/installation/github.html",{title:"GitHub"},["/installation/github","/installation/github.md"]],["v-08a5d2dc","/installation/",{title:"Installation"},["/installation/index.html","/installation/index.md"]],["v-1ef1c652","/installation/managers.html",{title:"Translation Managers"},["/installation/managers","/installation/managers.md"]],["v-139aa9de","/statuses/af.html",{title:"af"},["/statuses/af","/statuses/af.md"]],["v-2814d152","/statuses/ar.html",{title:"ar"},["/statuses/ar","/statuses/ar.md"]],["v-35bb964a","/statuses/az.html",{title:"az"},["/statuses/az","/statuses/az.md"]],["v-46cc0c80","/statuses/be.html",{title:"be"},["/statuses/be","/statuses/be.md"]],["v-4a35bdbe","/statuses/bg.html",{title:"bg"},["/statuses/bg","/statuses/bg.md"]],["v-5627aa17","/statuses/bn.html",{title:"bn"},["/statuses/bn","/statuses/bn.md"]],["v-5eafe532","/statuses/bs.html",{title:"bs"},["/statuses/bs","/statuses/bs.md"]],["v-74dee545","/statuses/ca.html",{title:"ca"},["/statuses/ca","/statuses/ca.md"]],["v-d8d3bf1a","/statuses/cs.html",{title:"cs"},["/statuses/cs","/statuses/cs.md"]],["v-c45997a6","/statuses/cy.html",{title:"cy"},["/statuses/cy","/statuses/cy.md"]],["v-ac75bef4","/statuses/da.html",{title:"da"},["/statuses/da","/statuses/da.md"]],["v-9ecef9fc","/statuses/de.html",{title:"de"},["/statuses/de","/statuses/de.md"]],["v-db8910e8","/statuses/de_CH.html",{title:"de_CH"},["/statuses/de_CH","/statuses/de_CH.md"]],["v-1d1eaac8","/statuses/el.html",{title:"el"},["/statuses/el","/statuses/el.md"]],["v-053ad216","/statuses/es.html",{title:"es"},["/statuses/es","/statuses/es.md"]],["v-01d120d8","/statuses/et.html",{title:"et"},["/statuses/et","/statuses/et.md"]],["v-00cc4833","/statuses/eu.html",{title:"eu"},["/statuses/eu","/statuses/eu.md"]],["v-13919708","/statuses/fa.html",{title:"fa"},["/statuses/fa","/statuses/fa.md"]],["v-21385c00","/statuses/fi.html",{title:"fi"},["/statuses/fi","/statuses/fi.md"]],["v-6c68eda6","/statuses/fil.html",{title:"fil"},["/statuses/fil","/statuses/fil.md"]],["v-3093f997","/statuses/fr.html",{title:"fr"},["/statuses/fr","/statuses/fr.md"]],["v-5b3d211e","/statuses/gl.html",{title:"gl"},["/statuses/gl","/statuses/gl.md"]],["v-6a98beb5","/statuses/gu.html",{title:"gu"},["/statuses/gu","/statuses/gu.md"]],["v-f79d1ff4","/statuses/he.html",{title:"he"},["/statuses/he","/statuses/he.md"]],["v-e9f65afc","/statuses/hi.html",{title:"hi"},["/statuses/hi","/statuses/hi.md"]],["v-cb3f1fce","/statuses/hr.html",{title:"hr"},["/statuses/hr","/statuses/hr.md"]],["v-c1020c14","/statuses/hu.html",{title:"hu"},["/statuses/hu","/statuses/hu.md"]],["v-b35b471c","/statuses/hy.html",{title:"hy"},["/statuses/hy","/statuses/hy.md"]],["v-913a5ab0","/statuses/id.html",{title:"id"},["/statuses/id","/statuses/id.md"]],["v-5e08f80e","/statuses/is.html",{title:"is"},["/statuses/is","/statuses/is.md"]],["v-5a9f46d0","/statuses/it.html",{title:"it"},["/statuses/it","/statuses/it.md"]],["v-31aaf7e8","/statuses/ja.html",{title:"ja"},["/statuses/ja","/statuses/ja.md"]],["v-1c10bf4d","/statuses/ka.html",{title:"ka"},["/statuses/ka","/statuses/ka.md"]],["v-2d213583","/statuses/kk.html",{title:"kk"},["/statuses/kk","/statuses/kk.md"]],["v-308ae6c1","/statuses/km.html",{title:"km"},["/statuses/km","/statuses/km.md"]],["v-323fbf60","/statuses/kn.html",{title:"kn"},["/statuses/kn","/statuses/kn.md"]],["v-33f497ff","/statuses/ko.html",{title:"ko"},["/statuses/ko","/statuses/ko.md"]],["v-71630e5b","/statuses/lt.html",{title:"lt"},["/statuses/lt","/statuses/lt.md"]],["v-74ccbf99","/statuses/lv.html",{title:"lv"},["/statuses/lv","/statuses/lv.md"]],["v-d224a7f6","/statuses/mk.html",{title:"mk"},["/statuses/mk","/statuses/mk.md"]],["v-c7e7943c","/statuses/mn.html",{title:"mn"},["/statuses/mn","/statuses/mn.md"]],["v-ba40cf44","/statuses/mr.html",{title:"mr"},["/statuses/mr","/statuses/mr.md"]],["v-b6d71e06","/statuses/ms.html",{title:"ms"},["/statuses/ms","/statuses/ms.md"]],["v-870f6ca2","/statuses/nb.html",{title:"nb"},["/statuses/nb","/statuses/nb.md"]],["v-7cd258e8","/statuses/ne.html",{title:"ne"},["/statuses/ne","/statuses/ne.md"]],["v-64ee8036","/statuses/nl.html",{title:"nl"},["/statuses/nl","/statuses/nl.md"]],["v-5e1b1dba","/statuses/nn.html",{title:"nn"},["/statuses/nn","/statuses/nn.md"]],["v-19d944e2","/statuses/oc.html",{title:"oc"},["/statuses/oc","/statuses/oc.md"]],["v-37553667","/statuses/pl.html",{title:"pl"},["/statuses/pl","/statuses/pl.md"]],["v-434722c0","/statuses/ps.html",{title:"ps"},["/statuses/ps","/statuses/ps.md"]],["v-44fbfb5f","/statuses/pt.html",{title:"pt"},["/statuses/pt","/statuses/pt.md"]],["v-dc4cfdf8","/statuses/pt_BR.html",{title:"pt_BR"},["/statuses/pt_BR","/statuses/pt_BR.md"]],["v-b37f9274","/statuses/ro.html",{title:"ro"},["/statuses/ro","/statuses/ro.md"]],["v-9f056b00","/statuses/ru.html",{title:"ru"},["/statuses/ru","/statuses/ru.md"]],["v-72a76ada","/statuses/sc.html",{title:"sc"},["/statuses/sc","/statuses/sc.md"]],["v-5e2d4366","/statuses/si.html",{title:"si"},["/statuses/si","/statuses/si.md"]],["v-5759e0ea","/statuses/sk.html",{title:"sk"},["/statuses/sk","/statuses/sk.md"]],["v-53f02fac","/statuses/sl.html",{title:"sl"},["/statuses/sl","/statuses/sl.md"]],["v-42dfb976","/statuses/sq.html",{title:"sq"},["/statuses/sq","/statuses/sq.md"]],["v-330c9042","/statuses/sr_Cyrl.html",{title:"sr_Cyrl"},["/statuses/sr_Cyrl","/statuses/sr_Cyrl.md"]],["v-6608dc80","/statuses/sr_Latn.html",{title:"sr_Latn"},["/statuses/sr_Latn","/statuses/sr_Latn.md"]],["v-098bcebb","/statuses/sr_Latn_ME.html",{title:"sr_Latn_ME"},["/statuses/sr_Latn_ME","/statuses/sr_Latn_ME.md"]],["v-31cf4340","/statuses/sv.html",{title:"sv"},["/statuses/sv","/statuses/sv.md"]],["v-2e659202","/statuses/sw.html",{title:"sw"},["/statuses/sw","/statuses/sw.md"]],["v-0265e850","/statuses/tg.html",{title:"tg"},["/statuses/tg","/statuses/tg.md"]],["v-041ac0ef","/statuses/th.html",{title:"th"},["/statuses/th","/statuses/th.md"]],["v-09394acc","/statuses/tk.html",{title:"tk"},["/statuses/tk","/statuses/tk.md"]],["v-0aee236b","/statuses/tl.html",{title:"tl"},["/statuses/tl","/statuses/tl.md"]],["v-152b3725","/statuses/tr.html",{title:"tr"},["/statuses/tr","/statuses/tr.md"]],["v-374c2391","/statuses/ug.html",{title:"ug"},["/statuses/ug","/statuses/ug.md"]],["v-3e1f860d","/statuses/uk.html",{title:"uk"},["/statuses/uk","/statuses/uk.md"]],["v-4a117266","/statuses/ur.html",{title:"ur"},["/statuses/ur","/statuses/ur.md"]],["v-c5faceb6","/statuses/uz_Cyrl.html",{title:"uz_Cyrl"},["/statuses/uz_Cyrl","/statuses/uz_Cyrl.md"]],["v-f8f71af4","/statuses/uz_Latn.html",{title:"uz_Latn"},["/statuses/uz_Latn","/statuses/uz_Latn.md"]],["v-6f9c1010","/statuses/vi.html",{title:"vi"},["/statuses/vi","/statuses/vi.md"]],["v-579590f3","/statuses/zh_CN.html",{title:"zh_CN"},["/statuses/zh_CN","/statuses/zh_CN.md"]],["v-5af62f5b","/statuses/zh_HK.html",{title:"zh_HK"},["/statuses/zh_HK","/statuses/zh_HK.md"]],["v-2b89c44a","/statuses/zh_TW.html",{title:"zh_TW"},["/statuses/zh_TW","/statuses/zh_TW.md"]],["v-3706649a","/404.html",{title:""},["/404"]]];var dt="Layout",lt="NotFound",mt=async()=>{const{clientConfigs:t}=await e(()=>import("./clientConfigs.5183d800.js"),["assets/clientConfigs.5183d800.js","assets/framework.7a428f9b.js"]),_=t.reduce((a,i)=>({...a,...i.layouts}),{});return P({name:"Vuepress",setup(){const a=b(),i=d(()=>{let o;if(a.value.path){const u=a.value.frontmatter.layout;c(u)?o=u:o=dt}else o=lt;return _[o]});return()=>p(i.value)}})},nt=async()=>{const t=await mt();return vt.reduce((_,[r,a,i,o])=>(_.push({name:r,path:a,component:t,meta:i},...o.map(u=>({path:u,redirect:a}))),_),[{name:"404",path:"/:catchAll(.*)",component:t}])},Et=W,ct=async()=>{const t=j({history:Et(M(E.value.base)),routes:await nt(),scrollBehavior:(_,r,a)=>a||(_.hash?{el:_.hash}:{top:0})});return t.beforeResolve(async(_,r)=>{var a;(_.path!==r.path||r===U)&&([n.value]=await Promise.all([m.resolvePageData(_.name),(a=O[_.name])==null?void 0:a.__asyncLoader()]))}),t},ht=t=>{t.component("ClientOnly",ot),t.component("Content",it)},pt=(t,_)=>{const r=d(()=>m.resolveRouteLocale(E.value.locales,_.currentRoute.value.path)),a=d(()=>m.resolveSiteLocaleData(E.value,r.value)),i=d(()=>m.resolvePageFrontmatter(n.value)),o=d(()=>m.resolvePageHeadTitle(n.value,a.value)),u=d(()=>m.resolvePageHead(o.value,i.value,a.value)),v=d(()=>m.resolvePageLang(n.value));return t.provide(k,r),t.provide(C,a),t.provide(I,i),t.provide(st,o),t.provide(g,u),t.provide(y,v),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get:()=>i.value},$head:{get:()=>u.value},$headTitle:{get:()=>o.value},$lang:{get:()=>v.value},$page:{get:()=>n.value},$routeLocale:{get:()=>r.value},$site:{get:()=>E.value},$siteLocale:{get:()=>a.value},$withBase:{get:()=>ut}}),{pageData:n,pageFrontmatter:i,pageHead:u,pageHeadTitle:o,pageLang:v,routeLocale:r,siteData:E,siteLocaleData:a}},ft=()=>{const t=q(),_=et(),r=_t(),a=f([]),i=()=>{_.value.forEach(u=>{const v=Lt(u);v&&a.value.push(v)})},o=()=>{document.documentElement.lang=r.value,a.value.forEach(u=>{u.parentNode===document.head&&document.head.removeChild(u)}),a.value.splice(0,a.value.length),_.value.forEach(u=>{const v=Rt(u);v!==null&&(document.head.appendChild(v),a.value.push(v))})};J(rt,o),D(()=>{i(),o(),K(()=>t.path,()=>o())})},Lt=([t,_,r=""])=>{const a=Object.entries(_).map(([v,R])=>c(R)?`[${v}=${JSON.stringify(R)}]`:R===!0?`[${v}]`:"").join(""),i=`head > ${t}${a}`;return Array.from(document.querySelectorAll(i)).find(v=>v.innerText===r)||null},Rt=([t,_,r])=>{if(!c(t))return null;const a=document.createElement(t);return G(_)&&Object.entries(_).forEach(([i,o])=>{c(o)?a.setAttribute(i,o):o===!0&&a.setAttribute(i,"")}),c(r)&&a.appendChild(document.createTextNode(r)),a},Tt=F,Pt=async()=>{var a;const{clientConfigs:t}=await e(()=>import("./clientConfigs.5183d800.js"),["assets/clientConfigs.5183d800.js","assets/framework.7a428f9b.js"]),_=Tt({name:"VuepressApp",setup(){var i;ft();for(const o of t)(i=o.setup)==null||i.call(o);return()=>[p(B),...t.flatMap(({rootComponents:o=[]})=>o.map(u=>p(u)))]}}),r=await ct();ht(_),pt(_,r);for(const i of t)await((a=i.enhance)==null?void 0:a.call(i,{app:_,router:r,siteData:E}));return _.use(r),{app:_,router:r}};Pt().then(({app:t,router:_})=>{_.isReady().then(()=>{t.mount("#app")})});export{ot as C,Dt as a,b,at as c,Pt as createVueApp,Vt as d,_t as e,k as r,Ot as u,ut as w};
