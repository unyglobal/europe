// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ryazan-oblast","repository":"europe","path":"russia/ryazan-oblast","depth":2,"parent":"russia","children":["kasimov","novomichurinsk","ryazan","ryazhsk","rybnoye","sasovo","shilovo","skopin"]});
export const childModules = Object.freeze({"kasimov":"./kasimov/kasimov.js","novomichurinsk":"./novomichurinsk/novomichurinsk.js","ryazan":"./ryazan/ryazan.js","ryazhsk":"./ryazhsk/ryazhsk.js","rybnoye":"./rybnoye/rybnoye.js","sasovo":"./sasovo/sasovo.js","shilovo":"./shilovo/shilovo.js","skopin":"./skopin/skopin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
