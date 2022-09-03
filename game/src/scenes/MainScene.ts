import { buildTargets } from '../constants';

export class MainScene extends Phaser.Scene {
    image: Phaser.GameObjects.Image;
    constructor() {
        super({
            key: 'MainScene'
        });
    }

    init() {
        console.log('MainScene');
    }

    create(): void {
        let center: number;
        let middle: number;
        let width : any = this.sys.game.config.width;
        let height : any = this.sys.game.config.height;
        center = width / 2;
        middle = height / 2;

        // Separador
        let separador = this.add.image(center, 200, "separator")

        // Palas
        let izquiera = this.add.image(30, middle, "right_pallete")
        let derecha = this.add.image(610, middle, "left_pallete")

        //bola
        let bola = this.physics.add.image(center, middle, "ball")


    }
}
