import Handsontable from 'handsontable/dist/handsontable.full'

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

export class SelectEditor extends Handsontable.editors.BaseEditor {
  constructor (...args) {
    super(...args)

    this._prepare = super.prepare.bind(this)
    this.onBeforeKeyDown = this.onBeforeKeyDown.bind(this)
  }

  init () {
    console.log(this)
    console.log(Handsontable.helper)
    console.log(Handsontable)

  // Create detached node, add CSS class and make sure its not visible
    this.select = document.createElement('SELECT')
    Handsontable.Dom.addClass(this.select, 'htSelectEditor')
    this.select.style.display = 'none'

  // Attach node to DOM, by appending it to the container holding the table
    this.instance.rootElement.appendChild(this.select)
  }

  // Create options in prepare() method
  prepare (...args) {
  // Remember to invoke parent's method
    // super.prepare.apply(this, args)
    this._prepare(...args)

    var selectOptions = this.cellProperties.selectOptions
    var options

    if (typeof selectOptions === 'function') {
      options = this.prepareOptions(selectOptions(this.row,
    this.col, this.prop))
    } else {
      options = this.prepareOptions(selectOptions)
    }
    Handsontable.Dom.empty(this.select)

    for (var option in options) {
      if (options.hasOwnProperty(option)) {
        var optionElement = document.createElement('OPTION')
        optionElement.value = option
        Handsontable.Dom.fastInnerHTML(optionElement, options[option])
        this.select.appendChild(optionElement)
      }
    }
  }

  prepareOptions (optionsToPrepare) {
    var preparedOptions = {}

    if (optionsToPrepare.constructor === Array) {
      for (var i = 0, len = optionsToPrepare.length; i < len; i++) {
        preparedOptions[optionsToPrepare[i]] = optionsToPrepare[i]
      }
    } else if (typeof optionsToPrepare === 'object') {
      preparedOptions = optionsToPrepare
    }

    return preparedOptions
  }

  open () {
    var width = Handsontable.Dom.outerWidth(this.TD)
  // important - group layout reads together for better performance
    var height = Handsontable.Dom.outerHeight(this.TD)
    var rootOffset = Handsontable.Dom.offset(this.instance.rootElement)
    var tdOffset = Handsontable.Dom.offset(this.TD)
    var editorSection = this.checkEditorSection()
    var cssTransformOffset

    switch (editorSection) {
      case 'top':
        cssTransformOffset = Handsontable.Dom.getCssTransform(this.instance.view.wt.wtScrollbars.vertical.clone.wtTable.holder.parentNode)
        break
      case 'left':
        cssTransformOffset = Handsontable.Dom.getCssTransform(this.instance.view.wt.wtScrollbars.horizontal.clone.wtTable.holder.parentNode)
        break
      case 'corner':
        cssTransformOffset = Handsontable.Dom.getCssTransform(this.instance.view.wt.wtScrollbars.corner.clone.wtTable.holder.parentNode)
        break
    }
    var selectStyle = this.select.style

    if (cssTransformOffset && cssTransformOffset !== -1) {
      selectStyle[cssTransformOffset[0]] = cssTransformOffset[1]
    } else {
      Handsontable.Dom.resetCssTransform(this.select)
    }

    selectStyle.height = height + 'px'
    selectStyle.minWidth = width + 'px'
    selectStyle.top = tdOffset.top - rootOffset.top + 'px'
    selectStyle.left = tdOffset.left - rootOffset.left + 'px'
    selectStyle.margin = '0px'
    selectStyle.display = ''

    this.instance.addHook('beforeKeyDown', this.onBeforeKeyDown)
  }

  focus () {
    // when focus, init the val
    this.select.value = 'option1'
  }

  getValue () {
    return this.select.value
  }

  setValue (value) {
    this.select.value = value
  }

  close () {
    this.select.style.display = 'none'
    this.instance.removeHook('beforeKeyDown', this.onBeforeKeyDown)
  }

  // event hook
  onBeforeKeyDown (event) {
    var editor = this.instance.getActiveEditor()
    var selectedIndex = editor.select.selectedIndex

    switch (event.keyCode) {
      case Handsontable.helper.KEY_CODES.ARROW_UP:
        var previousOption = editor.select.options[selectedIndex - 1]

        if (previousOption) { // if previous option exists
          editor.select.value = previousOption.value // mark it as selected
        }

        event.stopImmediatePropagation() // prevent EditorManager from processing this event
        event.preventDefault() // prevent browser from scrolling the page up
        break

      case Handsontable.helper.KEY_CODES.ARROW_DOWN:
        var nextOption = editor.select.options[selectedIndex + 1]

        if (nextOption) { // if previous option exists
          editor.select.value = nextOption.value // mark it as selected
        }
        event.stopImmediatePropagation() // prevent EditorManager from processing this event
        event.preventDefault() // prevent browser from scrolling the page up
        break
    }
  }
}

// export var SelectEditor = Handsontable.editors.BaseEditor.prototype.extend()

// SelectEditor.prototype.init = function () {
//   console.log(this)
//   // Create detached node, add CSS class and make sure its not visible
//   this.select = document.createElement('SELECT')
//   Handsontable.Dom.addClass(this.select, 'htSelectEditor')
//   this.select.style.display = 'none'

//   // Attach node to DOM, by appending it to the container holding the table
//   this.instance.rootElement.appendChild(this.select)
// }

// // Create options in prepare() method
// SelectEditor.prototype.prepare = function () {
//   // Remember to invoke parent's method
//   Handsontable.editors.BaseEditor.prototype.prepare.apply(this, arguments)

//   var selectOptions = this.cellProperties.selectOptions
//   var options

//   if (typeof selectOptions === 'function') {
//     options = this.prepareOptions(selectOptions(this.row,
//     this.col, this.prop))
//   } else {
//     options = this.prepareOptions(selectOptions)
//   }
//   Handsontable.Dom.empty(this.select)

//   for (var option in options) {
//     if (options.hasOwnProperty(option)) {
//       var optionElement = document.createElement('OPTION')
//       optionElement.value = option
//       Handsontable.Dom.fastInnerHTML(optionElement, options[option])
//       this.select.appendChild(optionElement)
//     }
//   }
// }

// SelectEditor.prototype.prepareOptions = function (optionsToPrepare) {
//   var preparedOptions = {}

//   if (optionsToPrepare.constructor === Array) {
//     for (var i = 0, len = optionsToPrepare.length; i < len; i++) {
//       preparedOptions[optionsToPrepare[i]] = optionsToPrepare[i]
//     }
//   } else if (typeof optionsToPrepare === 'object') {
//     preparedOptions = optionsToPrepare
//   }

//   return preparedOptions
// }

// SelectEditor.prototype.getValue = function () {
//   return this.select.value
// }

// SelectEditor.prototype.setValue = function (value) {
//   this.select.value = value
// }

// SelectEditor.prototype.open = function () {
//   var width = Handsontable.Dom.outerWidth(this.TD)
//   var height = Handsontable.Dom.outerHeight(this.TD)
//   var rootOffset = Handsontable.Dom.offset(this.instance.rootElement)
//   var tdOffset = Handsontable.Dom.offset(this.TD)

//   // sets select dimensions to match cell size
//   this.select.style.height = height + 'px'
//   this.select.style.minWidth = width + 'px'

//   // make sure that list positions matches cell position
//   this.select.style.top = tdOffset.top - rootOffset.top + 'px'
//   this.select.style.left = tdOffset.left - rootOffset.left + 'px'
//   this.select.style.margin = '0px'

//   // display the list
//   this.select.style.display = ''
// }

// SelectEditor.prototype.close = function () {
//   this.select.style.display = 'none'
// }
