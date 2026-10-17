// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"crimea","repository":"europe","path":"ukraine/crimea","depth":2,"parent":"ukraine","children":["alushta","armyansk","arshyntseve","bakhchysaray","bilohirsk","dzhankoy","feodosiya","kerch","saky","simferopol","sudak","yalta","yany-kapu","yevpatoriya"]});
export const childModules = Object.freeze({"alushta":"./alushta/alushta.js","armyansk":"./armyansk/armyansk.js","arshyntseve":"./arshyntseve/arshyntseve.js","bakhchysaray":"./bakhchysaray/bakhchysaray.js","bilohirsk":"./bilohirsk/bilohirsk.js","dzhankoy":"./dzhankoy/dzhankoy.js","feodosiya":"./feodosiya/feodosiya.js","kerch":"./kerch/kerch.js","saky":"./saky/saky.js","simferopol":"./simferopol/simferopol.js","sudak":"./sudak/sudak.js","yalta":"./yalta/yalta.js","yany-kapu":"./yany-kapu/yany-kapu.js","yevpatoriya":"./yevpatoriya/yevpatoriya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
