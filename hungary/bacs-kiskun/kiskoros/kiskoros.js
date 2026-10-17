// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kiskoros","repository":"europe","path":"hungary/bacs-kiskun/kiskoros","depth":3,"parent":"hungary/bacs-kiskun","children":["agarhalom","felsokommaszacio","kozepcebe","remerencio"]});
export const childModules = Object.freeze({"agarhalom":"./agarhalom/agarhalom.js","felsokommaszacio":"./felsokommaszacio/felsokommaszacio.js","kozepcebe":"./kozepcebe/kozepcebe.js","remerencio":"./remerencio/remerencio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
