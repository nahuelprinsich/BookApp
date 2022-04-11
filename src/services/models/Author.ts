export interface IAuthor {
    key: string,
    name: string,
    bio?: string
}

export class Author implements IAuthor {
    key: string
    name: string
    bio?: string

    constructor(key: string, name: string, bio?: string) {
        this.key = key,
        this.name = name,
        this.bio = bio
    }

}