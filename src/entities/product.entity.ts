import { Users } from './../entities/users.entity';
import { Category } from './../entities/category.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
  Index,
  ManyToOne,
  BeforeUpdate,
  BeforeInsert,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Index()
  @Column({ type: 'varchar', length: 191 })
  name: string;

  @Index()
  @Column({ type: 'text' })
  description: string;

  @Index()
  @Column({ type: 'varchar', length: 255 })
  barcode: string;

  @Column({ type: 'varchar', length: 255 })
  image: string;

  @Column({ type: 'int' })
  inventory_min: number;

  @Column({ type: 'varchar', length: 191 })
  unit: string;

  @Column({ type: 'varchar', length: 191 })
  presentation: string;

  @Column({ type: 'decimal', precision: 14, scale: 4 })
  price_in: string;

  @Column({ type: 'decimal', precision: 14, scale: 4 })
  price_out: string;

  @Column({ type: 'decimal', precision: 14, scale: 4 })
  offer_price: string;

  @Column({ type: 'decimal', precision: 14, scale: 4 })
  taxes: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'userId' })
  user: Users;

  @Column()
  is_active: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @BeforeInsert()
  updateDateCreation() {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  updateDateUpdate() {
    this.updatedAt = new Date();
  }
}
