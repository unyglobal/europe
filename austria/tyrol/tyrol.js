// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tyrol","repository":"europe","path":"austria/tyrol","depth":2,"parent":"austria","children":["hotting","innsbruck","pradl","telfs","wilten"]});
export const childModules = Object.freeze({"hotting":"./hotting/hotting.js","innsbruck":"./innsbruck/innsbruck.js","pradl":"./pradl/pradl.js","telfs":"./telfs/telfs.js","wilten":"./wilten/wilten.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
