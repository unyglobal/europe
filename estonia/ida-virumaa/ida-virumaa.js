// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ida-virumaa","repository":"europe","path":"estonia/ida-virumaa","depth":2,"parent":"estonia","children":["kohtla-jarve","narva"]});
export const childModules = Object.freeze({"kohtla-jarve":"./kohtla-jarve/kohtla-jarve.js","narva":"./narva/narva.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
