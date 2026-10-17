// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"buryatiya-republic","repository":"europe","path":"russia/buryatiya-republic","depth":2,"parent":"russia","children":["gusinoozyorsk","kyakhta","severobaykal-sk","ulan-ude"]});
export const childModules = Object.freeze({"gusinoozyorsk":"./gusinoozyorsk/gusinoozyorsk.js","kyakhta":"./kyakhta/kyakhta.js","severobaykal-sk":"./severobaykal-sk/severobaykal-sk.js","ulan-ude":"./ulan-ude/ulan-ude.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
