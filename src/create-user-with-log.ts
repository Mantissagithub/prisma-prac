import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log : ['info', 'query']});

async function main(){
    //queries goes over here
    await prisma.user.create({
        data: {
            email: "pradhep.raop@gmail.com",
            name: "pradheep"
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