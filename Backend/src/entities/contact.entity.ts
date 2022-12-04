import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EmailContact } from "./emailsContact.entity";
import { PhoneContact } from "./phonesContact.entity";
import { User } from "./users.entity";

@Entity("contact")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @OneToMany(() => EmailContact, (emailContact) => emailContact.contact, {
    eager: true,
    onDelete: "CASCADE",
  })
  emailsContact: EmailContact[];

  @OneToMany(() => PhoneContact, (phoneContact) => phoneContact.contact, {
    eager: true,
    onDelete: "CASCADE",
  })
  phonesContact: PhoneContact[];

  @ManyToOne(() => User, (user) => user.contacts, {
    onDelete: "CASCADE",
    eager: true,
  })
  user: User;
}
