// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"korrewegwijk","repository":"europe","path":"netherlands/groningen/korrewegwijk","depth":3,"parent":"netherlands/groningen","children":["selwerd"]});
export const childModules = Object.freeze({"selwerd":"./selwerd/selwerd.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
