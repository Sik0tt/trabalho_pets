import {Entity, Column, PrimaryColumn} from 'typeorm';


@Entity('tb_raca')
class Raca {

    @PrimaryColumn('text')
    pastor_alemao: string ;

    @Column('text')
    dalmata: string;

    @Column('text')
    doberman: string;

    @Column('text')
    dogo_argentino: string;

    @Column('text')
    rottweiler: string;

}
export default Raca;