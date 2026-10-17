// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"turku","repository":"europe","path":"finland/southwest-finland/turku","depth":3,"parent":"finland/southwest-finland","children":["i-kaupunginosa","iii-kaupunginosa","samppalinna","vartiovuori","vi-kaupunginosa","vii-kaupunginosa"]});
export const childModules = Object.freeze({"i-kaupunginosa":"./i-kaupunginosa/i-kaupunginosa.js","iii-kaupunginosa":"./iii-kaupunginosa/iii-kaupunginosa.js","samppalinna":"./samppalinna/samppalinna.js","vartiovuori":"./vartiovuori/vartiovuori.js","vi-kaupunginosa":"./vi-kaupunginosa/vi-kaupunginosa.js","vii-kaupunginosa":"./vii-kaupunginosa/vii-kaupunginosa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
