require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({8:[function(require,module,exports) {
Vue.component("intro",{props:["intros","edit","save","refresh"],data:function(){return{intros_:void 0}},template:'\n            <div class="row introduction">\n                <div class="col-12 text-center">\n                    <p v-show="!edit" class="text-primary">{{intros}}</p>\n                    <div class="input-group mb-3" v-show="edit">\n                        <div class="input-group-prepend">\n                            <span class="input-group-text">简介</span>\n                        </div>\n                        <input type="text" v-model="intros_" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">\n                    </div>\n                </div>\n            </div>\n        ',created(){this.intros_=this.intros},beforeUpdate(){(this.save||this.refresh)&&(this.intros_=this.intros,this.refresh&&this.$emit("loaded"))},watch:{save:function(t){t&&this.$emit("save",{intros:this.intros_})}}});
},{}]},{},[8])