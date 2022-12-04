import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entity";

@Entity("phonesContact")
export class PhoneContact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  number: string;

  @ManyToOne(() => Contact, (contact) => contact.phonesContact, {
    onDelete: "CASCADE",
  })
  contact: Contact;
}
