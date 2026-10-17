// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arendal","repository":"europe","path":"norway/agder/arendal","depth":3,"parent":"norway/agder","children":["barbu","kolbj-rnsvik","tyholmen"]});
export const childModules = Object.freeze({"barbu":"./barbu/barbu.js","kolbj-rnsvik":"./kolbj-rnsvik/kolbj-rnsvik.js","tyholmen":"./tyholmen/tyholmen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
