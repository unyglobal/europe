// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vojvodina","repository":"europe","path":"serbia/vojvodina","depth":2,"parent":"serbia","children":["apatin","backa-palanka","backa-topola","becej","futog","in-ija","kikinda","nova-pazova","novi-sad","pancevo","ruma","senta","sombor","sremska-mitrovica","stara-pazova","subotica","vrbas","vrsac","zrenjanin"]});
export const childModules = Object.freeze({"apatin":"./apatin/apatin.js","backa-palanka":"./backa-palanka/backa-palanka.js","backa-topola":"./backa-topola/backa-topola.js","becej":"./becej/becej.js","futog":"./futog/futog.js","in-ija":"./in-ija/in-ija.js","kikinda":"./kikinda/kikinda.js","nova-pazova":"./nova-pazova/nova-pazova.js","novi-sad":"./novi-sad/novi-sad.js","pancevo":"./pancevo/pancevo.js","ruma":"./ruma/ruma.js","senta":"./senta/senta.js","sombor":"./sombor/sombor.js","sremska-mitrovica":"./sremska-mitrovica/sremska-mitrovica.js","stara-pazova":"./stara-pazova/stara-pazova.js","subotica":"./subotica/subotica.js","vrbas":"./vrbas/vrbas.js","vrsac":"./vrsac/vrsac.js","zrenjanin":"./zrenjanin/zrenjanin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
