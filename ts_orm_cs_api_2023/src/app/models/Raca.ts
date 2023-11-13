import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Pet from '../models/Pet'

@Entity('tb_raca')
class Raca {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column('text')
    nome: string

    
}
export default Raca;