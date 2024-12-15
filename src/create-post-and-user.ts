import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    //queries goes over here
    await prisma.user.create({
        data: {
            email: "pradheep@gmail.com",
            name: "mantis",
            posts : {
                create: [{
                     title : "second post"
                },{
                    title : "third post"
                }
            ]
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