"use server";

import { PrismaClient, Frequency } from "@/lib/generated/prisma";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export interface IncomeInput {
  name: string;
  value: number;
  frequency: Frequency;
  userId: string;
}

export async function createIncome(data: IncomeInput) {
  return await prisma.income.create({
    data,
  });
}

export async function getUserIncomes(userId: string) {
  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const firstDayOfNextMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    1,
  );

  return await prisma.income.findMany({
    where: {
      userId,
      createdAt: {
        gte: firstDayOfMonth,
        lt: firstDayOfNextMonth,
      },
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function deleteIncome(incomeId: string) {
  return await prisma.income.delete({
    where: { id: incomeId },
  });
}

export async function handleDeleteIncome(formData: FormData): Promise<void> {
  const incomeId = formData.get("incomeId") as string;

  if (!incomeId) {
    throw new Error("ID do ganho não informado.");
  }

  await deleteIncome(incomeId);

  revalidatePath("/income");
}

export async function handleCreateIncome(formData: FormData) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user) {
    redirect("/login");
  }

  const userId = session.user.id;
  const name = formData.get("name") as string;
  const value = parseFloat(formData.get("value") as string);
  const frequency = formData.get("frequency") as Frequency;

  await createIncome({
    userId,
    name,
    value,
    frequency,
  });

  revalidatePath("/income");
}
