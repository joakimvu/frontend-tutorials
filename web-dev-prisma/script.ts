import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

async function main() {
  // DELETE all users
  // await prisma.user.deleteMany();
  // CREATE one user
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Joakim",
  //     email: "joakim2@test.com",
  //     age: 32,
  //     userPreference: {
  //       create: {
  //         emailUpdated: true,
  //       },
  //     },
  //   },
  //   select: {
  //     name: true,
  //     userPreference: { select: { id: true } },
  //   },
  // });
  // console.log(user);
  // FIND unique user with email joakim@test.com
  const user = await prisma.user.findUnique({
    where: {
      email: "joakim@test.com",
    },
  });
  console.log(user);
  // FIND unique user with age 28, and name Joakim
  // const user = await prisma.user.findUnique({
  //   where: {
  //     age_name: {
  //       age: 28,
  //       name: "Joakim",
  //     },
  //   },
  // });
  // console.log(user);
  // FIND unique user name Joakim
  // const user = await prisma.user.findFirst({
  //   where: {
  //     name: "Joakim",
  //   },
  // });
  // console.log(user);
  // FIND ALL user with age 28
  // const user = await prisma.user.findMany({
  //   where: {
  //     age: 28,
  //   },
  // });
  // console.log(user);
  // FIND ALL users with name Joakim and sort by age descending
  // const user = await prisma.user.findMany({
  //   where: {
  //     name: "Joakim",
  //   },
  //   orderBy: {
  //     age: "desc",
  //   },
  // });
  // console.log(user);
  // FIND ALL users with age > 20
  // const user = await prisma.user.findMany({
  //   where: {
  //     name: { in: ["Joakim", "Potetersen"] },
  //     age: { lt: 20 },
  //   },
  // });
  // console.log(user);
  // FIND ALL where name is Joakim or Potetersen
  // const user = await prisma.user.findMany({
  //   where: {
  //     name: { in: ["Joakim", "Potetersen"] },
  //   },
  // });
  // console.log(user);
  // FIND users where email CONTAINS @test.com
  // const user = await prisma.user.findMany({
  //   where: {
  //     email: { contains: "@test.com" },
  //   },
  // });
  // console.log(user);
  // FIND users where email ENDS WITH @test.com
  // const user = await prisma.user.findMany({
  //   where: {
  //     email: { endsWith: "@test.com" },
  //   },
  // });
  // console.log(user);
  // FIND users where email START WITH @test.com
  // const user = await prisma.user.findMany({
  //   where: {
  //     email: { startsWith: "joakim" },
  //   },
  // });
  // console.log(user);
  // FIND users with NAME Joakim and AGE greater than 30
  // const user = await prisma.user.findMany({
  //   where: {
  //     AND: [{ email: { startsWith: "joakim" } }, { age: { gt: 30 } }],
  //   },
  // });
  // console.log(user);
  // UPDATE user email from joakim@test0.com to joakim@test1.com
  // must use on a field that is unique
  // const user = await prisma.user.update({
  //   where: {
  //     email: "joakim@test0.com",
  //   },
  //   data: {
  //     email: "joakim@test1.com",
  //   },
  // });
  // console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
