// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eger","repository":"europe","path":"hungary/heves-county/eger","depth":3,"parent":"hungary/heves-county","children":["almagyardulo","hajduhegydulo","kolyukteto","tihamerdulo"]});
export const childModules = Object.freeze({"almagyardulo":"./almagyardulo/almagyardulo.js","hajduhegydulo":"./hajduhegydulo/hajduhegydulo.js","kolyukteto":"./kolyukteto/kolyukteto.js","tihamerdulo":"./tihamerdulo/tihamerdulo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
