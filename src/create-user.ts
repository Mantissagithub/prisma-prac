import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    //queries goes over here
    await prisma.user.create({
        data: {
            email: "mantissa6789@gmail.com",
            name: "mantissa"
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