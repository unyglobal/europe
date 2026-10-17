// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pravyi-bereh","repository":"europe","path":"ukraine/donetsk/pravyi-bereh","depth":3,"parent":"ukraine/donetsk","children":["druhyi-kalchyk","pershyi-kalchyk"]});
export const childModules = Object.freeze({"druhyi-kalchyk":"./druhyi-kalchyk/druhyi-kalchyk.js","pershyi-kalchyk":"./pershyi-kalchyk/pershyi-kalchyk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
