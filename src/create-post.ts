import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    //queries goes over here
    await prisma.post.create({
        data: {
            title : "first post",
            content : "this is my first post on this platform",
            published : true,
            author : {
                connect : {
                    id : 1
                }
            }
        }
    })
}

main()
    .then(async() => {
        await prisma.$disconnect()
    })
    .catch(async(e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })