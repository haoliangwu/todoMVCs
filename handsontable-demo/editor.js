import Handsontable from 'handsontable/dist/handsontable.full'

// export const PasswordEditor = Handsontable.editors.TextEditor.prototype.extend()

// PasswordEditor.prototype.createElements = function () {
//   // Call the original createElements method
//   Handsontable.editors.TextEditor.prototype.createElements.apply(this, arguments)

//   // Create password input and update relevant properties
//   this.TEXTAREA = document.createElement('input')
//   this.TEXTAREA.setAttribute('type', 'password')
//   this.TEXTAREA.className = 'handsontableInput'
//   this.textareaStyle = this.TEXTAREA.style
//   this.textareaStyle.width = 0
//   this.textareaStyle.height = 0

//   // Replace textarea with password input
//   Handsontable.Dom.empty(this.TEXTAREA_PARENT)
//   this.TEXTAREA_PARENT.appendChild(this.TEXTAREA)
// }

export class PasswordEditor extends Handsontable.editors.TextEditor {
  createElements (...args) {
    super.createElements(args)

    this.TEXTAREA = document.createElement('input')
    this.TEXTAREA.setAttribute('type', 'password')
    this.TEXTAREA.className = 'handsontableInput'
    this.textareaStyle = this.TEXTAREA.style
    this.textareaStyle.width = 0
    this.textareaStyle.height = 0

  // Replace textarea with password input
    Handsontable.Dom.empty(this.TEXTAREA_PARENT)
    this.TEXTAREA_PARENT.appendChild(this.TEXTAREA)
  }
}
