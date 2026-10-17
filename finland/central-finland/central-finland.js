// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-finland","repository":"europe","path":"finland/central-finland","depth":2,"parent":"finland","children":["aanekoski","jamsa","jyvaskyla","laukaa"]});
export const childModules = Object.freeze({"aanekoski":"./aanekoski/aanekoski.js","jamsa":"./jamsa/jamsa.js","jyvaskyla":"./jyvaskyla/jyvaskyla.js","laukaa":"./laukaa/laukaa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
