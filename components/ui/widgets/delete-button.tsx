"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import { Button } from "@/components/ui/shadcn/button";
import { X } from "lucide-react";

interface DeleteButtonProps {
  title: string;
  onSubmit: (formData: FormData) => Promise<void>;
  hiddenFields?: { name: string; value: string }[];
  submitLabel?: string;
  cancelLabel?: string;
}

const DeleteButton = ({
  title,
  onSubmit,
  hiddenFields = [],
  submitLabel = "Excluir",
  cancelLabel = "Cancelar",
}: DeleteButtonProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="cursor-pointer" onClick={() => setOpen(true)}>
        <X width={25} height={25} />
      </DialogTrigger>
      <DialogContent className="gap-4 border border-white/25">
        <form action={onSubmit}>
          {hiddenFields.map((field) => (
            <input
              key={field.name}
              type="hidden"
              name={field.name}
              value={field.value}
            />
          ))}

          <DialogHeader className="my-2">
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>

          <div className="flex justify-end space-x-2 pt-4">
            <Button
              variant="outline"
              type="button"
              className="border border-white/25 cursor-pointer "
              onClick={() => setOpen(false)}
            >
              {cancelLabel}
            </Button>

            <Button
              type="submit"
              variant="destructive"
              className="cursor-pointer hover:bg-red-800"
            >
              {submitLabel}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteButton;
