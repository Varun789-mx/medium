export interface user {
    name: string;
    profilepic: string;
    bio: string;
}
export interface Blogprop {
    title: string;
    content: string;
    picture?: string;
    author: user;
    authorid: string
}