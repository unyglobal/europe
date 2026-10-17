// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"strunino","repository":"europe","path":"russia/vladimir-oblast/strunino","depth":3,"parent":"russia/vladimir-oblast","children":["gorshechnaya"]});
export const childModules = Object.freeze({"gorshechnaya":"./gorshechnaya/gorshechnaya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
