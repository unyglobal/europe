// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"raahe","repository":"europe","path":"finland/north-ostrobothnia/raahe","depth":3,"parent":"finland/north-ostrobothnia","children":["katinhanta","koivuluoto","lehmiranta","miljoonapera","yrityspera"]});
export const childModules = Object.freeze({"katinhanta":"./katinhanta/katinhanta.js","koivuluoto":"./koivuluoto/koivuluoto.js","lehmiranta":"./lehmiranta/lehmiranta.js","miljoonapera":"./miljoonapera/miljoonapera.js","yrityspera":"./yrityspera/yrityspera.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
