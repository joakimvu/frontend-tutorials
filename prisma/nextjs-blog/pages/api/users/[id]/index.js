import prisma from "../../../../lib/prisma";

// GET /api/user/index/[id]
export default async function handle(req, res) {
  const id = req.query.id;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  // res.json(users);
  res.json({ data: user });
  //   res.status(200).json({ success: "true" }, { data: data });
}
