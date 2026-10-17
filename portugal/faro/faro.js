// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"faro","repository":"europe","path":"portugal/faro","depth":2,"parent":"portugal","children":["albufeira","lagos","loule","olhao","portimao","porto-de-mos","quarteira","quelfes","tavira"]});
export const childModules = Object.freeze({"albufeira":"./albufeira/albufeira.js","lagos":"./lagos/lagos.js","loule":"./loule/loule.js","olhao":"./olhao/olhao.js","portimao":"./portimao/portimao.js","porto-de-mos":"./porto-de-mos/porto-de-mos.js","quarteira":"./quarteira/quarteira.js","quelfes":"./quelfes/quelfes.js","tavira":"./tavira/tavira.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
