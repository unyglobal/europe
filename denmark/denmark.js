// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"denmark","repository":"europe","path":"denmark","depth":1,"parent":"","children":["capital-region","central-jutland","north-denmark","south-denmark","zealand"]});
export const childModules = Object.freeze({"capital-region":"./capital-region/capital-region.js","central-jutland":"./central-jutland/central-jutland.js","north-denmark":"./north-denmark/north-denmark.js","south-denmark":"./south-denmark/south-denmark.js","zealand":"./zealand/zealand.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
