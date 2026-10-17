// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ramsbottom","repository":"europe","path":"united-kingdom/england/ramsbottom","depth":3,"parent":"united-kingdom/england","children":["bank-lane","carr","fletcher-bank","peel-brow","tagg-wood","tanners"]});
export const childModules = Object.freeze({"bank-lane":"./bank-lane/bank-lane.js","carr":"./carr/carr.js","fletcher-bank":"./fletcher-bank/fletcher-bank.js","peel-brow":"./peel-brow/peel-brow.js","tagg-wood":"./tagg-wood/tagg-wood.js","tanners":"./tanners/tanners.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
