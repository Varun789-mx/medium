export interface user {
    name: string;
    profileimg: string;
    bio: string;
}
export interface Blogprop {
    title: string;
    content: string;
    picture?: string;
    author: user;
    authorid: string
}