// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tulcea","repository":"europe","path":"romania/tulcea-county/tulcea","depth":3,"parent":"romania/tulcea-county","children":["tudor-vladimirescu"]});
export const childModules = Object.freeze({"tudor-vladimirescu":"./tudor-vladimirescu/tudor-vladimirescu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
