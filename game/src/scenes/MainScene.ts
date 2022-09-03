import { buildTargets } from '../constants';
import Palas from './Palas';

export class MainScene extends Phaser.Scene {
    image: Phaser.GameObjects.Image;
    izquiera: any;
    derecha: any;
    bola : any;


    constructor() {
        super({
            key: 'MainScene',
            physics: {
                default: 'arcade',
            }
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

        // Palas, como clase
        this.izquiera = new Palas(this, 30, middle, "right_pallete");
        this.derecha = new Palas(this, 610, middle, "left_pallete");


        //bola
        this.bola = this.physics.add.image(center, middle, "ball")

        //fisicas
        this.bola.setVelocity(-180);
        this.bola.setCollideWorldBounds();
        this.physics.world.setBoundsCollision(false, false, true, true);

        this.bola.setBounce(1);
        this.physics.add.collider(this.bola, this.izquiera, chocaPala(this.bola), null)
        this.physics.add.collider(this.bola, this.derecha, chocaPala(this.bola), null)

        function chocaPala(bola) : any {
            bola.setVelocityY(Phaser.Math.Between(-120, 120))
            return ;
        }
    }

    update(): void {
        let center: number;
        let middle: number;
        let width : any = this.sys.game.config.width;
        let height : any = this.sys.game.config.height;
        
        center = width / 2;
        middle = height / 2;

        if(this.bola.x < 0 || this.bola.x > width){
            this.bola.setPosition(center, middle);
        }
    }
    
}
