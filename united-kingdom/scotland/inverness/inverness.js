// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"inverness","repository":"europe","path":"united-kingdom/scotland/inverness","depth":3,"parent":"united-kingdom/scotland","children":["citadel","crown","glebe","haugh","millburn"]});
export const childModules = Object.freeze({"citadel":"./citadel/citadel.js","crown":"./crown/crown.js","glebe":"./glebe/glebe.js","haugh":"./haugh/haugh.js","millburn":"./millburn/millburn.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
