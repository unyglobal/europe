// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"portslade","repository":"europe","path":"united-kingdom/england/portslade","depth":3,"parent":"united-kingdom/england","children":["southern-cross"]});
export const childModules = Object.freeze({"southern-cross":"./southern-cross/southern-cross.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
