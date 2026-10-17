// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bohodukhivskyi","repository":"europe","path":"ukraine/donetsk/bohodukhivskyi","depth":3,"parent":"ukraine/donetsk","children":["mushketove"]});
export const childModules = Object.freeze({"mushketove":"./mushketove/mushketove.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
