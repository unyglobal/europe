// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oestergoetland","repository":"europe","path":"sweden/oestergoetland","depth":2,"parent":"sweden","children":["linkoping","motala","norrkoping"]});
export const childModules = Object.freeze({"linkoping":"./linkoping/linkoping.js","motala":"./motala/motala.js","norrkoping":"./norrkoping/norrkoping.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
