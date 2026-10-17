// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"altai-krai","repository":"europe","path":"russia/altai-krai","depth":2,"parent":"russia","children":["aleysk","barnaul","biysk","gornyak","kamen-na-obi","kulunda","novoaltaysk","novosilikatnyy","rubtsovsk","slavgorod","tal-menka","yarovoye","yuzhnyy","zarinsk"]});
export const childModules = Object.freeze({"aleysk":"./aleysk/aleysk.js","barnaul":"./barnaul/barnaul.js","biysk":"./biysk/biysk.js","gornyak":"./gornyak/gornyak.js","kamen-na-obi":"./kamen-na-obi/kamen-na-obi.js","kulunda":"./kulunda/kulunda.js","novoaltaysk":"./novoaltaysk/novoaltaysk.js","novosilikatnyy":"./novosilikatnyy/novosilikatnyy.js","rubtsovsk":"./rubtsovsk/rubtsovsk.js","slavgorod":"./slavgorod/slavgorod.js","tal-menka":"./tal-menka/tal-menka.js","yarovoye":"./yarovoye/yarovoye.js","yuzhnyy":"./yuzhnyy/yuzhnyy.js","zarinsk":"./zarinsk/zarinsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
