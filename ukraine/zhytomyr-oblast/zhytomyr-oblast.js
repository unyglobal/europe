// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zhytomyr-oblast","repository":"europe","path":"ukraine/zhytomyr-oblast","depth":2,"parent":"ukraine","children":["berdychiv","bohuniya","korolyov","korosten","korostyshiv","malyn","ovruch","radomyshl","zhytomyr","zvyahel"]});
export const childModules = Object.freeze({"berdychiv":"./berdychiv/berdychiv.js","bohuniya":"./bohuniya/bohuniya.js","korolyov":"./korolyov/korolyov.js","korosten":"./korosten/korosten.js","korostyshiv":"./korostyshiv/korostyshiv.js","malyn":"./malyn/malyn.js","ovruch":"./ovruch/ovruch.js","radomyshl":"./radomyshl/radomyshl.js","zhytomyr":"./zhytomyr/zhytomyr.js","zvyahel":"./zvyahel/zvyahel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
