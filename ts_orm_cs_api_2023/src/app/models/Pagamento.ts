import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity('tb_pagamento')
class Pagamento {

    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    forma_pagamento: string ;

   

}
export default Pagamento;