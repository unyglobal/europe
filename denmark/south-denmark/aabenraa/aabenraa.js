// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aabenraa","repository":"europe","path":"denmark/south-denmark/aabenraa","depth":3,"parent":"denmark/south-denmark","children":["brundlund","j-rgensgard"]});
export const childModules = Object.freeze({"brundlund":"./brundlund/brundlund.js","j-rgensgard":"./j-rgensgard/j-rgensgard.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
