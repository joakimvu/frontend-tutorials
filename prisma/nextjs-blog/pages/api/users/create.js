import prisma from "../../../lib/prisma";

// POST /api/user/create
// Required fields in body: username, password
export default async function handle(req, res) {
  const { username, password } = req.body;
  const user = await prisma.user.create({
    data: {
      username: username,
      password: password,
    },
  });
  res.json(user);
  // res.json(user);
  //   res.status(200).json({ success: "true" }, { data: data });
}
