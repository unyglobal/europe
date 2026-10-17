// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"groningen","repository":"europe","path":"netherlands/groningen","depth":2,"parent":"netherlands","children":["delfzijl","hoogezand","korrewegwijk","leek","stadskanaal","veendam","winschoten"]});
export const childModules = Object.freeze({"delfzijl":"./delfzijl/delfzijl.js","hoogezand":"./hoogezand/hoogezand.js","korrewegwijk":"./korrewegwijk/korrewegwijk.js","leek":"./leek/leek.js","stadskanaal":"./stadskanaal/stadskanaal.js","veendam":"./veendam/veendam.js","winschoten":"./winschoten/winschoten.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
