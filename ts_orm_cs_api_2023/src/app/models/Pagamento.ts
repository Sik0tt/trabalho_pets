import {Entity, Column, PrimaryColumn} from 'typeorm';


@Entity('tb_pagamento')
class Pagamento {

    @PrimaryColumn('text')
    cartão_débito: string ;

    @Column('text')
    cartão_crédito: string;

    @Column('text')
    dinheiro: string;

    @Column('text')
    boleto: string;

}
export default Pagamento;