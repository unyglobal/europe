// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"retford","repository":"europe","path":"united-kingdom/england/retford","depth":3,"parent":"united-kingdom/england","children":["balk-field","newtown","south-retford","west-field","west-retford"]});
export const childModules = Object.freeze({"balk-field":"./balk-field/balk-field.js","newtown":"./newtown/newtown.js","south-retford":"./south-retford/south-retford.js","west-field":"./west-field/west-field.js","west-retford":"./west-retford/west-retford.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
