var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequire6099;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequire6099=n);var o=n("7EEHk"),a=n("0qYnf"),i=n("7JXm1");n("iymis");var l=n("ax7LL");const s=document.querySelector(".js-list");var d;const c=null!==(d=JSON.parse(localStorage.getItem(o.common.KEY_FAVORITE)))&&void 0!==d?d:[];(0,a.createMarkup)(c,s),s.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("js-info")){const{id:t}=e.target.closest(".js-card").dataset,r=(0,i.findProduct)(Number(t));(0,l.createModal)(r)}}));
//# sourceMappingURL=fevorite.aee9f577.js.map
