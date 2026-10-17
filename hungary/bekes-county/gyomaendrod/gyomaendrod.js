// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gyomaendrod","repository":"europe","path":"hungary/bekes-county/gyomaendrod","depth":3,"parent":"hungary/bekes-county","children":["elohalom","kolesfenekidulo","magtarlapos","nadassziget"]});
export const childModules = Object.freeze({"elohalom":"./elohalom/elohalom.js","kolesfenekidulo":"./kolesfenekidulo/kolesfenekidulo.js","magtarlapos":"./magtarlapos/magtarlapos.js","nadassziget":"./nadassziget/nadassziget.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
