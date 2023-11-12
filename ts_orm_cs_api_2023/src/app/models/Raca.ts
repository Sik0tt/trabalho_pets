import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Pet from '../models/Pet'

@Entity('tb_raca')
class Raca {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column('text')
    pastor_alemao: string ;

    @Column('text')
    dalmata: string;

    @Column('text')
    doberman: string;

    @Column('text')
    dogo_argentino: string;

    @Column('text')
    rottweiler: string;

    @ManyToOne(type => Pet)
     @JoinColumn({name: "pet_id", referencedColumnName: "id"})
     Pet: Pet; 
}
export default Raca;