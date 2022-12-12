import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  constructor(name?: string, dias_para_vencimento?: number) {
    this.name = name;
    this.dias_para_vencimento = dias_para_vencimento;
  }

  @PrimaryGeneratedColumn('increment')
  private id: number;

  @Column()
  public name: string;

  @Column()
  public dias_para_vencimento: number;
}
