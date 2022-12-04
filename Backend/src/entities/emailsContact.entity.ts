import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entity";

@Entity("emailsContact")
export class EmailContact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 128 })
  email: string;

  @ManyToOne(() => Contact, (contact) => contact.emailsContact, {
    onDelete: "CASCADE",
  })
  contact: Contact;
}
