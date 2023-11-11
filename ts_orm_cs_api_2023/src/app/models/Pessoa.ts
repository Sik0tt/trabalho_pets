import {Entity, Column, PrimaryColumn,TableInheritance } from 'typeorm';

@Entity('tb_pessoa')

@TableInheritance({ column: { type: "varchar", name: "type" } })
export default abstract class Pessoa {
   
    @PrimaryColumn("varchar", { length: 11 })
    cpf: string;

    @Column("varchar", { length: 7 })
    rg: string;

    @Column("varchar", { length: 7 })
    nome: string;
    

    @Column("varchar", { length: 9  })
    numero_celular: string;

    @Column("varchar", { length: 100  })
    email: string;

    @Column('date', {nullable: true})
    data_nascimento: Date;

    @Column("varchar", { length: 100 })
    endereco: string;
    
    @Column("varchar", { length: 8 })
    cep: string;

    @Column("varchar", { length: 100 })
    complemento: string;
}
