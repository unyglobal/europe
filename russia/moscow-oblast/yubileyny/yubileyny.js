// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yubileyny","repository":"europe","path":"russia/moscow-oblast/yubileyny","depth":3,"parent":"russia/moscow-oblast","children":["bolshevo"]});
export const childModules = Object.freeze({"bolshevo":"./bolshevo/bolshevo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
