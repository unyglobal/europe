// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mykolaiv","repository":"europe","path":"ukraine/mykolaiv","depth":2,"parent":"ukraine","children":["mykolayiv","pervomaysk","pivdennoukrainsk","voznesensk"]});
export const childModules = Object.freeze({"mykolayiv":"./mykolayiv/mykolayiv.js","pervomaysk":"./pervomaysk/pervomaysk.js","pivdennoukrainsk":"./pivdennoukrainsk/pivdennoukrainsk.js","voznesensk":"./voznesensk/voznesensk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
