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

interface props {
  triggerLabel: string;
  title: string;
  onSubmit: (formData: FormData) => Promise<void>;
  children: React.ReactNode;
  submitLabel?: string;
}

const AddButton = ({
  triggerLabel,
  title,
  onSubmit,
  children,
  submitLabel = "Adicionar",
}: props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex gap-4">
      <div className="center bg-gradient-accent p-2 px-4 gap-8 rounded-lg cursor-pointer  ">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="text-black text-md hover:text-white cursor-pointer">
            {triggerLabel}
          </DialogTrigger>
          <DialogContent className="gap-4 border border-white/25">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                await onSubmit(formData);
                setOpen(false);
              }}
            >
              <DialogHeader className="my-2">
                <DialogTitle>{title}</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 my-4">{children}</div>
              <div className="flex justify-end space-x-2 pt-4 ">
                <Button
                  variant="outline"
                  type="button"
                  className="border border-white/25 cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  Cancelar
                </Button>

                <Button
                  type="submit"
                  className="bg-gradient-accent hover:shadow-glow cursor-pointer"
                >
                  {submitLabel}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
export default AddButton;
