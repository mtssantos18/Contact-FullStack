import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";

@Entity("phonesUser")
export class PhoneUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 20 })
  number: string;

  @ManyToOne(() => User, (user) => user.phonesUser, { onDelete: "CASCADE" })
  user: User;
}
