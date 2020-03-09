import { Entity } from 'redisk';
import { Primary } from 'redisk';
import { Property } from 'redisk';
import { Unique } from 'redisk';

@Entity('user')
export class User {

  @Primary()
  @Property()
  public readonly id: string;

  @Property({sortable: false, searchable: true})
  public name: string;

  @Unique()
  @Property()
  public email: string;

  @Property({sortable: true, searchable: false})
  public readonly created: Date;

  constructor(
      id: string,
      name: string,
      email: string,
      created: Date,
    ) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.created = created;
  }
}
