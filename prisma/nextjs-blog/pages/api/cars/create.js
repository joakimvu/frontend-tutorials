import prisma from "../../../lib/prisma";

// POST /api/cars/create
// Required fields in body: username, password
export default async function handle(req, res) {
  const carlist = req.body;
  const carmap = Object.values(carlist)[0];

  const createCars = async () => {
    await Promise.all(
      carmap.map(async (car) => {
        await prisma.car.create({
          data: {
            ...car,
          },
        });
      })
    );
  };

  createCars();

  res.json(carmap);
  //   res.status(200).json({ success: "true" }, { data: data });
}
