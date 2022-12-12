import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn('increment')
  private id: number;

  @Column()
  private name: string;

  @Column()
  private dias_para_vencimento: number;
}
