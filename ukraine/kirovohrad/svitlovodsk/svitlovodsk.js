// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"svitlovodsk","repository":"europe","path":"ukraine/kirovohrad/svitlovodsk","depth":3,"parent":"ukraine/kirovohrad","children":["prymorskyi"]});
export const childModules = Object.freeze({"prymorskyi":"./prymorskyi/prymorskyi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
