// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dambovita-county","repository":"europe","path":"romania/dambovita-county","depth":2,"parent":"romania","children":["gaesti","moreni","targoviste"]});
export const childModules = Object.freeze({"gaesti":"./gaesti/gaesti.js","moreni":"./moreni/moreni.js","targoviste":"./targoviste/targoviste.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
