import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/shadcn/button";
import { deleteIncome } from "@/lib/actions/income-actions";
import { revalidatePath } from "next/cache";

export async function handleDeleteIncome(formData: FormData) {
  "use server";

  const incomeId = formData.get("incomeId") as string;

  await deleteIncome(incomeId);

  revalidatePath("/income");
}

const DeleteButton = ({ incomeId }: { incomeId: string }) => {
  return (
    <div className="rounded-lg hover:bg-black/25 cursor-pointer center">
      <Dialog>
        <DialogTrigger className="cursor-pointer p-1">
          <X width={25} height={25} />
        </DialogTrigger>
        <DialogContent className="gap-4 border border-white/25">
          <form action={handleDeleteIncome}>
            <input type="hidden" name="incomeId" value={incomeId} />
            <DialogHeader className="my-2">
              <DialogTitle>
                Tem certeza que deseja excluir esse ganho?
              </DialogTitle>
            </DialogHeader>

            <div className="flex justify-end space-x-2 pt-4 ">
              <Button
                variant="outline"
                type="button"
                className="border border-white/25 cursor-pointer"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                variant="destructive"
                className="cursor-pointer hover:bg-white hover:text-black"
              >
                Excluir
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default DeleteButton;
