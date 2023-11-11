import {Column, ChildEntity} from 'typeorm';
import Pessoa from './Pessoa';

@ChildEntity()
export default class Funionario extends Pessoa {

    @Column("varchar", { length : 8 })
    ctps: string;

    @Column("varchar", { length : 11 })
    pis: string;

    @Column("varchar", { length: 8  })
    senha: string;
}
