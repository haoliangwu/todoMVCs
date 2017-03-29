import Handsontable from 'handsontable/dist/handsontable.full'

export class MyExternalPluginSkeleton extends Handsontable.plugins.BasePlugin {
  constructor (hotInstance) {
    super(hotInstance)

    this.foo = 'abc'
  }

  /**
   * Check if the plugin is enabled in the Handsontable settings.
   *
   * @returns {Boolean}
   */
  isEnabled () {
    return !!this.hot.getSettings().foo
  }

  /**
   * Enable plugin for this Handsontable instance.
   */
  enablePlugin () {
    if (this.enabled) {
      return
    }

    this.addHook('afterChange', (changes, source) => {
      if (!changes) return

      const x = changes[0][0]
      const y = changes[0][1]

      console.log(this.hot.getCell(x, y))

      console.log(changes, source)
      console.log(this.foo)
    })

    super.enablePlugin()
  }

  /**
   * Update plugin for this Handsontable instance.
   */
  updatePlugin () {
    this.disablePlugin()
    this.enablePlugin()
    super.updatePlugin()
  }

  /**
   * Disable plugin for this Handsontable instance.
   */
  disablePlugin () {
    super.disablePlugin()
  }

  destroy () {
    super.destroy()
  }
}
