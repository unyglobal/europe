// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"katowice","repository":"europe","path":"poland/silesia/katowice","depth":3,"parent":"poland/silesia","children":["srodmiescie"]});
export const childModules = Object.freeze({"srodmiescie":"./srodmiescie/srodmiescie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
