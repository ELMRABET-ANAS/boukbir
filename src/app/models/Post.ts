export class Post {
  public id: any;
  public title!: string;
  public resume!:string;
  public content!:string;
  public image_url!:string;
  public author_id!: any;
  public created_at!:string;
  public authorName!:string;
}

export class Author{
  public id: any;
  public full_name!:string;
}
