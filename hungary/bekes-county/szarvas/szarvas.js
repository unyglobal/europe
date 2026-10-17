// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"szarvas","repository":"europe","path":"hungary/bekes-county/szarvas","depth":3,"parent":"hungary/bekes-county","children":["erzsebetliget","furohati-szolok","haleszkert","jurenakfold","konturkaka","korhazdulo","lengyelpuszta","sztrehovszkidulo"]});
export const childModules = Object.freeze({"erzsebetliget":"./erzsebetliget/erzsebetliget.js","furohati-szolok":"./furohati-szolok/furohati-szolok.js","haleszkert":"./haleszkert/haleszkert.js","jurenakfold":"./jurenakfold/jurenakfold.js","konturkaka":"./konturkaka/konturkaka.js","korhazdulo":"./korhazdulo/korhazdulo.js","lengyelpuszta":"./lengyelpuszta/lengyelpuszta.js","sztrehovszkidulo":"./sztrehovszkidulo/sztrehovszkidulo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
