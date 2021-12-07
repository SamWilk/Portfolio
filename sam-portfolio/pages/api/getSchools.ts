import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function getSchools() {
  const schools = prisma.school.findMany();
  return {
    props: {
      initalSchools: schools,
    },
  };
}
