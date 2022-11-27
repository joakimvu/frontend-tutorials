import prisma from "../../../../lib/prisma";

// PUT /api/user/create
// Required fields in body: username, password
export default async function handle(req, res) {
  const { id, username, nickname } = req.body;
  console.log(nickname);
  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      username: username,
      nickname: nickname,
    },
  });

  // res.json(users);
  res.json({ data: updatedUser });
  //   res.status(200).json({ success: "true" }, { data: data });
}
