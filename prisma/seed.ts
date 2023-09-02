import { PrismaClient } from "@prisma/client";

const db = new PrismaClient()

type Post = {
    title: string
    body: string
}

async function getPosts() {
    const response = await fetch('https://dummyjson.com/posts')
    const { posts } = await response.json()
    return posts as Post[]
}

function slugify(title: string) {
    return title.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9-]/g, '')
}

async function main() {
    const posts = await getPosts()
    for (const post of posts) {
        await db.post.create({
            data: {
                title: post.title,
                content: post.body,
                slug: slugify(post.title)
            }
        })
    }
}

main()