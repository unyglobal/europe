// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kherson","repository":"europe","path":"ukraine/kherson","depth":2,"parent":"ukraine","children":["henichesk","kakhovka","nova-kakhovka","oleshky","skadovsk"]});
export const childModules = Object.freeze({"henichesk":"./henichesk/henichesk.js","kakhovka":"./kakhovka/kakhovka.js","nova-kakhovka":"./nova-kakhovka/nova-kakhovka.js","oleshky":"./oleshky/oleshky.js","skadovsk":"./skadovsk/skadovsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
