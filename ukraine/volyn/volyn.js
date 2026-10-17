// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"volyn","repository":"europe","path":"ukraine/volyn","depth":2,"parent":"ukraine","children":["kovel","lutsk","novovolynsk","volodymyr-volynskyi"]});
export const childModules = Object.freeze({"kovel":"./kovel/kovel.js","lutsk":"./lutsk/lutsk.js","novovolynsk":"./novovolynsk/novovolynsk.js","volodymyr-volynskyi":"./volodymyr-volynskyi/volodymyr-volynskyi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
