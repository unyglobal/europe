// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"scarborough","repository":"europe","path":"united-kingdom/england/scarborough","depth":3,"parent":"united-kingdom/england","children":["falsgrave","south-cliff","st-nicholas-cliff"]});
export const childModules = Object.freeze({"falsgrave":"./falsgrave/falsgrave.js","south-cliff":"./south-cliff/south-cliff.js","st-nicholas-cliff":"./st-nicholas-cliff/st-nicholas-cliff.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
