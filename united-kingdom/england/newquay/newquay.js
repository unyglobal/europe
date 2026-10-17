// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"newquay","repository":"europe","path":"united-kingdom/england/newquay","depth":3,"parent":"united-kingdom/england","children":["trenance"]});
export const childModules = Object.freeze({"trenance":"./trenance/trenance.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
