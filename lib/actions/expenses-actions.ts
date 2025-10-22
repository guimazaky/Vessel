"use server";

import { Frequency, PrismaClient } from "@/lib/generated/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export interface CategoryInput {
  name: string;
  color: string;
  userId: string;
}

export async function createCategory(data: CategoryInput) {
  return await prisma.category.create({
    data,
  });
}

export async function handleCreateCategory(formData: FormData) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user) {
    redirect("/login");
  }

  const userId = session.user.id;
  const name = formData.get("name") as string;
  const color = formData.get("color") as string;

  await createCategory({
    userId,
    name,
    color,
  });

  revalidatePath("/expenses");
}

export async function getUserCategories(userId: string) {
  return await prisma.category.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}

export interface ExpenseInput {
  name: string;
  value: number;
  frequency: Frequency;
  userId: string;
  categoryId: string;
}

export async function createExpense(data: ExpenseInput) {
  return await prisma.expenses.create({
    data,
  });
}

export async function getUserExpense(userId: string, categoryId?: string) {
  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const firstDayOfNextMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    1,
  );

  return await prisma.expenses.findMany({
    where: {
      userId,
      categoryId,
      createdAt: {
        gte: firstDayOfMonth,
        lt: firstDayOfNextMonth,
      },
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function handleCreateExpense(formData: FormData) {
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
  const categoryId = formData.get("categoryId") as string;

  await createExpense({
    userId,
    name,
    value,
    frequency,
    categoryId,
  });

  revalidatePath("/expenses");
}

export async function deleteCategoryWithExpenses(categoryId: string) {
  await prisma.expenses.deleteMany({
    where: { categoryId },
  });

  return await prisma.category.delete({
    where: { id: categoryId },
  });
}

export async function handleDeleteCategory(formData: FormData): Promise<void> {
  const categoryId = formData.get("categoryId") as string;

  if (!categoryId) throw new Error("ID da categoria não informado.");

  await deleteCategoryWithExpenses(categoryId);

  revalidatePath("/income");
}

export async function deleteExpenses(expensesId: string) {
  return await prisma.expenses.delete({
    where: { id: expensesId },
  });
}

export async function handleDeleteExpenses(formData: FormData): Promise<void> {
  const expensesId = formData.get("expensesId") as string;

  if (!expensesId) {
    throw new Error("ID do gasto não informado.");
  }

  await deleteExpenses(expensesId);

  revalidatePath("/income");
}
