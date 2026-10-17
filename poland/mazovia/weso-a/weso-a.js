// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"weso-a","repository":"europe","path":"poland/mazovia/weso-a","depth":3,"parent":"poland/mazovia","children":["plac-wojska-polskiego","weso-a-centrum","wola-grzybowska"]});
export const childModules = Object.freeze({"plac-wojska-polskiego":"./plac-wojska-polskiego/plac-wojska-polskiego.js","weso-a-centrum":"./weso-a-centrum/weso-a-centrum.js","wola-grzybowska":"./wola-grzybowska/wola-grzybowska.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
