// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ostrobothnia","repository":"europe","path":"finland/ostrobothnia","depth":2,"parent":"finland","children":["jakobstad","korsholm","vaasa"]});
export const childModules = Object.freeze({"jakobstad":"./jakobstad/jakobstad.js","korsholm":"./korsholm/korsholm.js","vaasa":"./vaasa/vaasa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
