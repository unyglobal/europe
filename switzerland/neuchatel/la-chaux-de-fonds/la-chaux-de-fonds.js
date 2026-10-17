// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-chaux-de-fonds","repository":"europe","path":"switzerland/neuchatel/la-chaux-de-fonds","depth":3,"parent":"switzerland/neuchatel","children":["abeilles-numa-droz","beauregard","centre","cretets","succes","ville-ancienne"]});
export const childModules = Object.freeze({"abeilles-numa-droz":"./abeilles-numa-droz/abeilles-numa-droz.js","beauregard":"./beauregard/beauregard.js","centre":"./centre/centre.js","cretets":"./cretets/cretets.js","succes":"./succes/succes.js","ville-ancienne":"./ville-ancienne/ville-ancienne.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
