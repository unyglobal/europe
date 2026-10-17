// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kenilworth","repository":"europe","path":"united-kingdom/england/kenilworth","depth":3,"parent":"united-kingdom/england","children":["abbey-end","abbey-fields","ladyes-hills"]});
export const childModules = Object.freeze({"abbey-end":"./abbey-end/abbey-end.js","abbey-fields":"./abbey-fields/abbey-fields.js","ladyes-hills":"./ladyes-hills/ladyes-hills.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
