// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"serres","repository":"europe","path":"greece/central-macedonia/serres","depth":3,"parent":"greece/central-macedonia","children":["serres-old-town"]});
export const childModules = Object.freeze({"serres-old-town":"./serres-old-town/serres-old-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
