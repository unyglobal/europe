// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pristina","repository":"europe","path":"kosovo/pristina","depth":2,"parent":"kosovo","children":["glogovac","kosovo-polje","podujeva"]});
export const childModules = Object.freeze({"glogovac":"./glogovac/glogovac.js","kosovo-polje":"./kosovo-polje/kosovo-polje.js","podujeva":"./podujeva/podujeva.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
