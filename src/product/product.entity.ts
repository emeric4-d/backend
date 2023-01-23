import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom : string ;

  @Column()
  prenoms: string;

  @Column()
  telephone: string;

  @Column()
  motdepasse: string

}