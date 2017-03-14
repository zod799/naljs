/* nal.js - Not Another Library
 * ES6/2015 helper functions
 * © 2016 Gerard Gust
 */

/* ES6 code */
const naljs = (function () {
  class Naljs {
    createDialog (content) {
      let elem = document.createElement('div')
      elem.className = 'dialog-box'
      const d = `
          <div class="dialog-box-content">
            <a href="#" class="dialog-close" onclick="this.parentNode.parentNode.remove()">&Cross;</a>
            ${content}
          </div>
      `
      elem.innerHTML = d

      return elem
    }
  }
  return new Naljs()
}())
console.log(naljs.constructor.name) // fix for eslint standard no unused variables
