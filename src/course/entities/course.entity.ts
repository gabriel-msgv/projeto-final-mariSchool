import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {length: 150})
    name: string;

    @Column("varchar", {length: 300})
    description: string;

    @Column("decimal", {precision: 10, scale: 2})
    price: number;

    @Column()
    active: boolean;

}
