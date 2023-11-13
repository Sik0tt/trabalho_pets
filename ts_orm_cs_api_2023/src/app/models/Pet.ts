import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Raca from './Raca'

@Entity('tb_pet')
class Pet {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('float')
    valor: number ;

    @Column('int')
    quantidade: Number;

    @ManyToOne(type => Raca)
    @JoinColumn({name: "raca_id", referencedColumnName: "id"})
    Raca: Raca; 
}
export default Pet;