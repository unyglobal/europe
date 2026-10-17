// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haslingden","repository":"europe","path":"united-kingdom/england/haslingden","depth":3,"parent":"united-kingdom/england","children":["helmcroft","lane-side","longshoot","waterfoot","well-bank"]});
export const childModules = Object.freeze({"helmcroft":"./helmcroft/helmcroft.js","lane-side":"./lane-side/lane-side.js","longshoot":"./longshoot/longshoot.js","waterfoot":"./waterfoot/waterfoot.js","well-bank":"./well-bank/well-bank.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
