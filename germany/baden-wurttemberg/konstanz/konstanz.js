// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"konstanz","repository":"europe","path":"germany/baden-wurttemberg/konstanz","depth":3,"parent":"germany/baden-wurttemberg","children":["altstadt"]});
export const childModules = Object.freeze({"altstadt":"./altstadt/altstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
