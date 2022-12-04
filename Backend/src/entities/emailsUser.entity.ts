import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";

@Entity("emailsUser")
export class EmailUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 128 })
  email: string;

  @ManyToOne(() => User, (user) => user.emailsUser, { onDelete: "CASCADE" })
  user: User;
}
