// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arrasate-mondragon","repository":"europe","path":"spain/basque-country/arrasate-mondragon","depth":3,"parent":"spain/basque-country","children":["santa-barbara","uribarri"]});
export const childModules = Object.freeze({"santa-barbara":"./santa-barbara/santa-barbara.js","uribarri":"./uribarri/uribarri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
