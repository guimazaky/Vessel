import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { Label } from "@/components/ui/shadcn/label";
import { Input } from "@/components/ui/shadcn/input";

interface SettingsItem {
  title: string;
  label1: string;
  value1: string;
  label2: string;
  value2: string;
  label3: string;
  value3: string;
}

interface CardProps {
  label: SettingsItem[];
}

const SettingBigCard = ({ label }: CardProps) => {
  return (
    <div className="flex w-full gap-4">
      {label.map((item) => (
        <Card key={item.title} className="bg-black/25 w-full">
          <CardHeader>
            <CardTitle className="text-lg">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 ">
            <div className="flex flex-col w-80 gap-2 w-full">
              <Label htmlFor="name">{item.label1}</Label>
              <Input
                id="name"
                defaultValue={item.value1}
                readOnly
                className="bg-financial-bg-tertiary border-white/25"
              />
            </div>
            <div className="flex flex-col w-80 gap-2 w-full">
              <Label htmlFor="name">{item.label2}</Label>
              <Input
                id="name"
                defaultValue={item.value2}
                readOnly
                className="bg-financial-bg-tertiary border-white/25"
              />
            </div>
            <div className="flex flex-col w-80 gap-2 w-full">
              <Label htmlFor="name">{item.label3}</Label>
              <Input
                id="name"
                defaultValue={item.value3}
                readOnly
                className="bg-financial-bg-tertiary border-white/25"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default SettingBigCard;
