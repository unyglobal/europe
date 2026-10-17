// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eberswalde","repository":"europe","path":"germany/brandenburg/eberswalde","depth":3,"parent":"germany/brandenburg","children":["eberswalde-eins","eberswalde-zwei"]});
export const childModules = Object.freeze({"eberswalde-eins":"./eberswalde-eins/eberswalde-eins.js","eberswalde-zwei":"./eberswalde-zwei/eberswalde-zwei.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
