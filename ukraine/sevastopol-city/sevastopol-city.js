// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sevastopol-city","repository":"europe","path":"ukraine/sevastopol-city","depth":2,"parent":"ukraine","children":["balaklava","korabelna-storona","sevastopol"]});
export const childModules = Object.freeze({"balaklava":"./balaklava/balaklava.js","korabelna-storona":"./korabelna-storona/korabelna-storona.js","sevastopol":"./sevastopol/sevastopol.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
