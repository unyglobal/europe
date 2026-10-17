// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gdansk","repository":"europe","path":"poland/pomerania/gdansk","depth":3,"parent":"poland/pomerania","children":["g-owne-miasto","nowe-miasto","srodmiescie"]});
export const childModules = Object.freeze({"g-owne-miasto":"./g-owne-miasto/g-owne-miasto.js","nowe-miasto":"./nowe-miasto/nowe-miasto.js","srodmiescie":"./srodmiescie/srodmiescie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
