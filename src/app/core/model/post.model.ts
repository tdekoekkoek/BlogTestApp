

export class Post {
  userId!: number;
  id!: number;
  title: string = '';
  body: string = '';

  constructor(obj?: Partial<Post>) {
    Object.assign(this, obj);
  }

}