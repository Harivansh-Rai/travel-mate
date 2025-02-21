import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

export function Popover({ children, ...props }: PopoverPrimitive.PopoverProps) {
  return (
    <PopoverPrimitive.Root {...props}>
      {children}
    </PopoverPrimitive.Root>
  );
}

export function PopoverTrigger({ children }: { children: React.ReactNode }) {
  return <PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>;
}

export function PopoverContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <PopoverPrimitive.Content
      className={cn("bg-white shadow-md rounded-md p-4", className)}
      side="bottom"
      align="center"
    >
      {children}
    </PopoverPrimitive.Content>
  );
}
