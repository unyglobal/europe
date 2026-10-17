// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kymenlaakso","repository":"europe","path":"finland/kymenlaakso","depth":2,"parent":"finland","children":["anjala","hamina","karhula","kotka","kouvola"]});
export const childModules = Object.freeze({"anjala":"./anjala/anjala.js","hamina":"./hamina/hamina.js","karhula":"./karhula/karhula.js","kotka":"./kotka/kotka.js","kouvola":"./kouvola/kouvola.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
