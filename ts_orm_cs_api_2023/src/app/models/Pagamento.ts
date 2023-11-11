import {Entity, Column, PrimaryColumn} from 'typeorm';


@Entity('tb_pagamento')
class Pagamento {

    @PrimaryColumn('text')
    cartao_debito: string ;

    @Column('text')
    cartao_credito: string;

    @Column('text')
    dinheiro: string;

    @Column('text')
    boleto: string;

}
export default Pagamento;