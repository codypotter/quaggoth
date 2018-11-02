import 'phaser';
import Player from '../Sprites/Player';

export default class GameScene extends Phaser.Scene {
  constructor (key) {
    super(key);
  }

  preload() {

  }

  create() {

    // listen for keyboard cursor input
    this.cursors = this.input.keyboard.createCursorKeys();

    // create the tilemap
    this.createMap();

    // create the player
    this.createPlayer();

    // enables arcade physics collider
    this.addCollisions();

    // starts the camera to follow the player
    this.cameras.main.startFollow(this.player);

    // set zoom for the game
    this.cameras.main.setZoom(4);
  }

  update() {
    this.player.update(this.cursors);
  }

  addCollisions() {
    this.physics.add.collider(this.player, this.blockedLayer);
  }

  createPlayer() {
    this.map.findObject('Player', (obj) => {
      this.player = new Player(this, obj.x, obj.y);
    })
  }

  createMap() {
    // create the tilemap
    this.map = this.make.tilemap({
      key: 'map'
    });

    // add tileset image
    this.tiles = this.map.addTilesetImage('Overworld (Light)', 'tiles');

    // create our layers
    this.backgroundLayer = this.map.createStaticLayer('Background', this.tiles, 0, 0);
    this.blockedLayer = this.map.createStaticLayer('Blocked', this.tiles, 0, 0);
    this.blockedLayer.setCollisionByExclusion([-1]);
  }
}