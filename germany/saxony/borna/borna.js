// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"borna","repository":"europe","path":"germany/saxony/borna","depth":3,"parent":"germany/saxony","children":["altstadt-borna"]});
export const childModules = Object.freeze({"altstadt-borna":"./altstadt-borna/altstadt-borna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
