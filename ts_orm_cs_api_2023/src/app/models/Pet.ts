import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';


@Entity('tb_pet')
class Pet {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('float')
    valor: number ;

    @Column('int')
    quantidade: Number;

    
}
export default Pet;