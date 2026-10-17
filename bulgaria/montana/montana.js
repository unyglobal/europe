// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"montana","repository":"europe","path":"bulgaria/montana","depth":2,"parent":"bulgaria","children":["berkovitsa","lom"]});
export const childModules = Object.freeze({"berkovitsa":"./berkovitsa/berkovitsa.js","lom":"./lom/lom.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
