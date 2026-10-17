// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"horgen","repository":"europe","path":"switzerland/zurich/horgen","depth":3,"parent":"switzerland/zurich","children":["horgen-horgen-dorfkern","horgen-oberdorf"]});
export const childModules = Object.freeze({"horgen-horgen-dorfkern":"./horgen-horgen-dorfkern/horgen-horgen-dorfkern.js","horgen-oberdorf":"./horgen-oberdorf/horgen-oberdorf.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
