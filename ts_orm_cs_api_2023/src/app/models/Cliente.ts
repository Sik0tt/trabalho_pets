import {Column, ChildEntity, ManyToOne, JoinColumn} from 'typeorm';
import Pessoa from './Pessoa';

@ChildEntity()
export default class Cliente extends Pessoa {
    
    
    @Column('date', {nullable: true})
    data_cadastro: Date;

}
