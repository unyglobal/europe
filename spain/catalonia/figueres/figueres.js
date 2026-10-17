// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"figueres","repository":"europe","path":"spain/catalonia/figueres","depth":3,"parent":"spain/catalonia","children":["l-horta-d-en-capellera","parc-sol"]});
export const childModules = Object.freeze({"l-horta-d-en-capellera":"./l-horta-d-en-capellera/l-horta-d-en-capellera.js","parc-sol":"./parc-sol/parc-sol.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
