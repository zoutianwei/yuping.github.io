if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,t)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let r={};const u=s=>l(s,n),a={module:{uri:n},exports:r,require:u};e[n]=Promise.all(i.map((s=>a[s]||u(s)))).then((s=>(t(...s),r)))}}define(["./workbox-6da860f9"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"564e254fdaa7f9eb381e0d8a0c01f7fb"},{url:"assets/404.8b45ba67.js",revision:null},{url:"assets/404.html.122bf7e7.js",revision:null},{url:"assets/404.html.7d858b3d.js",revision:null},{url:"assets/app.0500202b.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/components.html.0b395001.js",revision:null},{url:"assets/components.html.8b573392.js",revision:null},{url:"assets/css.html.8428504d.js",revision:null},{url:"assets/css.html.e3d030e7.js",revision:null},{url:"assets/git-revert.html.0d41bf3b.js",revision:null},{url:"assets/git-revert.html.3dfe170a.js",revision:null},{url:"assets/Home.13b23d68.js",revision:null},{url:"assets/html.html.5473c82e.js",revision:null},{url:"assets/html.html.b7b68900.js",revision:null},{url:"assets/http.html.3a544048.js",revision:null},{url:"assets/http.html.992da38d.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.079f62f0.js",revision:null},{url:"assets/index.html.4c767236.js",revision:null},{url:"assets/index.html.5d7b813b.js",revision:null},{url:"assets/index.html.715f3892.js",revision:null},{url:"assets/index.html.cfc7afa8.js",revision:null},{url:"assets/index.html.eac2b53b.js",revision:null},{url:"assets/interview.html.5168ea28.js",revision:null},{url:"assets/interview.html.7ca3f472.js",revision:null},{url:"assets/JavaScript高级程序设计学习笔记1.html.1317c9c1.js",revision:null},{url:"assets/JavaScript高级程序设计学习笔记1.html.a8aeb3f7.js",revision:null},{url:"assets/jest-crash-notes.html.643a4561.js",revision:null},{url:"assets/jest-crash-notes.html.df16e167.js",revision:null},{url:"assets/js.html.640efd3c.js",revision:null},{url:"assets/js.html.edd9cb4d.js",revision:null},{url:"assets/Layout.472f6bfd.js",revision:null},{url:"assets/native.html.83da6498.js",revision:null},{url:"assets/native.html.a449049d.js",revision:null},{url:"assets/router.html.11f833ed.js",revision:null},{url:"assets/router.html.45a70ae0.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/style.2047fc34.css",revision:null},{url:"assets/vue-cli.html.51f1abb1.js",revision:null},{url:"assets/vue-cli.html.5efff8e4.js",revision:null},{url:"assets/vue3-proxy-and-destructuring-assignment.html.023811ca.js",revision:null},{url:"assets/vue3-proxy-and-destructuring-assignment.html.d6385e44.js",revision:null},{url:"assets/vuex.html.a1b06042.js",revision:null},{url:"assets/vuex.html.e4f8a2af.js",revision:null},{url:"bg.svg",revision:"a382c67ad2cb860076c270502b258bb1"},{url:"icon.png",revision:"f534e84891e22888ba57d450985d3c0a"},{url:"index.html",revision:"412e5a523494a621eb81e67632eeee1b"},{url:"notes/basics/css.html",revision:"5e595f02f636798f9ae9eaa9eb2be6e8"},{url:"notes/basics/html.html",revision:"91e6527c6ddad14607fdef5476a91146"},{url:"notes/basics/http.html",revision:"b0b2c7d94d6799c936c2d176ac7635a0"},{url:"notes/basics/js.html",revision:"242447d5b2a156c61713ff308e216036"},{url:"notes/index.html",revision:"de817d144fcb6e8b17cca7316eb1f90c"},{url:"notes/timeline/2022/07/JavaScript高级程序设计学习笔记1.html",revision:"72ee4aeddbdcec73bbd1ea2f9e4fa68a"},{url:"notes/timeline/2022/08/git-revert.html",revision:"18fe68d51f4381bb05e99e54e353083c"},{url:"notes/timeline/2022/08/jest-crash-notes.html",revision:"efd1b3eb17c764c3aacee9cb9a01b3db"},{url:"notes/timeline/2022/08/vue3-proxy-and-destructuring-assignment.html",revision:"ee706dd2acd73b50badc327f6e43cc55"},{url:"notes/vue/components.html",revision:"ab1a228415644fa2367b65ae5b32e979"},{url:"notes/vue/index.html",revision:"ca832b0f40adf42e3d8eacf539501a47"},{url:"notes/vue/interview.html",revision:"5bc1eefc4a0ec80bce1821f0470127a7"},{url:"notes/vue/native.html",revision:"9f876e5b4707961a5f63c953ca52bdcb"},{url:"notes/vue/router.html",revision:"575f510fb8a90efdc76850431d3dc8a3"},{url:"notes/vue/vue-cli.html",revision:"61758e1de96b3f2b0d68e678ba2c5037"},{url:"notes/vue/vuex.html",revision:"bf5948f5ceafd07376070f3adf53618e"},{url:"ua.js",revision:"453a2405a08cf1352ac134e31aed8998"}],{})}));
