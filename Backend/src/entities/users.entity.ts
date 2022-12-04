import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./contact.entity";
import { EmailUser } from "./emailsUser.entity";
import { PhoneUser } from "./phonesUser.entity";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column({ unique: true })
  username: string;

  @Column()
  @Exclude()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => EmailUser, (emailUser) => emailUser.user, {
    onDelete: "CASCADE",
    eager: true,
  })
  emailsUser: EmailUser[];

  @OneToMany(() => PhoneUser, (phoneUser) => phoneUser.user, {
    onDelete: "CASCADE",
    eager: true,
  })
  phonesUser: PhoneUser[];

  @OneToMany(() => Contact, (contact) => contact.user, { onDelete: "CASCADE" })
  contacts: Contact[];
}
