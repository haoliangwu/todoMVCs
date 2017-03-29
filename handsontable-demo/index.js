import $ from 'jquery'
import Handsontable from 'handsontable/dist/handsontable.full'
import 'handsontable/dist/handsontable.full.css'

import { MyExternalPluginSkeleton } from './plugin'
import { PasswordEditor, SelectEditor } from './editor'
import './main.css'

$('<div id="example"></div>').appendTo(document.body)

var data = [
  ['', 'Ford', 'Volvo', 'Toyota', 'Honda'],
  ['2016', 10, 11, 12, 13],
  ['2017', 20, 11, 14, 13],
  ['2018', 30, 15, 12, 13]
]

Handsontable.plugins.registerPlugin('externalPluginSkeleton', MyExternalPluginSkeleton)

var hot = new Handsontable(document.getElementById('example'), {
  data: data,
  columns: [
    {},
    {
      editor: SelectEditor,
      selectOptions: ['option1', 'option2', 'option3']
    }
  ]
})
