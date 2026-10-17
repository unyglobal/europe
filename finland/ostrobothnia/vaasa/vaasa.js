// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vaasa","repository":"europe","path":"finland/ostrobothnia/vaasa","depth":3,"parent":"finland/ostrobothnia","children":["i-kaupunginosa","ii-kaupunginosa","iii-kaupunginosa","iv-kaupunginosa","vi-kaupunginosa","vii-kaupunginosa","viii-kaupunginosa","xi-kaupunginosa"]});
export const childModules = Object.freeze({"i-kaupunginosa":"./i-kaupunginosa/i-kaupunginosa.js","ii-kaupunginosa":"./ii-kaupunginosa/ii-kaupunginosa.js","iii-kaupunginosa":"./iii-kaupunginosa/iii-kaupunginosa.js","iv-kaupunginosa":"./iv-kaupunginosa/iv-kaupunginosa.js","vi-kaupunginosa":"./vi-kaupunginosa/vi-kaupunginosa.js","vii-kaupunginosa":"./vii-kaupunginosa/vii-kaupunginosa.js","viii-kaupunginosa":"./viii-kaupunginosa/viii-kaupunginosa.js","xi-kaupunginosa":"./xi-kaupunginosa/xi-kaupunginosa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
