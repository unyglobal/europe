// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yaroslavl-oblast","repository":"europe","path":"russia/yaroslavl-oblast","depth":2,"parent":"russia","children":["danilov","gavrilov-yam","pereslavl-zalesskiy","rostov-veliky","rybinsk","tutayev","uglich","yaroslavl"]});
export const childModules = Object.freeze({"danilov":"./danilov/danilov.js","gavrilov-yam":"./gavrilov-yam/gavrilov-yam.js","pereslavl-zalesskiy":"./pereslavl-zalesskiy/pereslavl-zalesskiy.js","rostov-veliky":"./rostov-veliky/rostov-veliky.js","rybinsk":"./rybinsk/rybinsk.js","tutayev":"./tutayev/tutayev.js","uglich":"./uglich/uglich.js","yaroslavl":"./yaroslavl/yaroslavl.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
