// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"joenkoeping","repository":"europe","path":"sweden/joenkoeping","depth":2,"parent":"sweden","children":["huskvarna","jonkoping","nassjo","varnamo"]});
export const childModules = Object.freeze({"huskvarna":"./huskvarna/huskvarna.js","jonkoping":"./jonkoping/jonkoping.js","nassjo":"./nassjo/nassjo.js","varnamo":"./varnamo/varnamo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
