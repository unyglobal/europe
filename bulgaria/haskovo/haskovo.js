// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haskovo","repository":"europe","path":"bulgaria/haskovo","depth":2,"parent":"bulgaria","children":["dimitrovgrad","harmanli","svilengrad"]});
export const childModules = Object.freeze({"dimitrovgrad":"./dimitrovgrad/dimitrovgrad.js","harmanli":"./harmanli/harmanli.js","svilengrad":"./svilengrad/svilengrad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
