// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ostfold","repository":"europe","path":"norway/ostfold","depth":2,"parent":"norway","children":["fredrikstad","halden","moss","sarpsborg"]});
export const childModules = Object.freeze({"fredrikstad":"./fredrikstad/fredrikstad.js","halden":"./halden/halden.js","moss":"./moss/moss.js","sarpsborg":"./sarpsborg/sarpsborg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
