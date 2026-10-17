// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tolna-county","repository":"europe","path":"hungary/tolna-county","depth":2,"parent":"hungary","children":["dombovar","paks","szekszard"]});
export const childModules = Object.freeze({"dombovar":"./dombovar/dombovar.js","paks":"./paks/paks.js","szekszard":"./szekszard/szekszard.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
