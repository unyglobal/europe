// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fredrikstad","repository":"europe","path":"norway/ostfold/fredrikstad","depth":3,"parent":"norway/ostfold","children":["apenesfjellet","frydenberg","glemmen","holmen"]});
export const childModules = Object.freeze({"apenesfjellet":"./apenesfjellet/apenesfjellet.js","frydenberg":"./frydenberg/frydenberg.js","glemmen":"./glemmen/glemmen.js","holmen":"./holmen/holmen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
