import prisma from "../../../lib/prisma";

// GET /api/user/index
export default async function handle(req, res) {
  const users = await prisma.user.findMany({
    // henter også biler brukeren har.
    // se på schema til bruker cars Car[]
    include: { cars: true },
  });
  // res.json(users);
  res.json({ data: users });
  //   res.status(200).json({ success: "true" }, { data: data });
}
