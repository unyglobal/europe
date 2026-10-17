// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"estonia","repository":"europe","path":"estonia","depth":1,"parent":"","children":["harjumaa","ida-virumaa","paernumaa","tartu","viljandimaa"]});
export const childModules = Object.freeze({"harjumaa":"./harjumaa/harjumaa.js","ida-virumaa":"./ida-virumaa/ida-virumaa.js","paernumaa":"./paernumaa/paernumaa.js","tartu":"./tartu/tartu.js","viljandimaa":"./viljandimaa/viljandimaa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
