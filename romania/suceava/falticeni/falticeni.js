// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"falticeni","repository":"europe","path":"romania/suceava/falticeni","depth":3,"parent":"romania/suceava","children":["cotu-iazului"]});
export const childModules = Object.freeze({"cotu-iazului":"./cotu-iazului/cotu-iazului.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
