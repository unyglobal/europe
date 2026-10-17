// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kaarina","repository":"europe","path":"finland/southwest-finland/kaarina","depth":3,"parent":"finland/southwest-finland","children":["vattila","ylikyla"]});
export const childModules = Object.freeze({"vattila":"./vattila/vattila.js","ylikyla":"./ylikyla/ylikyla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
