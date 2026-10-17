// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hasselby-villastad","repository":"europe","path":"sweden/stockholm/hasselby-villastad","depth":3,"parent":"sweden/stockholm","children":["hasselby-norra-villastad"]});
export const childModules = Object.freeze({"hasselby-norra-villastad":"./hasselby-norra-villastad/hasselby-norra-villastad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
