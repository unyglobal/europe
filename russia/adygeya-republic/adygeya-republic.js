// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"adygeya-republic","repository":"europe","path":"russia/adygeya-republic","depth":2,"parent":"russia","children":["enem","giaginskaya","maykop","yablonovskiy"]});
export const childModules = Object.freeze({"enem":"./enem/enem.js","giaginskaya":"./giaginskaya/giaginskaya.js","maykop":"./maykop/maykop.js","yablonovskiy":"./yablonovskiy/yablonovskiy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
