// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hondarribia","repository":"europe","path":"spain/basque-country/hondarribia","depth":3,"parent":"spain/basque-country","children":["arroka","marina","miramar","portua","soroeta"]});
export const childModules = Object.freeze({"arroka":"./arroka/arroka.js","marina":"./marina/marina.js","miramar":"./miramar/miramar.js","portua":"./portua/portua.js","soroeta":"./soroeta/soroeta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
