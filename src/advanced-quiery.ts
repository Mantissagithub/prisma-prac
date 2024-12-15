import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log : ['info', 'query']});

async function main(){
    //queries goes over here
    const res = await prisma.user.findMany({
        where : {
            email : {
                endsWith : "gmail.com"
            }
        },
        include : {
            posts : {
                where : {
                    published : true
                }
            }
        }
    })
    console.log(res)
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