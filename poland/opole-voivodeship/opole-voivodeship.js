// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"opole-voivodeship","repository":"europe","path":"poland/opole-voivodeship","depth":2,"parent":"poland","children":["brzeg","g-ucho-azy","kedzierzyn-kozle","kluczbork","krapkowice","namys-ow","nysa","opole","prudnik","strzelce-opolskie"]});
export const childModules = Object.freeze({"brzeg":"./brzeg/brzeg.js","g-ucho-azy":"./g-ucho-azy/g-ucho-azy.js","kedzierzyn-kozle":"./kedzierzyn-kozle/kedzierzyn-kozle.js","kluczbork":"./kluczbork/kluczbork.js","krapkowice":"./krapkowice/krapkowice.js","namys-ow":"./namys-ow/namys-ow.js","nysa":"./nysa/nysa.js","opole":"./opole/opole.js","prudnik":"./prudnik/prudnik.js","strzelce-opolskie":"./strzelce-opolskie/strzelce-opolskie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
