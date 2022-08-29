import{_ as e,o as t,c as r,e as a}from"./app.f9e9c90b.js";const m={},i=a(`<h1 id="\u4F7F\u7528git-revert\u5904\u7406merge-commit" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528git-revert\u5904\u7406merge-commit" aria-hidden="true">#</a> \u4F7F\u7528git revert\u5904\u7406merge commit</h1><p>revert \u53EF\u4EE5\u53D6\u6D88\u6307\u5B9A\u7684\u67D0\u6B21\u63D0\u4EA4\u5185\u5BB9\u3002</p><h2 id="revert-merge-commit" tabindex="-1"><a class="header-anchor" href="#revert-merge-commit" aria-hidden="true">#</a> revert merge commit</h2><p>\u5F53\u8BA8\u8BBA revert \u65F6\uFF0C\u9700\u8981\u5206\u4E24\u79CD\u60C5\u51B5\uFF0C\u56E0\u4E3A commit \u5206\u4E3A\u4E24\u79CD\uFF1A</p><ol><li>\u4E00\u79CD\u662F\u5E38\u89C4\u7684 commit\uFF0C\u4E5F\u5C31\u662F\u4F7F\u7528 git commit \u63D0\u4EA4\u7684 commit</li><li>\u53E6\u4E00\u79CD\u662F merge commit\uFF0C\u5728\u4F7F\u7528 git merge \u5408\u5E76\u4E24\u4E2A\u5206\u652F\u4E4B\u540E\uFF0C\u4F60\u5C06\u4F1A\u5F97\u5230\u4E00\u4E2A\u65B0\u7684 merge commit</li></ol><p>\u5728revert \u4E00\u6B21 merge commit\u7684\u65F6\u5019\uFF0C\u4F1A\u6709\u5982\u4E0B\u63D0\u793A</p><div class="language-text ext-text"><pre class="language-text"><code>error: \u63D0\u4EA4 251782269f479ae5138b54e6b016f3370900366c \u662F\u4E00\u4E2A\u5408\u5E76\u63D0\u4EA4\u4F46\u672A\u63D0\u4F9B -m \u9009\u9879\u3002
</code></pre></div><p>\u8FD9\u662F\u56E0\u4E3A\u76F4\u63A5\u4F7F\u7528 git revert \uFF0Cgit \u4E5F\u4E0D\u77E5\u9053\u5230\u5E95\u8981\u64A4\u9664\u54EA\u4E00\u6761\u5206\u652F\u4E0A\u7684\u5185\u5BB9\uFF0C\u8FD9\u65F6\u9700\u8981\u6307\u5B9A\u4E00\u4E2A parent \u6807\u8BC6\u51FA&quot;\u4E3B\u7EBF&quot;\uFF0C\u4E3B\u7EBF\u7684\u5185\u5BB9\u5C06\u4F1A\u4FDD\u7559\uFF0C\u800C\u53E6\u4E00\u6761\u5206\u652F\u7684\u5185\u5BB9\u5C06\u88AB revert\u3002</p><p><strong>\u5982\u4F55\u67E5\u770B\u5E76\u6307\u5B9Aparent\uFF1F</strong></p><p>\u4F7F\u7528 git show \u547D\u4EE4\u53EF\u4EE5\u67E5\u770B commit \u7684\u8BE6\u7EC6\u4FE1\u606F</p><div class="language-text ext-text"><pre class="language-text"><code>commit 251782269f479ae5138b54e6b016f3370900366c
Merge: a6050bf da1d5fc
</code></pre></div><p>\u8FD9\u4EE3\u8868\u8BE5 merge commit \u662F\u4ECE a6050bf \u548C da1d5fc \u4E24\u4E2A commit \u5408\u5E76\u8FC7\u6765\u7684\u3002\u5982\u679C\u67E5\u770B\u5E38\u89C4\u7684commit\uFF0C\u662F\u6CA1\u6709merge\u8FD9\u4E00\u884C\u7684\uFF01</p><p>\u8FD9\u65F6\u6839\u636E\u60C5\u51B5\uFF0C\u627E\u5230\u4E3B\u7EBF\u5206\u652F\u7684commit id\uFF0C\u786E\u5B9A\u4E3A\u7B2C\u4E00\u4E2A\u8FD8\u662F\u7B2C\u4E8C\u4E2A\uFF0C\u56E0\u4E3A -m \u9009\u9879\u63A5\u6536\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u6570\u5B57\u53D6\u503C\u4E3A 1 \u548C 2\uFF0C\u5982\u4E0A\u9762\u7684\u4E3B\u7EBF\u4E3A a6050bf\uFF0C\u90A3\u4E48\u5C31\u4F7F\u7528</p><div class="language-text ext-text"><pre class="language-text"><code>git revert -m 1 a6050bf
</code></pre></div><h2 id="revert\u4E4B\u540E\u91CD\u65B0\u4E0A\u7EBF\u9700\u8981\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#revert\u4E4B\u540E\u91CD\u65B0\u4E0A\u7EBF\u9700\u8981\u6CE8\u610F" aria-hidden="true">#</a> revert\u4E4B\u540E\u91CD\u65B0\u4E0A\u7EBF\u9700\u8981\u6CE8\u610F</h2><p>\u6709\u65F6\uFF0C\u5C06\u5F00\u53D1\u540E\u7684feat\u5206\u652Fmerge\u5230dev\uFF0C\u4F46\u540E\u6765\u5904\u4E8E\u67D0\u4E9B\u539F\u56E0\u4EE3\u7801\u9700\u8981\u64A4\u56DE\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u5BF9\u8BE5merge\u6267\u884C\u4EE5\u4E0A\u6B65\u9AA4\u7684revert\uFF0C\u4F46\u8BE5\u4EE3\u7801\u4FEE\u6539\u540E\u6700\u7EC8\u53EF\u80FD\u8FD8\u662F\u4F1A\u4E0A\u7EBF\uFF0C\u4E4B\u540E\u60F3\u91CD\u65B0\u5408\u5E76\u5230dev\uFF0C\u53EA\u9700\u8981\u518D \u6267\u884C\u4E00\u6B21merge\u5373\u53EF\u3002</p><p><strong>\u9700\u8981\u6CE8\u610F\u7684\u662F</strong>\u7531\u4E8E\u4E4B\u524D\u5728\u4E3B\u5206\u652F\u4E0A\u6267\u884C\u8FC7merge\u64CD\u4F5C\uFF0C\u56E0\u6B64\u4E4B\u524Drevert\u8FC7\u7684\u4EE3\u7801\u4E0D\u4F1A\u88AB\u5B8C\u6574\u7684merge\uFF0C\u56E0\u6B64\u9700\u8981\u5BF9\u4E4B\u524Drevert\u7684\u90A3\u6B21\u63D0\u4EA4\u518D\u6B21\u6267\u884Crevert\uFF0C\u4E4B\u540E\u518D\u6267\u884Cmerge\u3002</p>`,17),c=[i];function o(g,d){return t(),r("div",null,c)}var s=e(m,[["render",o],["__file","git-revert.html.vue"]]);export{s as default};
