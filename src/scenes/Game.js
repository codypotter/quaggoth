/* globals __DEV__ */
import Phaser from 'phaser'

import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })
  }

  init () {

  }

  preload () {

  }

  create () {
    this.mushroom = new Mushroom({
      scene: this,
      x: 50,
      y: 50,
      asset: 'mushroom'
    })

    this.add.existing(this.mushroom)

  }
}
