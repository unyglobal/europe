// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alushta","repository":"europe","path":"ukraine/crimea/alushta","depth":3,"parent":"ukraine/crimea","children":["profesorskyi-kutochok"]});
export const childModules = Object.freeze({"profesorskyi-kutochok":"./profesorskyi-kutochok/profesorskyi-kutochok.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
