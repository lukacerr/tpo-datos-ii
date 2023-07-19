import { Prop } from '@nestjs/mongoose';
import { ApiTags } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserActivity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  TOP = 'TOP',
}

export enum IVACondition {
  FINAL_CONSUMER = 'FINAL_CONSUMER',
  NON_CATEGORIZED_CONSUMER = 'NON_CATEGORIZED_CONSUMER',
  AUTONOMOUS = 'AUTONOMOUS',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  document: string;

  // Punto 2
  @Column({
    type: 'enum',
    enum: UserActivity,
    default: UserActivity.LOW,
  })
  activity: UserActivity;

  @Column({
    type: 'enum',
    enum: IVACondition,
  })
  IvaCondition: IVACondition;
}
